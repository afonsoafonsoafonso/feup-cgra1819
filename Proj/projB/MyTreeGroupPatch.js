/**
 * MyTreeGroupPatch
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree = new MyTree(this.scene);
        this.disalignment_factor = [];
        this.scale_factor = [];

        for(var i=0; i<9; i++) {
            this.disalignment_factor.push(Math.random()*1.2-1);
        }
        
        for(var i=0; i<9; i++) {
            this.scale_factor.push(Math.random()*0.2 + 0.8);
        }
    }
    
    display() {
        var t=0;
        for(var i=-9; i<9; i+=6) {
            for(var j=-9; j<9; j+=6) {
                this.scene.pushMatrix();
                this.scene.scale(this.scale_factor[t],this.scale_factor[t],this.scale_factor[t]);
                this.scene.translate(i+this.disalignment_factor[t],0,j+this.disalignment_factor[t]);
                this.tree.display();
                this.scene.popMatrix();
                t++;
            }
        }
    }
}