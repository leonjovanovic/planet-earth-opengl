#version 450 core

layout (location = 0) in vec3 position;
layout (location = 1) in vec2 textureCoords;

out vec2 textCoords;
out vec3 fragPosition;
out vec3 normal;

uniform mat4 model;
uniform mat4 viewV;

void main()
{
	gl_Position = model * vec4(position, 1.0);
	fragPosition = vec3(model * vec4(position, 1.0));
	normal = mat3(transpose(inverse(viewV * model))) * position;
	textCoords = textureCoords;
}