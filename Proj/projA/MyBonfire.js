class MyBonfire extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.triangle = new MyTriangleBig(scene);
        this.plane = new MyQuad(scene);


        //materials

        this.materialLog = new CGFappearance(scene);
        this.materialLog.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialLog.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialLog.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialLog.setShininess(1.0);
        this.materialLog.loadTexture('tex/log2.jpg');
        this.materialLog.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        this.scene.pushMatrix();
        this.materialLog.apply();
        this.scene.translate(-0.45,0,0);
        this.scene.scale(0.2,0.4,0.7);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.45);
        this.scene.scale(0.7,0.4,0.2);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.45,0,0);
        this.scene.scale(0.2,0.4,0.7);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.45);
        this.scene.scale(0.7,0.4,0.2);
        this.cube.display();
        this.scene.popMatrix();


        //
        this.scene.pushMatrix();
        this.scene.scale(0.075,0.5,0.075);
        this.scene.translate(0,0,-2);
        this.triangle.display();
        //
        this.scene.translate(2,0,2);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.triangle.display();
        //
        this.scene.translate(-2,0,-2);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.triangle.display();
        //
        this.scene.translate(2,0,2);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.triangle.display();
        this.scene.popMatrix();

    }
}