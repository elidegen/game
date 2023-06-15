class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwable = [];
    lastThrow = 0;
    lastBossHit = 0;
    lastBlessing = 0;
    collectedBlessings = 0;
    collectedBombs = 0;
    bossDamage = 100;
    enemyDamage = 20;
    characterDamage = 40;
    MAX_BLESSINGS;
    MAX_BOMB;
    volume = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.MAX_BLESSINGS = this.level.blessings.length;
        this.MAX_BOMB = this.level.bombs.length;
        this.setWorld();
        this.draw();
        this.run();
        this.checkCharacterPosition();
    }

    setWorld() {
        this.level.enemies[0].world = this;
        this.character.world = this;
    }

    run() {
        setStoppableInterval(() => {
            this.checkCollisions();
            this.checkThrowPress();
        }, 50);
    }

    checkThrowPress() {
        if (this.keyboard.SPACE && this.recentAction(this.lastThrow) && this.collectedBombs > 0) {
            let bottle = new Throwable(this.character.x + 40, this.character.y + 130);
            this.throwable.push(bottle);
            this.lastThrow = new Date().getTime();
            this.collectedBombs -= 1;
        }
    }

    playSound(sound) {
        sound.volume = this.volume;
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
                this.collectItem(this.level.blessings, blessing, blessingBar);
                this.collectedBlessings += 1;
            }
        });
        this.level.bombs.forEach(bomb => {
            if (this.character.isColliding(bomb)) {
                this.collectItem(this.level.bombs, bomb, bombBar);
                this.collectedBombs += 1;
            }
        });
        this.throwable.forEach(bottle => {
            if (this.level.enemies[0].isColliding(bottle) && bottle.hit == 0) {
                bottle.hit = 1;
                this.hurtEndboss();
            }
        });
    }

    hittingEnemy(enemy) {
        return this.character.isCollidingWithAttack(enemy) && enemy.health > 0 && this.character.recentAction(this.character.lastAttack);
    }

    hurtEndboss() {
        this.level.enemies[0].health -= this.characterDamage;
        this.lastBossHit = new Date().getTime();
    }

    collideEnemy(enemy) {
        if (enemy == this.level.enemies[0]) {
            this.character.takeDamage(this.bossDamage);
        } else {
            enemy.lastAttack = new Date().getTime();
            this.character.takeDamage(this.enemyDamage);
        }
    }

    killChicken(enemy) {
        enemy.health -= this.characterDamage;
        setTimeout(() => {
            enemy.speed = 0;
            enemy.y += 20;
        }, 50);
    }

    collectItem(itemPath, item, barID) {
        itemPath.splice(itemPath.indexOf(item), 1);
        // this.salsabar.setPercentage(this.calcPercentage(this.collectedBombs, this.MAX_BOMB));
        barID.style = `width: 100%;`
    }

    collectBomb(bomb) {
        this.level.bomb.splice(this.level.bomb.indexOf(bomb), 1);
        this.collectedBombs += 1;
        // this.salsabar.setPercentage(this.calcPercentage(this.collectedBombs, this.MAX_BOMB));
        bombBar.style = "width: 100%;"
    }

    calcPercentage(current, max) {
        return (current / max * 100);
    }

    collectBlessing(blessing) {
        this.level.blessings.splice(this.level.blessings.indexOf(blessing), 1);
        this.collectedBlessings += 1;
        this.lastBlessing = new Date().getTime();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.throwable);
        // this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.blessings);
        this.addObjectsToMap(this.level.bombs);

        this.ctx.translate(-this.camera_x, 0); //fixed objects after this line

        //draw wird immer wieder aufgerufen. innerhalb der funktion funktioniert 'this' nicht.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        })
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
        setStoppableInterval(() => {
            if (this.character.x > 2200) {
                this.level.enemies[0].startEndboss();
            }
        }, 200);
    }
}