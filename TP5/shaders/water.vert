attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;
uniform float timeFactor;

varying vec2 vTextureCoord;

void main() {
	float directionalOffset = timeFactor * 0.0069;
	float stretchFactor = 0.4;
    vec4 offset = texture2D(uSampler2, aTextureCoord*vec2(stretchFactor, stretchFactor)+vec2(directionalOffset, directionalOffset));

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z+offset.z*0.1, 1.0);

	vTextureCoord = aTextureCoord;
}
