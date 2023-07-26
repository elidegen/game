class MovingObjects extends DrawableObject {
    currentImage = 0;
    jumpCount = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0;
    MAX_HEALTH;
    health;
    offset;
    range;
    lastAttack = 0;
    startRun = 0;
    alreadyDead = 0;
    animationSpeed = 35;
    feetY;

    /**
     * makes objects fall to ground
     */
    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 25);
    }

    /**
     * checks if object is above ground
     */
    isAboveGround() {
        if (this instanceof ThrowedBomb) {
            return this.y < this.bomb_floor; //throwable object will fall to height where character throwed
        } else {
            return this.y < 90;
        }
    }

    /**
     * make sprite turn around
     */
    mirrorSprite(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    /**
     * reverse turned sprite
     */
    mirrorSpriteBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }

    /**
     * moves sprite in direction and make it face correct direction
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * moves sprite in direction and make it face correct direction
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * make sprite move up
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * make sprite move down
     */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * if sprite is vulnerable to damage this function will execute damage
     * @param {number} damage amount of taken damage
     * @param {boolean} direction sprite mirrored or not
     */
    takeDamage(damage, direction) {
        if (this.isVulnerable() && !world.gameOver) {
            // console.log(this);
            this.lastHit = new Date().getTime();
            this.currentImage = 0;
            this.getHurt(damage, direction);
        }
        world.setHealthBar();
    }

    /**
     * will reduce/set health/shield and create blood splat
     */
    getHurt(damage, direction) {
        if (this.shield > 0) {
            world.setCounts(0, -1);
        } else {
            this.createBlood(direction);
            console.log('blood');
            this.health -= damage;
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }

    /**
     * creates blood splatter depending on sprite and direction of hit
     */
    createBlood(direction) {
        if (this instanceof Endboss && enableBlood) {
            this.endbossBlood();
        } else if ((this instanceof Enemy1 || this instanceof Enemy2 || this instanceof Enemy3 || this instanceof Enemy4) && enableBlood) {
            this.enemyBlood();
        } else if (this instanceof Character && enableBlood) {
            this.characterBlood(direction);
        }
    }

    /**
     * blood splat for endboss
     */
    endbossBlood() {
        if (this.otherDirection) {
            world.blood.push(new Blood(this.x + this.width / 2, this.y + this.height / 2, 250, 250));
        } else {
            world.blood.push(new Blood(this.x, this.y + this.height / 2, 250, 250));
        }
    }

    /**
     * blood splat for enemy
     */
    enemyBlood() {
        if (this.otherDirection) {
            world.blood.push(new Blood(this.x + this.width / 3, this.y + this.height / 3, 250, 250));
        } else {
            world.blood.push(new Blood(this.x - this.width / 2, this.y + this.height / 3, 250, 250));
        }
    }

    /**
     * blood splat for character
     */
    characterBlood(direction) {
        if (!direction) {
            world.blood.push(new Blood(this.x + this.width / 3, this.y + this.height / 3, 250, 250));
        } else {
            world.blood.push(new Blood(this.x - this.width / 2, this.y + this.height / 3, 250, 250));
        }
    }

    /**
     * @returns true if sprite is dead
     */
    isDead() {
        return this.health < 1;
    }

    /**
     * @returns true if sprite is hurt in last 500 ms
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //difference in ms
        return timepassed < 500;
    }

    /**
     * @returns true if sprite is vulnerable
     */
    isVulnerable() {
        return !this.isDead() && !this.isHurt();
    }

    /**
     * will play the next image from certain given array "images"
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * checks if certain sprites (this & mo) are colliding
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    /**
     * checks if certain sprites (this & mo) are colliding within attack range
     */
    isCollidingWithAttack(mo) {
        if (this.otherDirection == 0) {
            return this.x + this.width - this.offset.right + this.range > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left + this.range < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        } else {
            return this.x + this.width - this.offset.right - this.range > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left - this.range < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        }
    }

    /**
     * moves enemy
     */
    moveEnemy() {
        setStoppableInterval(() => {
            if (!this.isDead() && !world.recentAction(this.lastAttack, 500) && !this.isCollidingWithAttack(world.character)) {
                this.followCharacter()
            }
        }, 50);

    }

    /**
     * makes sprite follow character
     */
    followCharacter() {
        if (this.x + this.width / 2 <= world.character.x + world.character.width / 2) {
            this.moveRight();
        }
        if (this.x + this.width / 2 > world.character.x + world.character.width / 2) {
            this.moveLeft();
        }
        if (this.playerNearby()) {
            if (this.isAbove(world.character)) {
                this.moveDown();
            }
            if (!this.isAbove(world.character)) {
                this.moveUp();
            }
        }
    }

    /**
     * @returns true if player within 500 distance
     */
    playerNearby() {
        return (this.x - world.character.x) < 500;
    }

    /**
     * @returns true if this is above mo
     */
    isAbove(mo) {
        return this.y + this.height - this.offset.bottom < mo.y + mo.height - mo.offset.bottom;
    }
}