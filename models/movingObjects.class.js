class MovingObjects extends DrawableObject {
    currentImage = 0;
    jumpCount = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = new Date().getTime();
    MAX_HEALTH;
    health;
    offset;
    range;
    lastAttack = 0;

    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 25);
    }

    jump() {
        this.speedY = 25;
        world.playSound(this.JUMP_SOUND);
    }

    isAboveGround() {
        if (this instanceof Throwable) {
            return true; //throwable object will fall through ground
        } else {
            return this.y < 90;
        }
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    mirrorSprite(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    mirrorSpriteBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    takeDamage(damage) {
        if (!this.isHurt()) {
            this.health -= damage;
            if (this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
            console.log(this.health);
            world.healthbar.setPercentage(world.character.health / world.character.MAX_HEALTH * 100);
        }
    }

    isDead() {
        return this.health < 1;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //difference in ms
        return timepassed < 700;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    isCollidingWithAttack(mo) {
        return this.x + this.width - this.offset.right + this.range > mo.x + mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    shortIdle() {
        return this.idle < 50;
    }

    recentAttack() {
        let timepassed = new Date().getTime() - this.lastAttack;
        return timepassed < 1000;
    }

    moveEnemy() {
        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.followCharacter()
            }
        }, 100);

    }

    followCharacter() {
        if (this.x < world.character.x) {
            this.moveRight();
        }
        if (this.x > world.character.x) {
            this.moveLeft();
        }
        if ((this.x - world.character.x) < 300) {
            if (this.y < world.character.y) {
                this.moveDown();
            }
            if (this.y > world.character.y) {
                this.moveUp();
            }
        }
    }
}