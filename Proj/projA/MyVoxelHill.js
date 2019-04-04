/**
 * MyVoxelHill
 * @constructor
 * @param Scene - reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene, height) {
        super(scene);
        this.cubes = [];
        for(var i=1; i<=height; i++) {
            //cubo no topo da piramide
            if(i==1)
                this.cubes.push(new MyUnitCubeQuad(scene));
            //cubos imediatamente abaixo do topo
            else if(i==1) {
                for(var j=0; j<8; i++) {
                    this.cubes.push(new MyUnitCubeQuad(scene));
                }
            }
            //caso generalizado para tudo abaixo dos dois
            //patamares superiores
            else {
                for(var j=0; j<(i*4+4); j++) {
                    this.cubes.push(new MyUnitCubeQuad(scene));
                }
            }
        }
    }

    display() {
        this.scene.pushMatrix();

    }
}