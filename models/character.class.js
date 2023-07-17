class Character extends MovingObjects {
    x = 100;
    height = 200;
    width = 200;
    y = this.y - this.height; //435 -350 = 
    world;
    MAX_HEALTH = 100000;
    health = this.MAX_HEALTH;
    damage = 50;
    range = 70;
    offset = {
        top: 100,
        right: 70,
        left: 65,
        bottom: 35,
    };
    IMAGES_WALKING = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_011.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_012.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_013.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_014.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_015.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_016.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_017.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_018.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_019.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_020.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_021.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_022.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Walking/0_Paladin_Walking_023.png',
    ];
    IMAGES_JUMPING = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Jump Loop/0_Paladin_Jump Loop_005.png',
    ];
    IMAGES_DYING = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_011.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_012.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_013.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_014.png',

    ];
    IMAGES_HURT = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Hurt/0_Paladin_Hurt_011.png',
    ];
    IMAGES_IDLE = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_011.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_012.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_013.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_014.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_015.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_016.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_017.png',
    ];
    IMAGES_ATTACK = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Slashing/0_Paladin_Slashing_011.png',
    ];
    IMAGES_RUN_ATTACK = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Run Slashing/0_Paladin_Run Slashing_011.png',
    ];
    IMAGES_BLESSED = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_011.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_012.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_013.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_014.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_015.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_016.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_017.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_018.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_019.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_020.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_021.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_022.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_023.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_024.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_025.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_026.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_027.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_028.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Blessed/0_Paladin_Blessed_029.png',
    ];
    IMAGES_THROWING = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Throwing/0_Paladin_Throwing_011.png',
    ];
    IMAGES_RUNNING = [
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_000.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_001.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_002.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_003.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_004.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_005.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_006.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_007.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_008.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_009.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_010.png',
        'img/characters/Paladin_1/PNG/PNG Sequences/Running/0_Paladin_Running_011.png',
    ];
    JUMP_SOUND = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_RUN_ATTACK);
        this.loadImages(this.IMAGES_BLESSED);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_RUNNING);
        this.animate();
        this.applyGravity();
        this.moveCharacter();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.isDead() && this.isHurt()) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isDead()) {
                this.loadImage('img/characters/Paladin_1/PNG/PNG Sequences/Dying/0_Paladin_Dying_014.png');
            } else if (this.world.recentAction(world.lastBlessing, 1000)) {
                this.playAnimation(this.IMAGES_BLESSED);
            } else if (this.world.recentAction(world.lastThrow, 500)) {
                this.playAnimation(this.IMAGES_THROWING);
            } else if (world.recentAction(this.lastAttack, 500) && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) {
                this.playAnimation(this.IMAGES_RUN_ATTACK);
            } else if (world.recentAction(this.lastAttack, 500)) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.isHurt() && this.health < this.MAX_HEALTH) {
                this.playAnimation(this.IMAGES_HURT);
            } else if ((world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) && this.world.recentAction(this.startRun, 700)) {
                this.playAnimation(this.IMAGES_RUNNING);
            } else if (world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 50);
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
                if (this.isHurt()) {
                    this.speed = 6;
                } else if (this.world.recentAction(this.startRun, 700)) {
                    this.speed = 12;
                } else {
                    this.speed = 8;
                }
            }
            if (this.x < this.world.level.level_end_x - canvas.width + 100 && this.x > 100)
                this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }
}