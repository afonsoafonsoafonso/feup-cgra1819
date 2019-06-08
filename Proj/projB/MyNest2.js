class MyNest2 extends CGFobject {
    constructor(scene) {
        super(scene);
        this.branch = new MyNestBranch(scene);
    }

    display() {
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/6,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/3.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/2.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/1.8,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
    }
}