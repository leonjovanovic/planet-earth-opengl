#version 450 core

in vec2 TextCoords;

out vec4 fragmentColor;

uniform sampler2D earth;

void main()
{
	fragmentColor = texture(earth, TextCoords);
}