#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

float weight = 0.55; 

varying vec3 coords;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 filter = texture2D(uSampler3, vec2(0.1, 1.0 - coords.z));

	gl_FragColor = filter * weight + color * weight;
}