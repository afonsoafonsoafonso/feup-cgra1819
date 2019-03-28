class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

    //Initialize cube sides

    this.side = new MyQuad(scene);

    //Initialize object materials
    this.materialSide = new CGFappearance(scene);
    this.materialSide.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialSide.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialSide.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialSide.setShininess(10.0);
    this.materialSide.loadTexture('images/mineSide.png')
    this.materialSide.setTextureWrap('REPEAT', 'REPEAT');

    this.materialTop = new CGFappearance(scene);
    this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialTop.setShininess(10.0);
    this.materialTop.loadTexture('images/mineTop.png')
    this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBottom = new CGFappearance(scene);
    this.materialBottom.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialBottom.setShininess(10.0);
    this.materialBottom.loadTexture('images/mineBottom.png')
    this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();

        // ---- Side1 Operations
        this.scene.translate(0,0,0.5);
        this.materialSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side2 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.materialSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side3 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.materialSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

        // ---- Side4 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.materialSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.side.display();

         // ---- Top Operations

         this.scene.popMatrix();
         this.scene.pushMatrix();
         this.scene.rotate(Math.PI,0,1,1);
         this.scene.translate(0,0,0.5);
         this.materialTop.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.side.display();

         this.scene.popMatrix();
         this.scene.pushMatrix();
         this.scene.rotate(Math.PI,0,1,-1);
         this.scene.translate(0,0,0.5);
         this.materialBottom.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.side.display();   
    }
}