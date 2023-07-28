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
    explode = false;
    hit = 0;
    bomb_floor;
    alreadySpliced = false;

    IMAGES_THROW = [
        'img/distance combat/bomb/bomb_00.png',
        'img/distance combat/bomb/bomb_01.png',
        'img/distance combat/bomb/bomb_02.png',
        'img/distance combat/bomb/bomb_03.png',
    ];
    IMAGES_EXPLOSION = [
        'img/distance combat/bomb/explosion/7/7_1.png',
        'img/distance combat/bomb/explosion/7/7_2.png',
        'img/distance combat/bomb/explosion/7/7_3.png',
        'img/distance combat/bomb/explosion/7/7_4.png',
        'img/distance combat/bomb/explosion/7/7_5.png',
        'img/distance combat/bomb/explosion/7/7_6.png',
        'img/distance combat/bomb/explosion/7/7_7.png',
        'img/distance combat/bomb/explosion/7/7_8.png',
        'img/distance combat/bomb/explosion/7/7_9.png',
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
        this.bomb_floor = world.character.y + world.character.height - world.character.offset.bottom - 100;
        this.applyGravity();
    }
    EXPLOSION_SOUND = new Audio('audio/explosion.mp3');

    /**
     * animates the bomb flying and then exploding and deletes it afterwards
     */
    throw() {
        let i = 0;
        let interval = setInterval(() => {
            if (!pause) {
                if (this.isAboveGround()) {
                    this.x += this.speed;
                    this.playAnimation(this.IMAGES_THROW);
                } else if (i < 9) {
                    this.exploding();
                    i++;
                } else if (i == 9) {
                    world.throwable.shift();
                    clearInterval(interval);
                }
            }
        }, 50);
    }

    /**
     * let the bomb explode
     */
    exploding() {
        this.playSound(this.EXPLOSION_SOUND);
        this.explode = true;
        this.height = 100;
        this.width = 100;
        this.playAnimation(this.IMAGES_EXPLOSION);
    }

    /**
     * set direction of bomb depending on direction of character
     */
    setSpeed() {
        if (world.character.otherDirection == 1) {
            return -15;
        } else {
            return 15;
        }
    }
}