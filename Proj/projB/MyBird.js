/*
* MyBird
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.body = new MyUnitCubeQuad(scene);
        this.neck = new MyCylinder(scene, 10/*???*/);
        this.head = new MyUnitCubeQuad(scene,5,5);
        this.beak = new MyCone(scene,4,4);
        this.wing = new MyTriangle(scene);
        this.eye = new MyUnitCubeQuad(scene);
        this.tail = new MyParallelogram(scene);
        // talvez adicionar patinhas fofinhas mais tarde
    }

    display() {
        //Body display
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1.5);
        this.body.display();
        this.scene.popMatrix();
        //Neck display
        this.scene.pushMatrix();
        this.scene.translate(-0.1, 0.45, 0.5);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.scale(0.1,0.6,0.1);
        this.neck.display();
        this.scene.popMatrix();
        //Head display
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 1);
        this.scene.scale(0.65, 0.65, 0.65);
        this.head.display();
        this.scene.popMatrix();
        //beak display
        this.scene.pushMatrix();
        this.scene.translate(0, 0.9, 1.1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.1,0.8,0.1);
        this.beak.display();
        this.scene.popMatrix();
        //left wing display
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.scale(1, 1, 0.2);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.wing.display();
        this.scene.popMatrix();
        //right wing display
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.scale(1, 1, 0.2);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.wing.display();
        this.scene.popMatrix();
        //eye 1 display
        this.scene.pushMatrix()
        this.scene.translate(-0.2, 1.2, 1.3);
        this.scene.scale(0.15, 0.15, 0.15);
        this.eye.display();
        this.scene.popMatrix();
        //eye 2 display
        this.scene.pushMatrix();
        this.scene.translate(0.2, 1.2, 1.3);
        this.scene.scale(0.15, 0.15, 0.15);
        this.eye.display();
        this.scene.popMatrix();
        //tail display
        this.scene.pushMatrix();
        this.scene.translate(0.22, 0, -0.4);
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.tail.display();
        this.scene.popMatrix();
    }
}