/**
 *  MyNest
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.branch = new MyTreeBranch(scene);
        this.branch = new MyTreeBranch(scene);
        this.branchCounter=0;

        this.materialNest = new CGFappearance(scene);
        this.materialNest.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNest.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNest.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNest.setShininess(10.0);
        this.materialNest.loadTexture('images/nest.jpg');
        this.materialNest.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.materialNest.apply();
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

        this.scene.pushMatrix();
        this.scene.scale(0.7,0.1,0.7);
        //this.materialCoal.apply();
        this.cube.display();
        this.scene.popMatrix();

        for(var i=0; i<this.branchCounter; i++) {
            this.scene.pushMatrix();
            this.scene.translate(0,i+0.05,0);
            this.branch.display();
            this.scene.popMatrix();
        }

    }

}
