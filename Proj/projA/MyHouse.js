/**
 * MyHouse
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene,size) { //size is the side lenght of the base cube
        super(scene);
        this.cube = new MyUnitCube(scene);
        this.pyr = new MyPyramid(scene,4,2);
        this.prism1 = new MyPrism(scene,10);
        this.prism2 = new MyPrism(scene,10);
    }
    display() {
        //cube (main house) operations);
        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.cube.display();
        this.scene.popMatrix();
        //pyramid (roof) operations
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.scale(2.18,2.18,2.18);
        this.pyr.display();
        this.scene.popMatrix();
        //prysm2 (collumns/pillars) operations
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.scale(0.2,2,0.2);
        this.scene.translate(-3.5,0,5.5);
        this.prism2.display();
        this.scene.popMatrix();
        //prysm1 "    "    "     "    "    "
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.scale(0.2,2,0.2);
        this.scene.translate(-3.5,0,-5.5);
        this.prism1.display();
        this.scene.popMatrix();
    }
}