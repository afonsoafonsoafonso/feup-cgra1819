/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        
        this.green = new CGFappearance(scene);
        this.green.setAmbient(34/255, 139/255, 34/255, 1.0);
        this.green.setDiffuse(34/255, 139/255, 34/255, 1.0);
        this.green.setSpecular(34/255, 139/255, 34/255, 1.0);
        this.green.setShininess(10.0);
	}
	initBuffers() {
		this.vertices = [
            0,0,0,
            6,0,0, 
            0,3,0,
            -3,0,0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2,1,0
		];

		this.normals = [
			0, 0, 1, //0
			0, 0, 1, //1
			0, 0, 1, //2
			0, 0, 1, //0
			0, 0, 1, //1
			0, 0, 1, //2
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    display(){
        this.green.apply();
        super.display();
    }
}

