/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2
			1, 1, 0,	//0 3
			-1, -1, 0,	//1 4 
			1, -1, 0,	//2 5 
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [
			0, 0, 1, //0
			0, 0, 1, //1
			0, 0, 1, //2
			0, 0, -1, //0
			0, 0, -1, //1
			0, 0, -1, //2
		];

		this.texCoords = [
			0,0.5,
			0,1,
			0.5,1,
			0,0.5,
			0,1,
			0.5,1
		];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

