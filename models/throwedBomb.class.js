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
    bomb_floor;
    explode = 0;
    i = 0;

    IMAGES_THROW = [
        'img/distance combat/bomb/bomb_00.png',
        'img/distance combat/bomb/bomb_01.png',
        'img/distance combat/bomb/bomb_02.png',
        'img/distance combat/bomb/bomb_03.png',
    ];
    IMAGES_EXPLOSION = [
        'img/distance combat/bomb/explosion/png/7/7_1.png',
        'img/distance combat/bomb/explosion/png/7/7_2.png',
        'img/distance combat/bomb/explosion/png/7/7_3.png',
        'img/distance combat/bomb/explosion/png/7/7_4.png',
        'img/distance combat/bomb/explosion/png/7/7_5.png',
        'img/distance combat/bomb/explosion/png/7/7_6.png',
        'img/distance combat/bomb/explosion/png/7/7_7.png',
        'img/distance combat/bomb/explosion/png/7/7_8.png',
        'img/distance combat/bomb/explosion/png/7/7_9.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage('img/distance combat/bomb/bomb_00.png');
        this.x = x;
        this.y = y;
        this.throw()
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_EXPLOSION);
        this.speed = this.setSpeed();
        this.bomb_floor = world.character.y + world.character.height - world.character.offset.bottom - this.height;
    }

    throw() {
        this.applyGravity();
        setStoppableInterval(() => {
            if (this.isAboveGround()) {
                this.x += this.speed;
                this.playAnimation(this.IMAGES_THROW);
            } else {
                if (this.i == 0) {
                    this.currentImage = 0;
                }
                if (this.i < 9) {
                    this.height = 100;
                    this.width = 100;
                    this.loadImage(this.IMAGES_EXPLOSION[this.i]);
                    this.i += 1;
                } else {
                    world.throwable.splice(0,1);
                    this.i = 0;
                }
            }
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