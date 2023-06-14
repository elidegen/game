class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthbar = new Healthbar();
    coinbar = new Coinbar();
    salsabar = new Salsabar();
    endbosshealthbar = new EndbossHealthbar();
    endbosshealthbarIcon = new EndbossHealthbarIcon();
    throwable = [];
    lastThrow = 0;
    lastBossHit = 0;
    lastBlessing = 0;
    collectedBlessing = 0;
    collectedSalsa = 0;
    bossDamage = 100;
    enemyDamage = 20;
    characterDamage = 40;
    maxBlessings;
    maxSalsa;
    volume = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.maxBlessings = this.level.blessings.length;
        this.maxSalsa = this.level.salsa.length;
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
        if (this.keyboard.SPACE && this.recentAction(this.lastThrow) && this.collectedSalsa > 0) {
            let bottle = new Throwable(this.character.x + 40, this.character.y + 130);
            this.throwable.push(bottle);
            this.lastThrow = new Date().getTime();
            this.collectedSalsa -= 1;
            this.salsabar.setPercentage(this.calcSalsa());
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
                this.collectBlessing(blessing);
            }
        });
        this.level.salsa.forEach(salsa => {
            if (this.character.isColliding(salsa)) {
                this.collectSalsa(salsa);
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
        this.endbosshealthbar.setPercentage(this.calcHealth(world.level.enemies[0]));
    }

    calcHealth(object) {
        return (object.health / object.MAX_HEALTH * 100);
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

    collectSalsa(salsa) {
        this.level.salsa.splice(this.level.salsa.indexOf(salsa), 1);
        this.collectedSalsa += 1;
        this.salsabar.setPercentage(this.calcSalsa());
    }

    calcSalsa() {
        return (this.collectedSalsa / this.maxSalsa * 100);
    }

    collectBlessing(blessing) {
        this.level.blessings.splice(this.level.blessings.indexOf(blessing), 1);
        this.collectedBlessing += 1;
        this.lastBlessing = new Date().getTime();
    }

    calcBlessing() {
        return (this.collectedBlessing / this.maxBlessings * 100);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.throwable);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.blessings);
        this.addObjectsToMap(this.level.salsa);

        this.ctx.translate(-this.camera_x, 0); //fixed objects after this line

        this.addToMap(this.salsabar);
        this.addToMap(this.coinbar);
        this.addToMap(this.healthbar);
        this.addToMap(this.endbosshealthbar);
        this.addToMap(this.endbosshealthbarIcon);


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