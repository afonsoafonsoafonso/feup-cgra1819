class MyTree extends CGFobject {
    constructor(scene) {
        super(scene);
        this.lSystem = new MyLSPlant(this.scene);


        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 30.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lSystem = new MyLSPlant(this.scene);

        this.doGenerate = function () {
            this.lSystem.generate(
                this.axiom, {
                    'F': ['FF'],
                    'X': [
                        'F[-X][X]F[-X]+X', 'F[-X][X]+X', 'F[+X]-X',
                        'F[/X][X]F[\\X]+X', 'F[\X][X]/X', 'F[/X]\X',
                        'F[^X][X]F[&X]^X', 'F[^X]&X', 'F[&X]^X'
                    ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();

    }
    display(){
        this.lSystem.display();
    }
}