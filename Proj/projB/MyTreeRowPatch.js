/**
 * MyTreeRowPatch
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree = [];
        for(var i=0; i<9; i++) {
            this.tree.push(new MyTree(this.scene));
        }
        this.disalignment_factor = [];
        this.scale_factor = [];

        for(var i=0; i<9; i++) {
            this.disalignment_factor.push(Math.random()*2-1);
        }

        for(var i=0; i<9; i++) {
            this.scale_factor.push(Math.random()*0.2 + 0.8);
        }
    }

    display() {
        var t=0;
        for(var i=-18; i<18; i+=6) {
            this.scene.pushMatrix();
            this.scene.scale(this.scale_factor[t],this.scale_factor[t],this.scale_factor[t]);
            this.scene.translate(this.disalignment_factor[t]*2,0,i/2.5+this.disalignment_factor[t]);
            this.tree[t].display();
            this.scene.popMatrix();
            t++;
        }
    }
}