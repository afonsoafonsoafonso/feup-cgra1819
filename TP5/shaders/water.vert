attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

uniform float timefactor;

void main() {
	vTextureCoord = aTextureCoord;

	vec2 newTexCoord = mod( vTextureCoord + timefactor *0.0069, 1.0);
	
	vec4 filter = texture2D(uSampler2, newTexCoord);

	vec3 offset = aVertexNormal * filter.r *0.05;
		
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}
