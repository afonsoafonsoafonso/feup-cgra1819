#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

float weight = 0.55; 

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 height = texture2D(uSampler2, vTextureCoord);
	vec4 filter = texture2D(uSampler3, vec2(1.0, 1.0 - height.r));

	gl_FragColor = filter * weight + color * (1.0 - weight);
}