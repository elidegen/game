class Enemies extends MovingObjects {
    height = 200;
    width = 200;
    i = 1;
    MAX_HEALTH = 100;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    alreadyCollided = 0;
    range = 40;
    offset = {
        top: 100,
        right: 70,
        left: 65,
        bottom: 35,
    };
    IMAGES_ATTACK;
    IMAGES_WALKING;
    IMAGES_HURT;
    IMAGE_DEAD;

    constructor(){
        super();
        this.x = 500 + Math.random() * 2000; //math.random = zahl zwischen 0 und 1    
        this.y = 120 + Math.random() * 340;
        this.speed = 1 + Math.random() * 4;
        this.moveEnemy();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.recentAttack()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.loadImage(this.IMAGE_DEAD);
            }
        }, 130);
    }
}