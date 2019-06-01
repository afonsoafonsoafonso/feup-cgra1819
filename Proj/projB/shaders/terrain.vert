attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;


uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;
uniform sampler2D uSampler;
uniform sampler2D uSampler3;
varying vec2 vTextureCoord;

varying vec3 coords;

void main() {
    vec4 filter = texture2D(uSampler2, aTextureCoord);
	vec3 offset = vec3	(0, 0, filter.r );
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset*1.0, 1.0);

	vTextureCoord = aTextureCoord;

	coords = vec3(aVertexPosition + offset*1.0);
}
