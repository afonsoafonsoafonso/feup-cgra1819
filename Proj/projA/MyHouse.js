/**
 * MyHouse
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene,size) { //size is the side lenght of the base cube
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.pyr = new MyPyramid(scene,4,2);
        this.prism = new MyPrism(scene,5);

        this.materialRoof = new CGFappearance(scene);
        this.materialRoof.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialRoof.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialRoof.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialRoof.setShininess(10.0);
        this.materialRoof.loadTexture('tex/solar.jpg');
        this.materialRoof.setTextureWrap('REPEAT', 'REPEAT');

        this.materialWoodWall = new CGFappearance(scene);
        this.materialWoodWall.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWoodWall.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWoodWall.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWoodWall.setShininess(10.0);
        this.materialWoodWall.loadTexture('tex/wall.jpg');
        this.materialWoodWall.setTextureWrap('REPEAT', 'REPEAT');

        this.materialPillar = new CGFappearance(scene);
        this.materialPillar.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialPillar.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialPillar.setSpecular(10, 10, 10, 1);
        this.materialPillar.setShininess(10.0);
        this.materialPillar.loadTexture('tex/pillar.jpg');
        this.materialPillar.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        //cube (main house) operations);
        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.materialWoodWall.apply();
        this.cube.display();
        this.scene.popMatrix();

        //pyramid (roof) operations
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.scale(2.18,2.18,2.18);
        this.materialRoof.apply();
        this.pyr.display();
        this.scene.popMatrix();

        //prysm2 (collumns/pillars) operations
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.scale(0.2,2,0.2);
        this.scene.translate(-3.5,0,5.5);
        this.materialPillar.apply();
        this.prism.display();
        this.scene.popMatrix();
        //prysm1 "    "    "     "    "    "
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.scale(0.2,2,0.2);
        this.scene.translate(-3.5,0,-5.5);
        this.prism.display();
        this.scene.popMatrix();
    }
}