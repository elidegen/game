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

    collectedBombs = 0;

    bossOriginalDamage = 100;
    enemyOriginalDamage = 20;
    bossDamage = this.bossOriginalDamage;
    enemyDamage = this.enemyOriginalDamage;
    characterDamage = 40;
    bombDamage = 100;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.checkCharacterPosition();
        this.setHealthBar();
        this.setCounts(10, 0);
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

    setCounts(bomb, shield) {
        this.collectedBombs += bomb;
        this.character.shield += shield;
        if (this.character.shield < 0) {
            this.character.shield = 0;
        }
        document.getElementById('bombCount').innerHTML = this.collectedBombs;
        document.getElementById('shieldCount').innerHTML = this.character.shield;
        this.bombCountFadeRed(bomb);
        this.shieldCountFadeRed(shield);
    }

    bombCountFadeRed(bomb) {
        if (bomb != 0) {
            document.getElementById('bombCount').classList.add('fade-red');
            setTimeout(() => {
                document.getElementById('bombCount').classList.remove('fade-red');
            }, 1000);
        }
    }

    shieldCountFadeRed(shield) {
        if (shield != 0) {
            document.getElementById('shieldCount').classList.add('fade-red');
            setTimeout(() => {
                document.getElementById('shieldCount').classList.remove('fade-red');
            }, 1000);
        }
    }

    checkEndGame() {
        if (this.character.isDead()) {
            this.setHealthBar();
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

    recentAction(action, time) { // = maximal time milisekunden sind seit action vergangen. durch ! wird maximal zu mindestens
        let timepassed = new Date().getTime() - action;
        return timepassed < time;
    }

    checkThrowPress() {
        if (this.keyboard.THROW && !this.recentAction(this.lastThrow, 500) && this.collectedBombs > 0) {
            this.throwBomb();
        }
    }

    throwBomb() {
        this.setCounts(-1, 0);
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
            if (enemy.isCollidingWithAttack(this.character) && enemy.health > 0 && !this.recentAction(enemy.lastAttack, enemy.animationSpeed * enemy.IMAGES_ATTACK.length)) {
                this.collideEnemy(enemy);
            }
            if (this.hittingEnemy(enemy)) {
                enemy.takeDamage(this.characterDamage);
            }
        });
        this.level.blessings.forEach(blessing => {
            if (this.character.isColliding(blessing)) {
                this.collectItem(this.level.blessings, blessing);
                this.setCounts(0, 1);
            }
        });
        this.level.bombs.forEach(bomb => {
            if (this.character.isColliding(bomb)) {
                this.collectItem(this.level.bombs, bomb);
                this.setCounts(1, 0);
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
        enemy.currentImage = 0;
        enemy.lastAttack = new Date().getTime();
        if (enemy == this.level.enemies[0]) {
            this.character.takeDamage(this.bossDamage);
        } else {
            this.character.takeDamage(this.enemyDamage);
        }
        this.setHealthBar();
    }

    setHealthBar() {
        healthBar.style = `width: ${this.character.health / this.character.MAX_HEALTH * 100}%;`;
        if (this.character.isDead()) {
            healthBar.classList.add('d-none');
        }
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

        //mo.drawFrame(this.ctx);

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.mirrorSpriteBack(this.ctx);
        }
    }

    checkCharacterPosition() {
        let interval = setInterval(() => {
            if (this.character.x > 1500) {
                this.level.enemies[0].moveEnemy();
                clearInterval(interval);
            }
        }, 200);
    }
}