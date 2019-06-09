class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        //this.branch = new MyNestBranch(scene); 
        this.birdBranch = new MyTreeBranch(scene);
        this.base = new MyHalfSphere(scene,30,5);
        this.int = new MyHalfSphereInv(scene,30,5);
        this.branchCounter=2;
        
        this.materialNest = new CGFappearance(scene);
        this.materialNest.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNest.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNest.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNest.setShininess(10.0);
        this.materialNest.loadTexture('images/nest3.jpeg');
        this.materialNest.setTextureWrap('REPEAT', 'REPEAT');
    }

    branchDrop() {
        ++this.branchCounter;
    }

    display() {
        /*for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/6,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/3.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3 ) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/2.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }*/
        this.scene.pushMatrix();
        this.materialNest.apply();
        this.scene.scale(0.5,0.2,0.5);
        this.scene.translate(0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.materialNest.apply();
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.scale(0.5,-0.2,0.5);
        this.scene.translate(0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.int.display();
        this.scene.popMatrix();

        /*for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/5) {
            this.scene.pushMatrix();
            this.materialNest.apply();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/1.8,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }*/

        for(var i=0; i<this.branchCounter; i++) {
            switch(i) {
                case 0:
                    this.scene.pushMatrix();
                    this.scene.rotate(-Math.PI/7,0,0,1);
                    this.scene.translate(0,0,0);
                    this.scene.scale(0.45,0.45,0.45);
                    this.birdBranch.display();
                    this.scene.popMatrix();
                    break;
                case 1:
                    this.scene.pushMatrix();
                    this.scene.translate(0,0.04,0.2);
                    this.scene.rotate(-Math.PI/4,0,1,0);
                    this.scene.rotate(-Math.PI/7,0,0,1);
                    this.scene.scale(0.45,0.45,0.45);
                    this.birdBranch.display();
                    this.scene.popMatrix();
                    break;
            }

            //this.scene.pushMatrix();
            //this.scene.translate(0,i+0.05,0);
            //this.birdBranch.display();
            //this.scene.popMatrix();
        }
    }
}