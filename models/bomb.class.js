class Bomb extends MovingObjects {
    height = 50;
    width = 45;
    offset = {
        top: 8,
        right: 0,
        left: 4,
        bottom: 0,
    };
    IMAGES_ROTATE = [
        'img/distance combat/bomb/bomb_00.png',
        'img/distance combat/bomb/bomb_01.png',
        'img/distance combat/bomb/bomb_02.png',
        'img/distance combat/bomb/bomb_03.png',
    ];
    constructor() {
        super().loadImage('img/distance combat/bomb/bomb_00.png');
        this.loadImages(this.IMAGES_ROTATE);
        this.x = 300 + Math.random() * 2000;
        this.y = 230 + Math.random() * 350;
    }
}