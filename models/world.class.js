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
    bombDamage = 100;
    LOSE_SOUND = new Audio('audio/lose.mp3');
    WIN_SOUND = new Audio('audio/win.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.checkCharacterPosition();
        this.setHealthBar();
        this.setBombShield();
        this.setCounts(0, 0);
    }

    /**
     * sets starting bomb and shield depending on chosen hero
     */
    setBombShield() {
        if (hero == 0) {
            this.setCounts(1, 1);
        } else if (hero == 1) {
            this.setCounts(1, 0);
        } else if (hero == 2) {
            this.setCounts(0, 0);
        } else if (hero == 3) {
            this.setCounts(0, 1);
        }
    }

    /**
     * lets endboss and character access world
     */
    setWorld() {
        this.level.enemies[0].world = this;
        this.character.world = this;
    }

    /**
     * checks for collisions, bomb throws and death
     */
    run() {
        setStoppableInterval(() => {
            if (this.gameOver != 1) {
                this.checkCollisions();
                this.checkThrowPress();
                this.checkEndGame();
            }
        }, 50);
    }

    /**
     * set how many bombs and shields are added/removed
     */
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

    /**
     * makes the bombcount fade red upon change
     */
    bombCountFadeRed(bomb) {
        if (bomb != 0) {
            document.getElementById('bombCount').classList.add('fade-red');
            setTimeout(() => {
                document.getElementById('bombCount').classList.remove('fade-red');
            }, 1000);
        }
    }

    /**
     * makes the shieldcount fade red upon change
     */
    shieldCountFadeRed(shield) {
        if (shield != 0) {
            document.getElementById('shieldCount').classList.add('fade-red');
            setTimeout(() => {
                document.getElementById('shieldCount').classList.remove('fade-red');
            }, 1000);
        }
    }

    /**
     * checks if game is over
     */
    checkEndGame() {
        if (this.character.isDead()) {
            this.character.playSound(this.LOSE_SOUND);
            this.setGameOver();
            BACKGROUND_MUSIC.pause();
        }
        if (this.level.enemies[0].isDead()) {
            this.character.playSound(this.WIN_SOUND);
            this.setNewLevel();
            BACKGROUND_MUSIC.pause();
        }
    }

    /**
     * sets the game over overlay
     */
    setGameOver() {
        this.setHealthBar();
        this.gameOver = 1;
        setTimeout(() => {
            stopGame();
            document.getElementById('overlayLose').classList.remove('d-none');
        }, 2500);
    }

    /**
     * sets new level overlay
     */
    setNewLevel() {
        this.gameOver = 1;
        setTimeout(() => {
            pause = true;
            document.getElementById('overlayWin').classList.remove('d-none');
        }, 2500);
    }

    /**
     * @returns true if certain action is executed less than time ms ago
     */
    recentAction(action, time) { // = maximal time milisekunden sind seit action vergangen. durch ! wird maximal zu mindestens
        let timepassed = new Date().getTime() - action;
        return timepassed < time;
    }

    /**
     * checks if certain criteria met and initiates bomb throw
     */
    checkThrowPress() {
        if (this.keyboard.THROW && !this.recentAction(this.lastThrow, 500) && this.collectedBombs > 0) {
            this.throwBomb();
        }
    }

    /**
     * create new throwed bomb
     */
    throwBomb() {
        this.setCounts(-1, 0);
        this.lastThrow = new Date().getTime();
        setTimeout(() => {
            let bomb = new ThrowedBomb(this.character.x + this.setBombPos(), this.character.y);
            this.throwable.push(bomb);
        }, 400);
    }

    /**
     * returns position where throwed bomb should spawn
     */
    setBombPos() {
        if (world.character.otherDirection == 1) {
            return 20;
        } else {
            return 120;
        }
    }

    /**
     * checks if sprites collide with each other
     */
    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            this.enemyCharacterCollision(enemy);
        });
        this.level.blessings.forEach(blessing => {
            this.characterBlessingCollision(blessing);
        });
        this.level.bombs.forEach(bomb => {
            if (this.character.isColliding(bomb)) {
                this.characterBombCollision(bomb);
            }
        });
        this.throwable.forEach(bomb => {
            this.bombSpriteColliding(bomb);
        });
    }

    /**
     * checks for enemy and character colliding
     */
    enemyCharacterCollision(enemy) {
        if (this.hittingCharacter(enemy)) {
            this.collideEnemy(enemy);
        }
        if (this.hittingEnemy(enemy)) {
            enemy.takeDamage(this.character.damage, this.otherDirection);
        }
    }

    /**
     * checks for character and blessing colliding
     */
    characterBlessingCollision(blessing) {
        if (this.character.isColliding(blessing)) {
            this.collectItem(this.level.blessings, blessing);
            this.setCounts(0, 1);
        }
    }

    /**
     * checks for character and bomb colliding
     */
    characterBombCollision(bomb) {
        this.collectItem(this.level.bombs, bomb);
        this.setCounts(1, 0);
    }

    /**
     * checks for sprites and throwed bomb colliding
     */
    bombSpriteColliding(bomb) {
        this.level.enemies.forEach(enemy => {
            if (enemy.isColliding(bomb) && enemy.isVulnerable() && !enemy.bombHit) {
                enemy.bombHit = true;
                enemy.takeDamage(this.bombDamage, enemy.otherDirection);
                setTimeout(() => {
                    enemy.bombHit = false;
                }, 700);
            }
        });
        if (this.character.isColliding(bomb) && this.character.isVulnerable() && bomb.explode) {
            this.character.takeDamage(this.bombDamage, this.otherDirection);
            this.setHealthBar();
        }
    }

    /**
     * @returns true if character is vulnerable and within attack range of enemy
     */
    hittingCharacter(enemy) {
        return enemy.isCollidingWithAttack(this.character) && enemy.health > 0 && !this.recentAction(enemy.lastAttack, enemy.animationSpeed * enemy.IMAGES_ATTACK.length + 500);
    }

    /**
     * @returns true if enemy is vulnerable and within attack range of character
     */
    hittingEnemy(enemy) {
        return this.character.isCollidingWithAttack(enemy) && enemy.health > 0 && this.recentAction(this.character.lastAttack, 500);
    }

    /**
     * character gets hit by enemy
     */
    collideEnemy(enemy) {
        enemy.currentImage = 0;
        enemy.lastAttack = new Date().getTime();
        if (enemy != this.level.enemies[0]) {
            this.character.takeDamage(this.enemyDamage, enemy.otherDirection);
        }
    }

    /**
     * updates health bar
     */
    setHealthBar() {
        healthBar.style = `width: ${this.character.health / this.character.MAX_HEALTH * 100}%;`;
        if (this.character.isDead()) {
            healthBar.classList.add('d-none');
        }
    }

    /**
     * removes certain collected item from canvas
     */
    collectItem(itemPath, item) {
        itemPath.splice(itemPath.indexOf(item), 1);
    }

    /**
     * draws all elements on canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.blood);
        this.addObjectsToMap(this.sortObjects());

        this.ctx.translate(-this.camera_x, 0); //fixed objects after this line 

        //draw wird immer wieder aufgerufen. innerhalb der funktion funktioniert 'this' nicht.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * @returns sorted array of sprites so they will be drawn in correct order to create a 3D depth illusion
     */
    sortObjects() {
        let sprites = [];
        for (let i = 0; i < this.level.enemies.length; i++) {
            sprites.push(this.level.enemies[i]);
        }
        for (let i = 0; i < this.throwable.length; i++) {
            sprites.push(this.throwable[i]);
        }
        for (let i = 0; i < this.level.blessings.length; i++) {
            sprites.push(this.level.blessings[i]);
        }
        for (let i = 0; i < this.level.bombs.length; i++) {
            sprites.push(this.level.bombs[i]);
        }
        sprites.push(this.character);
        sprites.sort((a, b) => (a.y + a.feetY) - (b.y + b.feetY));
        return sprites;
    }

    /**
     * adds objects of a certain array to canvas
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * adds certain object to canvas
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            mo.mirrorSprite(this.ctx);
        }

        mo.draw(this.ctx);

        // mo.drawFrame(this.ctx);

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.mirrorSpriteBack(this.ctx);
        }
    }

    /**
     * activates endboss if character reaches certain position
     */
    checkCharacterPosition() {
        let interval = setInterval(() => {
            if (this.character.x > 1500) {
                this.level.enemies[0].moveEnemy();
                clearInterval(interval);
            }
        }, 200);
    }
}