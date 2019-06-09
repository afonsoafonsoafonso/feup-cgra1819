class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        this.depth = 0;
        this.startTime = 0;

        this.doGenerate = function () {
            this.generate(
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
        this.doGenerate();
    }
    initGrammar() {
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    };

    startAnimation(t){
        console.log(t);
        console.log(t-this.startTime);
        if((t-this.startTime) > 1000){
            
            this.startTime=t;
            
            this.depth=0;
            this.axiom='X';
            super.iterate();
        }
    }

    update(t){
        if((t-this.startTime) <= 1000){
            this.depth = ((t-this.startTime)/1000) * this.axiom.length;
        }else
        this.depth = 0;
    }

    display(){
        if (this.depth== 0)
        return;
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "\\":
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
                
                case "/":
                    // roda a direita
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;
                
                case "^":
                    // roda a direita
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}