/*
*   MyTerrain
*/

class MyTerrain extends CGFobject {
    contructor(scene) {
        super(scene);
        this.terrain = new Plane(scene, 50);  
    }
}