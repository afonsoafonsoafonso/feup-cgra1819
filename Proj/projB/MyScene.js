/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.nest = new MyNest(this);
        this.plane = new MyTerrain(this);
        this.bird = new MyBird(this);
        this.branch = new MyTreeBranch(this);
        this.branches = [];
        this.branchDisplayFlags = [0, 0, 0, 0];
        this.cubeMap = new MyCubeMap(this);
        //this.branchPos[4][4];
        this.branchX = [];
        //this.branchY = [];
        this.branchZ = [];
        this.branchR = [];
        for(var i=0; i<4; i++) {
            this.branchX.push(Math.random()*60.1-30.1);
            this.branchZ.push(Math.random()*60.1-30.1);
            this.branchR.push(Math.random()*2*Math.PI);
            this.branches.push(new MyTreeBranch(this));
            //this.branchDisplayFlags.push(0);
        }

        //initiazliing bird variables
        this.acceleration = 0.1;
        this.scaleFactor = 1;
        this.speedFactor = 1;

        //Objects connected to MyInterface

        // set the scene update period 
		// (to invoke the update() method every 50ms or as close as possible to that )
        this.setUpdatePeriod(50);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
        var text = "Keys pressed: "; var keysPressed = false;
        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W "; keysPressed = true;
            this.bird.accelerate(this.acceleration*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S "; keysPressed = true;
            this.bird.accelerate(-this.acceleration*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A "; keysPressed = true;
            this.bird.turn(Math.PI/10*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D "; keysPressed = true;
            this.bird.turn(-Math.PI/10*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R "; keysPressed = true;
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P "; keysPressed = true;
            this.bird.drop();
        }
        if (keysPressed)
            console.log(text);
    }
    update(t) {
        this.checkKeys();
        this.bird.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 8);
        this.plane.display();
        this.popMatrix();

        //Translate everything up to match terrain height 
        this.pushMatrix();
        this.translate(0,3,0);

        //MyBird Drawing
       
        this.pushMatrix();
        this.translate(0,3,0);
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.bird.display();
        this.popMatrix();
        //MyTreeBranch drawing
        //this.pushMatrix();
        //this.translate(0,-2.95,0);
        for(var i=0; i<4; i++) {
            if(this.branchDisplayFlags[i]==0) {
                this.pushMatrix();
                this.translate(this.branchX[i], 0.05, this.branchZ[i]);
                //this.rotate(this.branchR[i]);
                this.branches[i].display();
                this.popMatrix();
            }
        }

        this.pushMatrix();
        //this.translate(0.)
        this.scale(2.5,2.5,2.5); //por esta merda dentro do nest
        this.nest.display();
        this.popMatrix();
        
        // back to normal height
        this.popMatrix();

        this.pushMatrix();
        this.cubeMap.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}