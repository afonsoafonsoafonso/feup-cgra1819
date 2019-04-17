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



        this.materialDown = new CGFappearance(this);
        this.materialDown.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialDown.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialDown.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialDown.setShininess(100.0);
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
        this.hill1 = new MyVoxelHill(this,4);
        this.hill2 = new MyVoxelHill(this,3);
        this.treeRow = new MyTreeRowPatch(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.cubeMap = new MyCubeMap(this);
        /*this.prism = new MyPrism(this,5);
        this.cylinder = new MyCylinder(this,30);
        this.cone = new MyCone(this,10,10);
        this.tree = new MyTree(this,3,2,2,3);
        this.treePatch = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.treeRow = new MyTreeRowPatch(this);*/

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
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

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        
        //drawing house in center of scene
        this.pushMatrix();
        this.translate(0,1,0);
        this.house.display();
        this.popMatrix();

        //drawing maller hill
        this.pushMatrix();
        this.translate(-10,0,-6);
        this.hill1.display();
        this.popMatrix();

        //drawing bigger hill
        this.pushMatrix();
        this.translate(-8,0,-22);
        this.hill2.display();
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


        // CubeMap
        this.pushMatrix();
        this.cubeMap.display();
        //this.cylinder.display();
        //this.prism.display();
        //this.cone.display();
        //this.cylinder.enableNormalViz();
        //this.tree.display();
        //this.treePatch.display();
        //this.house.display();
        //this.treeRow.display();
        
        //drawing plane / grass field / base of rest of scene
        this.pushMatrix();
        this.scale(60,60,60);
        this.rotate(-Math.PI/2,1,0,0);
        this.materialDown.apply();
        this.plane.display();
        this.popMatrix();
        
        // ---- END Primitive drawing section
    }
}