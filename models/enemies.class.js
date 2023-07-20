class Enemies extends MovingObjects {
    height = 200;
    width = 200;
    i = 1;
    MAX_HEALTH = 95;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    alreadyCollided = 0;
    range = 40;
    bombHit = false;
    offset = {
        top: 100,
        right: 70,
        left: 65,
        bottom: 35,
    };
    IMAGES_ATTACK;
    IMAGES_WALKING;
    IMAGES_HURT;
    IMAGES_DYING;
    IMAGE_DEAD;
    IMAGES_RUNNING;

    constructor() {
        super();
        this.x = 1000 + Math.random() * 500 //700 + Math.random() * 2000;    
        this.y = 120 + Math.random() * 340; //math.random = zahl zwischen 0 und 1 
        this.animate();
        this.moveEnemy();
    }

    animate() {
        setStoppableInterval(() => {
            this.speed = 3;
            if (this.isDead() && world.recentAction(this.lastHit, 250)) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isDead()) {
                this.loadImage(this.IMAGE_DEAD);
            } else if (world.recentAction(this.lastHit, 250)) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (world.recentAction(this.lastAttack, 250)) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.playerNearby()) {
                this.speed = 6;
                this.playAnimation(this.IMAGES_RUNNING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }
}