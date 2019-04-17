/**
 * MyVoxelHill
 * @constructor
 * @param Scene - reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene, height) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.height = height;

        this.materialHill = new CGFappearance(scene);
        this.materialHill.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHill.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHill.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHill.setShininess(10.0);
        this.materialHill.loadTexture('tex/420.jpeg');
        this.materialHill.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        
        //iX: posição inical em X do 1º cubo
        //iY: idem para Y
        //iZ: idem para Z
        //cX: current X position
        //cY: current Y position
        //cZ: current Z position
        //nSide: number of cubes per side
        var iX = 0, iZ = 0, cY = this.height, cX, cZ, dX, dZ, nSide=0;
        for(var i=0; i<this.height; i++, iX--, iZ--, cY--,nSide+=2) {
            if(i==0) {
                this.scene.pushMatrix();
                this.scene.translate(0,this.height-0.5,0);
                this.materialHill.apply();
                this.cube.display();
                this.scene.popMatrix();
            }
            else if(i==1) {
                for(var j=0, cZ=iZ, cX=iX, dX=1, dZ=0; j<8; j++, cX+=dX, cZ+=dZ) {
                    if(cX==1 && cZ==-1) {dX=0; dZ=1;}
                    else if(cX==1 && cZ==1) {dX=-1; dZ=0}
                    else if(cX==-1 && cZ==1) {dX=0; dZ=-1;}
                    this.scene.pushMatrix();
                    this.scene.translate(cX,cY-0.5,cZ);
                    this.cube.display();
                    this.scene.popMatrix();
                }               
            }
            else {
                for(var j=0, cZ=iZ, cX=iX, dX=1, dZ=0; j<(nSide*4); j++, cX+=dX, cZ+=dZ) {
                    if(cX==iX+nSide && cZ==iZ) {dX=0; dZ=1;}
                    if(cX==iX+nSide && cZ==iZ+nSide) {dX=-1; dZ=0}
                    if(cX==iX && cZ==iZ+nSide) {dX=0; dZ=-1;};
                    this.scene.pushMatrix();
                    this.scene.translate(cX,cY-0.5,cZ);
                    this.cube.display();
                    this.scene.popMatrix();
                }
            }
        }
    }
}