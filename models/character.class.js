class Character extends MovingObjects {
    x = 100;
    height = 200;
    width = 200;
    y = this.y - this.height; //435 -350 = currentLevel
    world;
    MAX_HEALTH = 1000;
    health = this.MAX_HEALTH;
    shield = 0;
    heroSpeedBuff = 0;
    damage = 50;
    range = 70;
    offset = {
        top: 100,
        right: 70,
        left: 65,
        bottom: 35,
    };
    IMAGES_WALKING = [
        `img/characters/Knight_${hero}/Walking/Walking_000.png`,
        `img/characters/Knight_${hero}/Walking/Walking_001.png`,
        `img/characters/Knight_${hero}/Walking/Walking_002.png`,
        `img/characters/Knight_${hero}/Walking/Walking_003.png`,
        `img/characters/Knight_${hero}/Walking/Walking_004.png`,
        `img/characters/Knight_${hero}/Walking/Walking_005.png`,
        `img/characters/Knight_${hero}/Walking/Walking_006.png`,
        `img/characters/Knight_${hero}/Walking/Walking_007.png`,
        `img/characters/Knight_${hero}/Walking/Walking_008.png`,
        `img/characters/Knight_${hero}/Walking/Walking_009.png`,
        `img/characters/Knight_${hero}/Walking/Walking_010.png`,
        `img/characters/Knight_${hero}/Walking/Walking_011.png`,
        `img/characters/Knight_${hero}/Walking/Walking_012.png`,
        `img/characters/Knight_${hero}/Walking/Walking_013.png`,
        `img/characters/Knight_${hero}/Walking/Walking_014.png`,
        `img/characters/Knight_${hero}/Walking/Walking_015.png`,
        `img/characters/Knight_${hero}/Walking/Walking_016.png`,
        `img/characters/Knight_${hero}/Walking/Walking_017.png`,
        `img/characters/Knight_${hero}/Walking/Walking_018.png`,
        `img/characters/Knight_${hero}/Walking/Walking_019.png`,
        `img/characters/Knight_${hero}/Walking/Walking_020.png`,
        `img/characters/Knight_${hero}/Walking/Walking_021.png`,
        `img/characters/Knight_${hero}/Walking/Walking_022.png`,
        `img/characters/Knight_${hero}/Walking/Walking_023.png`,
    ];
    IMAGES_DYING = [
        `img/characters/Knight_${hero}/Dying/Dying_000.png`,
        `img/characters/Knight_${hero}/Dying/Dying_001.png`,
        `img/characters/Knight_${hero}/Dying/Dying_002.png`,
        `img/characters/Knight_${hero}/Dying/Dying_003.png`,
        `img/characters/Knight_${hero}/Dying/Dying_004.png`,
        `img/characters/Knight_${hero}/Dying/Dying_005.png`,
        `img/characters/Knight_${hero}/Dying/Dying_006.png`,
        `img/characters/Knight_${hero}/Dying/Dying_007.png`,
        `img/characters/Knight_${hero}/Dying/Dying_008.png`,
        `img/characters/Knight_${hero}/Dying/Dying_009.png`,
        `img/characters/Knight_${hero}/Dying/Dying_010.png`,
        `img/characters/Knight_${hero}/Dying/Dying_011.png`,
        `img/characters/Knight_${hero}/Dying/Dying_012.png`,
        `img/characters/Knight_${hero}/Dying/Dying_013.png`,
        `img/characters/Knight_${hero}/Dying/Dying_014.png`,

    ];
    IMAGES_HURT = [
        `img/characters/Knight_${hero}/Hurt/Hurt_000.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_001.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_002.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_003.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_004.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_005.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_006.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_007.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_008.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_009.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_010.png`,
        `img/characters/Knight_${hero}/Hurt/Hurt_011.png`,
    ];
    IMAGES_IDLE = [
        `img/characters/Knight_${hero}/Idle/Idle_000.png`,
        `img/characters/Knight_${hero}/Idle/Idle_001.png`,
        `img/characters/Knight_${hero}/Idle/Idle_002.png`,
        `img/characters/Knight_${hero}/Idle/Idle_003.png`,
        `img/characters/Knight_${hero}/Idle/Idle_004.png`,
        `img/characters/Knight_${hero}/Idle/Idle_005.png`,
        `img/characters/Knight_${hero}/Idle/Idle_006.png`,
        `img/characters/Knight_${hero}/Idle/Idle_007.png`,
        `img/characters/Knight_${hero}/Idle/Idle_008.png`,
        `img/characters/Knight_${hero}/Idle/Idle_009.png`,
        `img/characters/Knight_${hero}/Idle/Idle_010.png`,
        `img/characters/Knight_${hero}/Idle/Idle_011.png`,
        `img/characters/Knight_${hero}/Idle/Idle_012.png`,
        `img/characters/Knight_${hero}/Idle/Idle_013.png`,
        `img/characters/Knight_${hero}/Idle/Idle_014.png`,
        `img/characters/Knight_${hero}/Idle/Idle_015.png`,
        `img/characters/Knight_${hero}/Idle/Idle_016.png`,
        `img/characters/Knight_${hero}/Idle/Idle_017.png`,
    ];
    IMAGES_ATTACK = [
        `img/characters/Knight_${hero}/Slashing/Slashing_000.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_001.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_002.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_003.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_004.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_005.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_006.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_007.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_008.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_009.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_010.png`,
        `img/characters/Knight_${hero}/Slashing/Slashing_011.png`,
    ];
    IMAGES_RUN_ATTACK = [
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_000.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_001.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_002.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_003.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_004.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_005.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_006.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_007.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_008.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_009.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_010.png`,
        `img/characters/Knight_${hero}/Run Slashing/Run Slashing_011.png`,
    ];
    IMAGES_THROWING = [
        `img/characters/Knight_${hero}/Throwing/Throwing_000.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_001.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_002.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_003.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_004.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_005.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_006.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_007.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_008.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_009.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_010.png`,
        `img/characters/Knight_${hero}/Throwing/Throwing_011.png`,
    ];
    IMAGES_RUNNING = [
        `img/characters/Knight_${hero}/Running/Running_000.png`,
        `img/characters/Knight_${hero}/Running/Running_001.png`,
        `img/characters/Knight_${hero}/Running/Running_002.png`,
        `img/characters/Knight_${hero}/Running/Running_003.png`,
        `img/characters/Knight_${hero}/Running/Running_004.png`,
        `img/characters/Knight_${hero}/Running/Running_005.png`,
        `img/characters/Knight_${hero}/Running/Running_006.png`,
        `img/characters/Knight_${hero}/Running/Running_007.png`,
        `img/characters/Knight_${hero}/Running/Running_008.png`,
        `img/characters/Knight_${hero}/Running/Running_009.png`,
        `img/characters/Knight_${hero}/Running/Running_010.png`,
        `img/characters/Knight_${hero}/Running/Running_011.png`,
    ];
    IMAGES_RUN_THROW = [
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_000.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_001.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_002.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_003.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_004.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_005.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_006.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_007.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_008.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_009.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_010.png`,
        `img/characters/Knight_${hero}/Run Throwing/Run Throwing_011.png`,
    ];
    JUMP_SOUND = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage(`img/characters/Knight_${hero}/Idle/Idle_000.png`,);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_RUN_ATTACK);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_RUNNING);
        this.animate();
        this.applyGravity();
        this.moveCharacter();
        this.setHero();
    }

    setHero() {
        if (hero == 1) {
            this.damage = this.damage * 1.25;
        } else if (hero == 2) {
            this.heroSpeedBuff = 2;
        } else if (hero == 3) {
            this.MAX_HEALTH = this.MAX_HEALTH * 1.25;
            this.health = this.MAX_HEALTH;
        } else if (hero == 0) {
            this.damage = this.damage * 1.25;
            this.MAX_HEALTH = this.MAX_HEALTH * 1.25;
            this.health = this.MAX_HEALTH;
            this.heroSpeedBuff = 2;
        }
    }

    animate() {
        setStoppableInterval(() => {
            if (this.world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_DYING.length) && this.isDead()) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isDead() && !this.world.recentAction(this.lastHit, 500)) {
                this.loadImage(`img/characters/Knight_${hero}/Dying/Dying_014.png`);
            } else if (this.world.recentAction(world.lastThrow, this.animationSpeed * this.IMAGES_THROWING.length)) {
                this.playAnimation(this.IMAGES_THROWING);
            } else if (world.recentAction(this.lastAttack, this.animationSpeed * this.IMAGES_RUN_ATTACK.length) && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) {
                this.playAnimation(this.IMAGES_RUN_ATTACK);
            } else if (world.recentAction(this.lastAttack, this.animationSpeed * this.IMAGES_ATTACK.length)) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_HURT.length)) {
                this.playAnimation(this.IMAGES_HURT);
            } else if ((world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) && this.world.recentAction(this.startRun, 700)) {
                this.playAnimation(this.IMAGES_RUNNING);
            } else if (world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, this.animationSpeed);
    }

    moveCharacter() {
        setStoppableInterval(() => {
            if (!this.isDead()) {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x - this.width) {
                    this.moveRight();
                    this.otherDirection = false;
                }
                if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x - this.offset.left) {
                    this.moveLeft();
                    this.otherDirection = true;
                }
                if (this.world.keyboard.UP && this.y > this.world.level.level_top_y) {
                    this.moveUp();
                }
                if (this.world.keyboard.DOWN && this.y < this.world.level.level_bottom_y) {
                    this.moveDown();
                }
                if (this.world.recentAction(this.lastHit, 400)) {
                    this.speed = 4 + this.heroSpeedBuff;
                } else if (this.world.recentAction(this.startRun, 700)) {
                    this.speed = 12 + this.heroSpeedBuff;
                } else {
                    this.speed = 8 + this.heroSpeedBuff;
                }
            }
            if (this.x < this.world.level.level_end_x - canvas.width + 100 && this.x > 100)
                this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }
}