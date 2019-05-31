class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);

    //Initialize cube sides

    this.side = new MyQuad(scene);

    //Initialize object materials

    // Day Textures
    this.materialFront = new CGFappearance(scene);
    this.materialFront.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialFront.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialFront.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialFront.setShininess(10.0);
    this.materialFront.loadTexture('tex/front.JPG'); //day
    this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

    this.materialLeft = new CGFappearance(scene); // left
    this.materialLeft.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialLeft.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialLeft.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialLeft.setShininess(10.0);
    this.materialLeft.loadTexture('tex/left.JPG'); //day
    this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

    this.materialRight = new CGFappearance(scene); //right
    this.materialRight.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialRight.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialRight.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialRight.setShininess(10.0);
    this.materialRight.loadTexture('tex/right.JPG'); //day
    this.materialRight.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBack = new CGFappearance(scene); //back
    this.materialBack.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialBack.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialBack.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialBack.setShininess(10.0);
    this.materialBack.loadTexture('tex/back.JPG'); //day
    this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

    this.materialUp = new CGFappearance(scene); //up
    this.materialUp.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialUp.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialUp.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialUp.setShininess(10.0);
    this.materialUp.loadTexture('tex/up.JPG'); //day
    this.materialUp.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        
        this.scene.pushMatrix();
        this.scene.scale(60,60,60);
        this.scene.translate(0,0.5,0);

        // ---- Side1 Operations
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.materialLeft.apply();
        this.side.display();

        // ---- Side2 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,-0.5);
        this.materialFront.apply();
        this.side.display();

        // ---- Side3 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,-0.5);
        this.materialRight.apply();
        this.side.display();

        // ---- Side4 Operations

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.translate(0,0,-0.5);
        this.materialBack.apply();
        this.side.display();

         // ---- Top Operations
        /*
         this.scene.popMatrix();
         this.scene.pushMatrix();
         this.scene.rotate(Math.PI,0,1,1);
         this.scene.translate(0,0,-0.5);
         this.materialDown.apply();
         this.side.display();*/
        
         this.scene.popMatrix();
         this.scene.pushMatrix();
         this.scene.rotate(Math.PI,0,1,-1);
         this.scene.translate(0,0,-0.5);
         this.materialUp.apply();
         this.side.display();   
         this.scene.popMatrix();
         this.scene.popMatrix();
    }
}