#version 450 core

layout (triangles) in;
layout (triangle_strip, max_vertices = 3) out;

in vec2 textCoords[];

out vec2 TextCoords;


void main()
{
	if(textCoords[0].x == 0 && textCoords[1].x > 0.9f && textCoords[2].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[0].y;
		EmitVertex();
		gl_Position = gl_in[1].gl_Position;
		TextCoords = textCoords[1];
		EmitVertex();
		gl_Position = gl_in[2].gl_Position;
		TextCoords = textCoords[2];
		EmitVertex();			
		EndPrimitive();
	}
	else if(textCoords[1].x == 0 && textCoords[0].x > 0.9f && textCoords[2].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords = textCoords[0];
		EmitVertex();
		gl_Position = gl_in[1].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[1].y;
		EmitVertex();
		gl_Position = gl_in[2].gl_Position;
		TextCoords = textCoords[2];
		EmitVertex();			
		EndPrimitive();
	}
	else if(textCoords[2].x == 0 && textCoords[0].x > 0.9f && textCoords[1].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords = textCoords[0];
		EmitVertex();
		gl_Position = gl_in[1].gl_Position;
		TextCoords = textCoords[1];
		EmitVertex();	
		gl_Position = gl_in[2].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[2].y;
		EmitVertex();		
		EndPrimitive();
	}
	else if(textCoords[0].x == 0 && textCoords[1].x == 0 && textCoords[2].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[0].y;
		EmitVertex();
		gl_Position = gl_in[1].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[1].y;
		EmitVertex();
		gl_Position = gl_in[2].gl_Position;
		TextCoords = textCoords[2];
		EmitVertex();			
		EndPrimitive();
	}
	else if(textCoords[0].x == 0 && textCoords[2].x == 0 && textCoords[1].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[0].y;
		EmitVertex();
		gl_Position = gl_in[1].gl_Position;
		TextCoords = textCoords[1];
		EmitVertex();	
		gl_Position = gl_in[2].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[2].y;
		EmitVertex();		
		EndPrimitive();
	}
	else if(textCoords[1].x == 0 && textCoords[2].x == 0 && textCoords[0].x > 0.9f){
		gl_Position = gl_in[0].gl_Position;
		TextCoords = textCoords[0];
		EmitVertex();	
		gl_Position = gl_in[1].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[1].y;
		EmitVertex();
		gl_Position = gl_in[2].gl_Position;
		TextCoords.x = 1;
		TextCoords.y = textCoords[2].y;
		EmitVertex();		
		EndPrimitive();
	}
	else{
		int i;
		for(i = 0; i < gl_in.length(); i++)
		{
			gl_Position = gl_in[i].gl_Position;
			TextCoords = textCoords[i];

			EmitVertex();
		}
		EndPrimitive();	
	}
}  