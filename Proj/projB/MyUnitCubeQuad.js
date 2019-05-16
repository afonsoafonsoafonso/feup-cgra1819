class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

        //Initialize cube sides

        this.side = new MyQuad(scene);

    }

    display() {
        this.scene.pushMatrix();

        // ---- Side1 Operations
        this.scene.translate(0, 0, 0.5);
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side2 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side3 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side4 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(3 * Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Top Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 1);
        this.scene.translate(0, 0, 0.5);
        //  this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, -1);
        this.scene.translate(0, 0, 0.5);
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();
        this.scene.popMatrix();
    }
}