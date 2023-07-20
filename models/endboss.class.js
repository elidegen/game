class Endboss extends MovingObjects {

    world;
    height = 500;
    width = 500;
    y = this.y - this.height + 100;
    MAX_HEALTH = 300;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    range = 160;
    bombHit = false;
    offset = {
        top: 280,
        right: 180,
        left: 150,
        bottom: 90,
    };
    IMAGES_WALKING = [
        `img/enemies/Boss_${currentLevel}/Walking/Walking_000.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_001.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_002.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_003.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_004.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_005.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_006.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_007.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_008.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_009.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_010.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_011.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_012.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_013.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_014.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_015.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_016.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_017.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_018.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_019.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_020.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_021.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_022.png`,
        `img/enemies/Boss_${currentLevel}/Walking/Walking_023.png`,
    ];
    IMAGES_RUNNING = [
        `img/enemies/Boss_${currentLevel}/Running/Running_000.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_001.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_002.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_003.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_004.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_005.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_006.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_007.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_008.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_009.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_010.png`,
        `img/enemies/Boss_${currentLevel}/Running/Running_011.png`,
    ];
    IMAGES_ATTACK = [
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_000.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_001.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_002.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_003.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_004.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_005.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_006.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_007.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_008.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_009.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_010.png`,
        `img/enemies/Boss_${currentLevel}/Slashing/Slashing_011.png`,
    ];
    IMAGES_HURT = [
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_000.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_001.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_002.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_003.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_004.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_005.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_006.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_007.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_008.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_009.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_010.png`,
        `img/enemies/Boss_${currentLevel}/Hurt/Hurt_011.png`,
    ];
    IMAGES_DYING = [
        `img/enemies/Boss_${currentLevel}/Dying/Dying_000.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_001.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_002.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_003.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_004.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_005.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_006.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_007.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_008.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_009.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_010.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_011.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_012.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_013.png`,
        `img/enemies/Boss_${currentLevel}/Dying/Dying_014.png`,
    ];
    IMAGE_DEAD = `img/enemies/Boss_${currentLevel}/Dying/Dying_014.png`;


    constructor() {
        super().loadImage(`img/enemies/Boss_${currentLevel}/Walking/Walking_004.png`);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_RUNNING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        //this.x = this.world.level.level_end_x;
        this.x = 2500;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.speed = 3;
            if (this.isDead() && world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_DYING.length)) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isDead()) {
                this.loadImage(this.IMAGE_DEAD);
            } else if (world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_HURT.length)) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (world.recentAction(this.lastAttack, this.animationSpeed * this.IMAGES_ATTACK.length)) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.playerNearby()) {
                this.speed = 12;
                this.playAnimation(this.IMAGES_RUNNING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, this.animationSpeed);
    }
}