class Bomb extends MovingObjects {
    height = 50;
    width = 45;
    feetY = 50;
    offset = {
        top: 8,
        right: 0,
        left: 4,
        bottom: 0,
    };
    constructor() {
        super().loadImage('img/distance combat/bomb/bomb_00.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 230 + Math.random() * 350;
    }
}