class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwable = [];
    blood = [];
    gameOver = 0;

    lastThrow = new Date().getTime();
    lastBossHit = 0;
    lastBlessing = 0;

    collectedBombs = 0;

    bossDamage = 100;
    enemyDamage = 20;
    characterDamage = 40;
    bombDamage = 100;
    blessingHealing = 50;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.checkCharacterPosition();
        this.setHealthBar();
        this.setBombCount(10);
    }

    setWorld() {
        this.level.enemies[0].world = this;
        this.character.world = this;
    }

    run() {
        setStoppableInterval(() => {
            if (this.gameOver != 1) {
                this.checkCollisions();
                this.checkThrowPress();
                this.checkEndGame();
            }
        }, 50);
    }

    setBombCount(value) {
        this.collectedBombs += value;
        document.getElementById('bombCount').innerHTML = this.collectedBombs;
    }

    checkEndGame() {
        if (this.character.isDead()) {
            this.gameOver = 1;
            setTimeout(() => {
                stopGame();
                document.getElementById('overlayLose').classList.remove('d-none');
            }, 2500);
        }
        if (this.level.enemies[0].isDead()) {
            this.gameOver = 1;
            setTimeout(() => {
                pause = true;
                document.getElementById('overlayWin').classList.remove('d-none');
            }, 2500);
        }
    }

    recentAction(action, time) {
        let timepassed = new Date().getTime() - action;
        return timepassed < time;
    }

    checkThrowPress() {
        if (this.keyboard.THROW && !this.recentAction(this.lastThrow, 500) && this.collectedBombs > 0) {
            this.throwBomb();
        }
    }

    throwBomb() {
        this.setBombCount(-1);
        this.lastThrow = new Date().getTime();
        setTimeout(() => {
            let bomb = new ThrowedBomb(this.character.x + this.setBombPos(), this.character.y);
            this.throwable.push(bomb);
        }, 400);
    }

    setBombPos() {
        if (world.character.otherDirection == 1) {
            return 20;
        } else {
            return 120;
        }
    }

    playSound(sound) {
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play();
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (enemy.isCollidingWithAttack(this.character) && enemy.health > 0) {
                this.collideEnemy(enemy);
            }
            if (this.hittingEnemy(enemy)) {
                enemy.takeDamage(this.characterDamage);
                enemy.lastHit = new Date().getTime();
            }
        });
        this.level.blessings.forEach(blessing => {
            if (this.character.isColliding(blessing)) {
                this.collectBlessing(blessing);
                this.character.addHealth(this.blessingHealing);
                this.setHealthBar();
            }
        });
        this.level.bombs.forEach(bomb => {
            if (this.character.isColliding(bomb)) {
                this.collectItem(this.level.bombs, bomb);
                this.setBombCount(1);
            }
        });
        this.throwable.forEach(bomb => {
            this.level.enemies.forEach(enemy => {
                if (enemy.isColliding(bomb) && enemy.isVulnerable() && bomb.explode) {
                    enemy.bombHit = true;
                    enemy.takeDamage(this.bombDamage);
                    enemy.bombHit = false;
                }
            });
            if (this.character.isColliding(bomb) && this.character.isVulnerable() && bomb.explode) {
                this.character.takeDamage(this.bombDamage);
                this.setHealthBar();
            }
        });
    }

    hittingEnemy(enemy) {
        return this.character.isCollidingWithAttack(enemy) && enemy.health > 0 && world.recentAction(this.character.lastAttack, 500);
    }

    hurtEndboss() {
        this.level.enemies[0].health -= this.characterDamage;
        this.lastBossHit = new Date().getTime();
    }

    collideEnemy(enemy) {
        if (enemy == this.level.enemies[0]) {
            this.character.takeDamage(this.bossDamage);
            this.setHealthBar();
        } else {
            enemy.lastAttack = new Date().getTime();
            this.character.takeDamage(this.enemyDamage);
            this.setHealthBar();
        }
    }

    setHealthBar() {
        healthBar.style = `width: ${this.character.health / this.character.MAX_HEALTH * 100}%;`;
    }

    killChicken(enemy) {
        enemy.health -= this.characterDamage;
        setTimeout(() => {
            enemy.speed = 0;
            enemy.y += 20;
        }, 50);
    }

    collectItem(itemPath, item) {
        itemPath.splice(itemPath.indexOf(item), 1);
    }

    calcPercentage(current, max) {
        return (current / max * 100);
    }

    collectBlessing(blessing) {
        this.level.blessings.splice(this.level.blessings.indexOf(blessing), 1);
        this.lastBlessing = new Date().getTime();
        this.character.currentImage = 0;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.blood);
        this.addObjectsToMap(this.throwable);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.blessings);
        this.addObjectsToMap(this.level.bombs);

        this.ctx.translate(-this.camera_x, 0); //fixed objects after this line

        //draw wird immer wieder aufgerufen. innerhalb der funktion funktioniert 'this' nicht.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            mo.mirrorSprite(this.ctx);
        }

        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.mirrorSpriteBack(this.ctx);
        }
    }

    checkCharacterPosition() {
        let interval = setInterval(() => {
            if (this.character.x > 1500) {
                //this.level.enemies[0].moveEnemy();
                clearInterval(interval);
            }
        }, 200);
    }
}