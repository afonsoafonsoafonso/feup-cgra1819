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

void main() {
    vec4 filter = texture2D(uSampler, aTextureCoord);
	vec3 offset = vec3	(0, 0, filter.b);
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z+offset.z*1.0, 1.0);

	vTextureCoord = aTextureCoord;
}
