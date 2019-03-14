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
    this.blue = new CGFappearance(scene);
    this.blue.setAmbient(0/255, 156/255, 255/255, 1.0);
    this.blue.setDiffuse(0/255, 156/255, 255/255, 1.0);
    this.blue.setSpecular(0/255, 156/255, 255/255, 1.0);
    this.blue.setShininess(10.0);

    this.yellow = new CGFappearance(scene);
    this.yellow.setAmbient(255/255, 255/255, 0/255, 1.0);
    this.yellow.setDiffuse(255/255, 255/255, 0/255, 1.0);
    this.yellow.setSpecular(255/255, 255/255, 0/255, 1.0);
    this.yellow.setShininess(10.0);

    this.orange = new CGFappearance(scene);
    this.orange.setAmbient(255/255, 156/255, 0/255, 1.0);
    this.orange.setDiffuse(255/255, 156/255, 0/255, 1.0);
    this.orange.setSpecular(255/255, 156/255, 0/255, 1.0);
    this.orange.setShininess(10.0);

    this.purple = new CGFappearance(scene);
    this.purple.setAmbient(170/255, 79/255, 194/255, 1.0);
    this.purple.setDiffuse(170/255, 79/255, 194/255, 1.0);
    this.purple.setSpecular(170/255, 79/255, 194/255, 1.0);
    this.purple.setShininess(10.0);

    this.pink = new CGFappearance(scene);
    this.pink.setAmbient(255/255, 156/255, 210/255, 1.0);
    this.pink.setDiffuse(255/255, 156/255, 210/255, 1.0);
    this.pink.setSpecular(255/255, 156/255, 210/255, 1.0);
    this.pink.setShininess(10.0);

    this.green = new CGFappearance(scene);
    this.green.setAmbient(0/255, 255/255, 0/255, 1.0);
    this.green.setDiffuse(0/255, 255/255, 0/255, 1.0);
    this.green.setSpecular(0/255, 255/255, 0/255, 1.0);
    this.green.setShininess(10.0);

    this.red = new CGFappearance(scene);
    this.red.setAmbient(255/255, 20/255, 20/255, 1.0);
    this.red.setDiffuse(255/255, 20/255, 20/255, 1.0);
    this.red.setSpecular(255/255, 20/255, 20/255, 1.0);
    this.red.setShininess(10.0);
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
        this.green.apply();
        this.diamond.display();

        // ---- Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.pink.apply();
        this.triangle.display();

        // ---- Parallelogram Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, -0.8, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.yellow.apply();
        this.parallelogram.display();

        // ---- Small Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.purple.apply();
        this.trianglesmall.display();

        // ---- Big Triangle Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.orange.apply();
        this.trianglebig.display();

        // ---- Big Triangle 2 Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-3.4, 0.6, 0);
        this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.blue.apply();
        this.trianglebig2.display();

        // ---- Small Triangle 2 Operations
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.8, -2.8, 0);
        this.red.apply();
        this.trianglesmall2.display();

        this.scene.popMatrix();
    }

}