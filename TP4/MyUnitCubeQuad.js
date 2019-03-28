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
        // ---- Side Operations
        this.scene.translate(0,0,0.5);
        this.materialSide.apply();
        this.side.display();
    }
}