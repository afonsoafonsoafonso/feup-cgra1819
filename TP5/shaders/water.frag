#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timefactor;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord +vec2(timefactor*.00114,timefactor * 0.027));
	
	gl_FragColor = color;
}