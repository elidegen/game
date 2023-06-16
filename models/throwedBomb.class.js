class ThrowedBomb extends MovingObjects {
    height = 50;
    width = 45;
    speedY = 20;
    offset = {
        top: 8,
        right: 0,
        left: 4,
        bottom: 0,
    };
    hit = 0;

    IMAGES_THROW = [
        'img/distance combat/bomb/bomb_00.png',
        'img/distance combat/bomb/bomb_01.png',
        'img/distance combat/bomb/bomb_02.png',
        'img/distance combat/bomb/bomb_03.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage('img/distance combat/bomb/bomb_00.png');
        this.x = x;
        this.y = y;
        this.throw()
        this.loadImages(this.IMAGES_THROW);
        this.speed = this.setSpeed();
    }

    throw() {
        this.applyGravity();
        setStoppableInterval(() => {
            this.x += this.speed;
            this.playAnimation(this.IMAGES_THROW);
        }, 50);
    }

    setSpeed() {
        if (world.character.otherDirection == 1) {
            return -30;
        } else {
            return 30;
        }
    }
}