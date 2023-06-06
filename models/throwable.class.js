class Throwable extends MovingObjects {
    salsaCount = 1;
    height = 100;
    width = 100;
    speedY = 20;
    offset = {
        top: 20,
        right: 20,
        left: 20,
        bottom: 20,
    };
    hit = 0;

    IMAGES_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
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

    setSpeed(){
        if(world.character.otherDirection == 1){
            return -30;
        } else {
            return 30;
        }
    }
}