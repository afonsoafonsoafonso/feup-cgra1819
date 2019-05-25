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
        // talvez adicionar patinhas fofinhas mais tarde
    }

    display() {
        //Body display
        this.scene.pushMatrix();
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
        this.scene.translate(0, 0.9, 1.3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.1,0.8,0.1);
        this.beak.display();
        this.scene.popMatrix();
    }
}