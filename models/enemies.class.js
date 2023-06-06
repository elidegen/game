class Enemies extends MovingObjects {
    height = 200;
    width = 200;
    i = 1;
    MAX_HEALTH = 10;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    alreadyCollided = 0;
    offset = {
        top: 50,
        right: 0,
        left: 55,
        bottom: 35,
    };
    IMAGES_ATTACK;
    IMAGES_WALKING;
    IMAGE_DEAD;

    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setStoppableInterval(() => {
            if (this.recentAttack()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.loadImage(this.IMAGE_DEAD);
            }
        }, 130);
    }
}