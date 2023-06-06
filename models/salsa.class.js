class Salsa extends MovingObjects {

    height = 100;
    width = 100;
    offset = {
        top: 20,
        right: 20,
        left: 20,
        bottom: 10,
    };
    constructor(){
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 350;
    }
}