/**
* MyTangram
* @constructor
* @param scene - Reference to MyScene object
*/
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
    //Initialize tangram objects
    this.diamond = new MyDiamond(scene);
    this.triangle = new MyTriangle(scene);
    this.parallelogram = new MyParallelogram(scene);
    this.trianglesmall = new MyTriangleSmall(scene);
    this.trianglebig = new MyTriangleBig(scene);
    this.trianglebig2 = new MyTriangleBig(scene);
    this.trianglesmall2 = new MyTriangleSmall(scene);
    this.scene = scene;

    //Initialize object materials
    this.material = new CGFappearance(scene);
    this.material.setAmbient(0.1, 0.1, 0.1, 1);
    this.material.setDiffuse(0.9, 0.9, 0.9, 1);
    this.material.setSpecular(0.1, 0.1, 0.1, 1);
    this.material.setShininess(10.0);
    this.material.loadTexture('images/tangram.png')
    this.material.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {
        this.scene.pushMatrix();
        // ---- Diamond Operations
        var rot = [ Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                       -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                        0, 0, 1 , 0,
                        0, 0, 0, 1  ];
        var trans = [1, 0, 0, 0,
                     0, 1, 0, 0,
                     0, 0, 1, 0,
                     Math.sqrt(2)/2, Math.sqrt(2)/2, 0, 1 ];
        this.scene.multMatrix(trans);
        this.scene.multMatrix(rot);
        this.material.apply();
        this.diamond.display();

        // ---- Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();

        // ---- Parallelogram Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, -0.8, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.material.apply();
        this.parallelogram.display();

        // ---- Small Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.trianglesmall.display();

        // ---- Big Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.trianglebig.display();

        // ---- Big Triangle 2 Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-3.4, 0.6, 0);
        this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.trianglebig2.display();

        // ---- Small Triangle 2 Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.8, -2.8, 0);
        this.trianglesmall2.display();
        this.scene.popMatrix();
    }

}