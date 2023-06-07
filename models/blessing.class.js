class Blessing extends MovingObjects {
    height = 50;
    width = 50;
    offset = {
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
    };
    IMAGE_COIN = 'img/characters/Paladin_1/Blessed/PNG/Blessed.png';
    constructor() {
        super().loadImage(this.IMAGE_COIN);
        this.x = 300 + Math.random() * 2000;
        this.y = 120 + Math.random() * 340;
    }
}