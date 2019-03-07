/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
    initBuffers(){
        this.vertices = [
            0, 0, 0,
            1, 0, 0,
            2, 0, 0,
            3, 1, 0, 
            2, 1, 0,
            1, 1, 0
        ];
    
        this.indices = [
            0, 1, 5,
            1, 2, 5,
            2, 4, 5,
            3, 4, 2,
        ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}