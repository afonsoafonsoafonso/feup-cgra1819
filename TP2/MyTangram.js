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
    }

    display(scene) {
        // ---- Diamond Operations
        var rot = [ Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                       -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                        0, 0, 1 , 0,
                        0, 0, 0, 1  ];
        var trans = [1, 0, 0, 0,
                     0, 1, 0, 0,
                     0, 0, 1, 0,
                     Math.sqrt(2)/2, Math.sqrt(2)/2, 0, 1 ];
        scene.multMatrix(trans);
        scene.multMatrix(rot); 
        this.diamond.display();

        // ---- Triangle Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(-1,1,0);
        scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();

        // ---- Parallelogram Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(-2, -0.8, 0);
        scene.rotate(Math.PI, 0, 0, 1);
        this.parallelogram.display();

        // ---- Small Triangle Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        scene.rotate(-Math.PI/4, 0, 0, 1);
        this.trianglesmall.display();

        // ---- Big Triangle Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(-2, 0, 0);
        scene.rotate(-Math.PI/2, 0, 0, 1);
        this.trianglebig.display();

        // ---- Big Triangle 2 Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(-3.4, 0.6, 0);
        scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.trianglebig2.display();

        // ---- Small Triangle 2 Operations
        scene.popMatrix();
        scene.pushMatrix();
        scene.translate(-1.8, -2.8, 0);
        this.trianglesmall2.display();

        scene.popMatrix();
    }

}