class Bomb extends MovingObjects {

    height = 50;
    width = 50;
    offset = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    };
    constructor(){
        super().loadImage('img/distance combat/fire/Projectile/5.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 350;
    }
}