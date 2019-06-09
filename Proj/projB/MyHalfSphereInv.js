/**
 * MyHalfSphere
 */

class MyHalfSphereInv extends CGFobject {
    constructor(scene, slices, stacks) {
       super(scene);
       this.slices = slices;
       this.stacks = stacks;
       this.initBuffers();
    }

    initBuffers() {
       this.vertices = [];
       this.indices = [];
       this.normals = [];
       this.texCoords = [];

       /*theta*/var alphaAng = 2*Math.PI / this.slices;
       /*alfa*/ var betaAng = Math.PI / (2*this.stacks);

       //declaring vertices
       for(var i=0; i<=this.stacks; i++) {
           for(var j=0; j<=this.slices; j++) {
               this.vertices.push(Math.cos(alphaAng*j)*Math.cos(betaAng*i),
                                  Math.sin(alphaAng*j)*Math.cos(betaAng*i),
                                  Math.sin(betaAng*i));
               this.normals.push(-Math.cos(alphaAng*j)*Math.cos(betaAng*i),
                                 -Math.sin(alphaAng*j)*Math.cos(betaAng*i),
                                 -Math.sin(betaAng*i));
               this.texCoords.push(j/this.slices, i/this.stacks);
           }
       }
       //declaring indices
       for(var i=0; i<this.stacks; i++) {
           for(var j=0; j<this.slices; j++) {
               this.indices.push((this.slices+1)*i + j,
                                 (this.slices+1)*i + j + 1,
                                 (this.slices+1)*(i+1) + j);

               this.indices.push((this.slices+1)*i + j + 1,
                                 (this.slices+1)*(i+1) + j + 1,
                                 (this.slices+1)*(i+1) + j);
           }
       }

       this.primitiveType = this.scene.gl.TRIANGLES;
       this.initGLBuffers();
   }
}