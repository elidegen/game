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
    collectedCoins = 0;
    collectedSalsa = 0;
    bossDamage = 100;
    enemyDamage = 20;
    characterDamage = 40;
    maxCoins;
    maxSalsa;
    volume = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.maxCoins = this.level.coins.length;
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
        if (this.keyboard.SPACE && this.recentThrow() && this.collectedSalsa > 0) {
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

    recentThrow() {
        let timepassed = new Date().getTime() - this.lastThrow;
        return timepassed > 500;
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && (enemy.health > 0)) {
                this.collideEnemy(enemy);
            }
        });
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectCoin(coin);
            }
        });
        this.level.salsa.forEach((salsa) => {
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

    hurtEndboss() {
        this.level.enemies[0].health -= this.characterDamage;
        this.lastBossHit = new Date().getTime();
        this.endbosshealthbar.setPercentage(this.calcBossLife());
    }

    calcBossLife() {
        return (this.level.enemies[0].health / this.level.enemies[0].MAX_HEALTH * 100);
    }

    collideEnemy(enemy) {
        if (enemy == this.level.enemies[0]) {
            this.character.takeDamage(this.bossDamage);
        } else {
            if(world.character.recentAttack()){
                enemy.takeDamage(this.character.damage);
            }
            enemy.lastAttack = new Date().getTime();
            world.character.takeDamage(this.enemyDamage);
        }
    }

    killChicken(enemy) {
        enemy.health -= this.characterDamage;
        setTimeout(() => {
            enemy.speed = 0;
            enemy.y += 20;
        }, 50);
        setTimeout(() => {
            this.character.jump();
        }, 100);
    }

    collectSalsa(salsa) {
        this.level.salsa.splice(this.level.salsa.indexOf(salsa), 1);
        this.collectedSalsa += 1;
        this.salsabar.setPercentage(this.calcSalsa());
    }

    calcSalsa() {
        return (this.collectedSalsa / this.maxSalsa * 100);
    }

    collectCoin(coin) {
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);
        this.collectedCoins += 1;
        this.coinbar.setPercentage(this.calcCoins());
    }

    calcCoins() {
        return (this.collectedCoins / this.maxCoins * 100);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.throwable);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
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