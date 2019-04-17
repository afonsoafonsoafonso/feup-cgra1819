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
        
        this.materialLake = new CGFappearance(this);
        this.materialLake.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialLake.setSpecular(4, 4, 4, 4);
        this.materialLake.setDiffuse(0.7, 0.7, 0.7, 1);
        this.materialLake.setShininess(8);
        this.materialLake.loadTexture('tex/water.jpeg');
        this.materialLake.setTextureWrap('REPEAT','REPEAT');


        this.materialDown = new CGFappearance(this);
        this.materialDown.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialDown.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialDown.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialDown.setShininess(10.0);
        this.materialDown.loadTexture('tex/grass.jpg')
        this.materialDown.setTextureWrap('REPEAT', 'REPEAT');
    
        this.plane_coords = [0,50,
                            50,50,
                            0,0,
                            50,0];

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyQuad(this,this.plane_coords);
        this.house = new MyHouse(this);
        this.hill = new MyVoxelHill(this,4);
        this.treeRow = new MyTreeRowPatch(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.cubeMap = new MyCubeMap(this);
        this.fire = new MyBonfire(this);
        /*this.prism = new MyPrism(this,5);
        this.cylinder = new MyCylinder(this,30);
        this.cone = new MyCone(this,10,10);
        this.tree = new MyTree(this,3,2,2,3);
        this.treePatch = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.treeRow = new MyTreeRowPatch(this);*/

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.dayTimeMode = 0;
        this.dayTimeModes = {'Day': 0, 'Night': 1};
        this.bonfire = false;
        this.textures = true;
        
    }
    initLights() {
        //sunlight
        this.lights[0].setPosition(10, 15, 10, 1);
        this.lights[0].setDiffuse(255/255*0.8, 221/255*0.8 , 204/255*0.8 , 1.0);
        this.lights[0].setSpecular(255/255*0.8, 221/255*0.8 , 204/255*0.8 , 1.0);
        this.lights[0].setVisible(true);
        this.lights[0].constant_attenuation = 0.2; 
        this.lights[0].disable();
        this.lights[0].update();
        //moonlight
        this.lights[1].setPosition(10,15,10,1);
        this.lights[1].setDiffuse(212/255 *0.4, 235/255 *0.4, 255/255 *0.4, 1.0);
        this.lights[1].setSpecular(212/255 *0.4, 235/255 *0.4, 255/255 *0.4, 1.0);
        this.lights[1].setVisible(true);
        this.lights[1].constant_attenuation=0.1;
        this.lights[1].linear_attenuation = 0.05;
        //this.lights[1].setConstantAttenuation(0.1);
        //this.lights[1].setLinearAttenuation(0.05);
        this.lights[1].enable();
        this.lights[1].update();
        //bonfire light
        this.lights[2].setPosition(3,1.5,0,1);
        this.lights[2].setDiffuse(255/255 *5, 147/255 *5, 41/255 *5, 1.0);
        this.lights[2].setSpecular(255/255 *8, 147/255 *8, 41/255 *8, 1.0);
        this.lights[2].setVisible(false);
        this.lights[2].quadratic_attenuation = 0.8;
        this.lights[2].disable();
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 100, vec3.fromValues(22, 4, -7), vec3.fromValues(3, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        if(this.dayTimeMode==0) {
            this.lights[0].enable();
            this.lights[1].disable();
        }
        else {
            this.lights[0].disable();
            this.lights[1].enable();
        }
        this.cubeMap.setDayTimeMode(this.dayTimeMode);

        if(this.bonfire==true) this.lights[2].enable();
        else this.lights[2].disable();

        if (this.textures == true) this.enableTextures(true);
        else this.enableTextures(false);

        // ---- BEGIN Primitive drawing section
        
        
        //drawing house in center of scene
        this.pushMatrix();
        this.translate(0,1,0);
        this.house.display();
        this.popMatrix();

        //drawing smaller hill
        this.pushMatrix();
        this.scale(1,2,1)   ;
        this.translate(-10,0,-6);
        this.hill.display();
        this.popMatrix();
        //drawing taller hill
        this.pushMatrix();
        this.translate(-10,0,12);
        this.hill.display();
        this.popMatrix();   


        //drawing tree rows
        this.pushMatrix();
        this.translate(-8,0,-13);
        this.rotate(Math.PI/2,0,1,0);
        this.scale(0.6,0.6,0.6);
        this.treeRow.display();
        this.popMatrix();
        //
        this.pushMatrix();
        this.translate(-4,0,6.5);
        this.scale(0.6,0.6,0.6);
        this.treeRow.display();
        this.popMatrix();

        //making tree patches
        this.pushMatrix();
        this.translate(0.3,0,-5);
        this.scale(0.6,0.6,0.6);
        this.treeGroup.display();
        this.popMatrix();
        //
        this.pushMatrix();
        this.scale(0.6,0.6,0.6);
        this.translate(-14,0,8.3);
        this.treeGroup.display();
        this.popMatrix();
        //
        this.pushMatrix();
        this.scale(0.6,0.6,0.6);
        this.translate(8,0,15);
        this.treeGroup.display();
        this.popMatrix();

        // CubeMap
        this.pushMatrix();
        this.translate(0,-1,0);
        this.cubeMap.display();
        this.popMatrix();

        //drwaing bonfire
        this.pushMatrix();
        this.translate(3,0,0);
        this.fire.display();
        this.popMatrix();
        
        //drawing plane / grass field / base of rest of scene
        this.pushMatrix();
        this.scale(60,60,60);
        this.rotate(-Math.PI/2,1,0,0);
        this.materialDown.apply();
        this.plane.display();
        this.popMatrix();

        //drwaing water / lake
        this.pushMatrix();
        this.translate(7,0.01,0);
        this.scale(5,5,5);
        this.rotate(-Math.PI/2,1,0,0);
        this.materialLake.apply();
        this.plane.display();
        this.popMatrix();
        
        // ---- END Primitive drawing section
    }
}