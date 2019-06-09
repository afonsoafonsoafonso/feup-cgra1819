/*
*   MyTreeBranch
*/
class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.branch = new MyCylinder(scene, 10);

        this.materialBranch = new CGFappearance(scene);
        this.materialBranch.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialBranch.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBranch.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBranch.setShininess(10.0);
        this.materialBranch.loadTexture('images/branch.jpg');
        this.materialBranch.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.08, 1.3, 0.08);
        this.materialBranch.apply();
        this.branch.display();
        this.scene.popMatrix();
    }
}