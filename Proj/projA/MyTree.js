/**
* MyTree
* @constructor
* @param scene - Reference to MyScene object
*/
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight,
         treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.initBuffers();
    }
    initBuffers() {
        this.cone = new MyCone(scene);
        this.quad = new MyQuad(scene);
    }
}