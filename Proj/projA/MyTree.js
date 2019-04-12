/**
* MyTree
* @constructor
* @param scene - Reference to MyScene object
*/
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight,
         treeTopRadius/*, trunkTexture, treeTopTexture*/) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        //this.trunkTexture = trunkTexture;
        //this.treeTopTexture = treeTopTexture;
        this.treeTop = new MyCone(scene,10);
        this.trunk = new MyCylinder(scene,10);

        this.trunkMaterial = new CGFappearance(scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture('tex/trunk.jpeg');
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopMaterial = new CGFappearance(scene);
        this.treeTopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeTopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeTopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeTopMaterial.setShininess(10.0);
        this.treeTopMaterial.loadTexture('tex/420.jpeg');
        this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        //trunk/cylider operations
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.trunkMaterial.apply();
        this.trunk.display();
        this.scene.popMatrix();
        //treeTop/cone operations
        this.scene.pushMatrix();
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
        this.treeTopMaterial.apply();
        this.treeTop.display();
        this.scene.popMatrix();
    }
}