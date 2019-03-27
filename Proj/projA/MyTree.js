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
        this.display();
    }
    display() {
        //trunk/cylider operations
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.trunk.display();
        this.scene.popMatrix();
        //treeTop/cone operations
        this.scene.pushMatrix();
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
        this.treeTop.display();
        this.scene.popMatrix();
    }
}