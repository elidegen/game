class Endboss extends MovingObjects {

    world;
    height = 500;
    width = 500;
    speed = 15;
    y = -30;
    startTime;
    bossActivated = 0;
    MAX_HEALTH = 200;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    offset = {
        top: 100,
        right: 30,
        left: 60,
        bottom: 30,
    };
    IMAGES_WALKING = [
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Running/0_Orc_Running_011.png',
    ];
    IMAGES_ALERT = [
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_011.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_012.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_013.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_014.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_015.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_016.png',
        'img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_017.png',
    ];
    IMAGES_ATTACK = [
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_011.png',
    ];
    IMAGES_HURT = [
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_011.png',
    ];
    IMAGES_DEAD = [
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_011.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_012.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_013.png',
        'img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_014.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        //this.x = this.world.level.level_end_x;
        this.x = 2500;
    }

    startEndboss() {
        if (this.bossActivated == 0) {
            this.animate();
            this.checkCharacterPosition();
            this.startTime = new Date().getTime();
            this.bossActivated = 1;
        }
    }

    animate() {
        setStoppableInterval(() => {
            if (this.recentlyTriggered() && !this.isDead()) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.playerNearby() && !this.isDead()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.bossIsHurt() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 100);
    }

    bossIsHurt() {
        return 500 > (new Date().getTime() - this.world.lastBossHit);
    }

    checkCharacterPosition() {
        setStoppableInterval(() => {
            if (this.x < world.character.x) {
                this.speed = -15;
                this.otherDirection = false;
            } else {
                this.speed = 15;
                this.otherDirection = true;
            }
        }, 300);
    }

    recentlyTriggered() {
        return 1000 > (new Date().getTime() - this.startTime);
    }

    playerNearby() {
        if (this.x >= world.character.x) {
            return 70 > (this.x - world.character.x);
        } else {
            return 100 < ((this.x + this.width) - world.character.x);
        }
    }
}