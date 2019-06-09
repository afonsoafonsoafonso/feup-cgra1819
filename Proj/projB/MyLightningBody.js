/**
 * MyLightningBody
 */
class MyLightningBody extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cyl = new MyCylinder(scene,5);

        this.white = new CGFappearance(scene);
        this.white.setAmbient(1,1,1,1);
        this.white.setDiffuse(1,1,1,0);
        this.white.setSpecular(1,1,1,0);
        this.white.setShininess(10.0);
    }

    display() {
        this.scene.pushMatrix();
        this.white.apply();
        this.scene.scale(0.03,1,0.03);
        this.cyl.display();
        this.scene.popMatrix();
    }
}