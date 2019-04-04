/**
 * MyTreeGroupPatch
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.trees = [];
        this.disalignment_factor = [];
        for(var i=0; i<9; i++) {
            this.disalignment_factor.push(Math.random()*1.5-1);
        }
        var scale_factor;
        for(var i = 0; i<9; i++) {
            scale_factor = Math.random()*0.4 + 0.8;
            this.trees.push(new MyTree(this.scene,3*scale_factor,1*scale_factor,4.5*scale_factor,3*scale_factor));

        }

    }
    
    display() {
        var t=0;

        for(var i=-9; i<9; i+=6) {
            for(var j=-9; j<9; j+=6) {
                this.scene.pushMatrix();
                this.scene.translate(i+this.disalignment_factor[t],0,j+this.disalignment_factor[t]);
                this.trees[t].display();
                this.scene.popMatrix();
                t++;
            }
        }
    }
}
