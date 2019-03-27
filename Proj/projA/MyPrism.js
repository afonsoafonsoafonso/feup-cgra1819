/**
 * MyQuad
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyPrism extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        //
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        //declaring bottom vertices
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang)); 
        }
        //declaring top vertices2
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
        }
        //declaring bottom vertices2
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang)); 
        }
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
        }
        //declaring indices
        for(var i=0; i<this.slices; i++) {
            if(i==this.slices-1) {
                this.indices.push(i, 0, this.slices);
                this.indices.push(i, this.slices, this.slices*2-1);
            }
            else {
                this.indices.push(i, i+1, i+this.slices+1);
                this.indices.push(i, i+this.slices+1, i+this.slices);
            }
        }
        //declaring bottom normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang+alphaAng/2), 0, -Math.sin(ang+alphaAng/2));
        }
        //declaring top normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang+alphaAng/2), 0, -Math.sin(ang+alphaAng/2));
        }
        //declaring bottom normals 2
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang-alphaAng/2), 0, -Math.sin(ang-alphaAng/2));
        }
        //declaring top normals 2
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang-alphaAng/2), 0, -Math.sin(ang-alphaAng/2));
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}