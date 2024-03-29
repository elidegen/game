class Enemy3 extends Enemies {
    IMAGES_WALKING = [
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_000.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_001.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_002.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_003.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_004.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_005.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_006.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_007.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_008.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_009.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_010.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_011.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_012.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_013.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_014.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_015.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_016.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_017.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_018.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_019.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_020.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_021.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_022.png`,
        `img/enemies/Enemy_${currentLevel}.3/Walking/Walking_023.png`,
    ];
    IMAGES_ATTACK = [
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_000.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_001.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_002.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_003.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_004.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_005.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_006.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_007.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_008.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_009.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_010.png`,
        `img/enemies/Enemy_${currentLevel}.3/Slashing/Slashing_011.png`,
    ];
    IMAGES_HURT = [
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_000.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_001.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_002.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_003.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_004.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_005.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_006.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_007.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_008.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_009.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_010.png`,
        `img/enemies/Enemy_${currentLevel}.3/Hurt/Hurt_011.png`,
    ];
    IMAGES_DYING = [
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_000.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_001.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_002.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_003.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_004.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_005.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_006.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_007.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_008.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_009.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_010.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_011.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_012.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_013.png`,
        `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_014.png`,
    ];
    IMAGES_RUNNING = [
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_000.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_001.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_002.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_003.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_004.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_005.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_006.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_007.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_008.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_009.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_010.png`,
        `img/enemies/Enemy_${currentLevel}.3/Running/Running_011.png`,
    ];
    IMAGE_DEAD = `img/enemies/Enemy_${currentLevel}.3/Dying/Dying_014.png`

    constructor() {
        super().loadImage(`img/enemies/Enemy_${currentLevel}.3/Walking/Walking_004.png`);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_RUNNING);
    }
}