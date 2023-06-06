class Endboss extends MovingObjects {

    world;
    height = 500;
    width = 500;
    speed = 15;
    y = this.y - this.height + 100;
    startTime;
    bossActivated = 0;
    MAX_HEALTH = 200;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    offset = {
        top: 280,
        right: 180,
        left: 150,
        bottom: 80,
    };
    IMAGES_WALKING = [
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_011.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_012.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_013.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_014.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_015.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_016.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_017.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_018.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_019.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_020.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_021.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_022.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_023.png',
    ];
    IMAGES_RUNNING = [
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
    IMAGES_IDLE = [
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
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        //this.x = this.world.level.level_end_x;
        this.x = 2500;
    }

    startEndboss() {
        if (this.bossActivated == 0) {
            this.animate();
            this.moveEnemy();
            this.startTime = new Date().getTime();
            this.bossActivated = 1;
        }
    }

    animate() {
        setStoppableInterval(() => {
            if (this.isDead() && this.isHurt()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isDead()) {
                this.loadImage('img/enemies/Orc/PNG/PNG Sequences/Dying/0_Orc_Dying_014.png');
            } else if (this.recentlyTriggered()) {
                this.playAnimation(this.IMAGES_IDLE);
            } else if (this.playerNearby()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
        }, 100);
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