/**
 * MyCylinder
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyCylinder extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
       // this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        //declaring bottom vertices
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang)); 
        }
        //declaring top vertices
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
        //declaring lower normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        }
        //declaring upper normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        }
        //declaring texture coordenates

       /* for(var i=0; i<this.slices;i++)
            this.texCoords.push(
                i/this.slices,0,
                (i+1)/this.slices,0,
                i/this.slices,1,
                (i+1)/this.slices,1
            );        
*/
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}