class Character extends MovingObjects {
    x = 100;
    height = 200;
    width = 200;
    speed = 8;
    y = this.y - this.height; //435 -350 = 
    world;
    MAX_HEALTH = 1000;
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
    IMAGES_HIT = [
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
    JUMP_SOUND = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/characters/Paladin_1/PNG/PNG Sequences/Idle/0_Paladin_Idle_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HIT);
        this.animate();
        this.applyGravity();
        this.moveCharacter();
    }

    async animate() {
        setStoppableInterval(() => {
            if (this.recentAttack()) {
                this.playAnimation(this.IMAGES_HIT);
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isHurt() && this.health < this.MAX_HEALTH) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
    }

    moveCharacter() {
        setStoppableInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP && this.y > this.world.level.level_top_y) {
                this.moveUp();
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.level_bottom_y) {
                this.moveDown();
            }
            if(this.world.keyboard.HIT){
                this.world.level.enemies.forEach(enemy => {
                    this.isCollidingWithAttack(enemy);
                });
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }
}