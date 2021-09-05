#version 450 core

in vec2 TextCoords;
in vec3 FragPosition; 
in vec3 Normal; 

out vec4 fragmentColor;

uniform sampler2D earth;
uniform vec3 lightPos; 
uniform vec3 lightColor;
uniform vec3 viewPos;
uniform mat4 viewF;

void main()
{
	//ambient
	float ambientStrenght = 0.1;
	vec3 ambient = ambientStrenght * lightColor;
	
	//diffuse	
    vec3 LightPos = vec3(viewF * vec4(lightPos, 1.0)); 	
	vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(LightPos - FragPosition);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;	
	
    // specular
    float specularStrength = 0.5;
    vec3 viewDir = normalize(viewPos - FragPosition);
    vec3 reflectDir = reflect(-lightDir, norm);  
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 specular = specularStrength * spec * lightColor;  
	
	vec4 result = vec4(ambient + diffuse + specular, 1.0) * texture(earth, TextCoords);	
	fragmentColor = result;
}