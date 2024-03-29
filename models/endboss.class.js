class Endboss extends MovingObjects {

    world;
    height = 500;
    width = 500;
    y = this.y - this.height + 100;
    MAX_HEALTH = 800;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    range = 100;
    feetY = 415;
    bombHit = false;
    animationSpeed = 50;
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
    // IMAGES_IDLE_BLINKING = [
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_000.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_001.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_002.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_003.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_004.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_005.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_006.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_007.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_008.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_009.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_010.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_011.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_012.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_013.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_014.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_015.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_016.png`,
    //     `img/enemies/Boss_${currentLevel}/Idle/0_Zombie_Pirate_Idle_017.png`,
    // ];
    
    HURT_SOUND = new Audio('audio/enemyHurt.mp3');
    ATTACK_SOUND = new Audio('audio/attack.mp3');
    DYING_SOUND = new Audio('audio/dying2.mp3');

    IMAGE_DEAD = `img/enemies/Boss_${currentLevel}/Dying/Dying_014.png`;


    constructor() {
        super().loadImage(`img/enemies/Boss_${currentLevel}/Walking/Walking_004.png`);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_RUNNING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.x = 2500;
        this.animate();
    }

    /**
     * animates endboss
     */
    animate() {
        setStoppableInterval(() => {
            this.speed = 3;
            if (this.isDead() && world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_DYING.length)) {
                this.playSound(this.DYING_SOUND);
                this.playAnimation(this.IMAGES_DYING);
            } else if (this.isDead()) {
                this.loadImage(this.IMAGE_DEAD);
            } else if (world.recentAction(this.lastHit, this.animationSpeed * this.IMAGES_HURT.length)) {
                this.playSound(this.HURT_SOUND);
                this.playAnimation(this.IMAGES_HURT);
            } else if (world.recentAction(this.lastAttack, this.animationSpeed * this.IMAGES_ATTACK.length)) {
                this.playSound(this.ATTACK_SOUND);
                this.playAnimation(this.IMAGES_ATTACK);
                this.doDamage();
            } else if (this.isCollidingWithAttack(world.character) && !world.recentAction(this.lastAttack, this.animationSpeed * this.IMAGES_ATTACK.length)) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (this.playerNearby()) {
                this.speed = 12;
                this.playAnimation(this.IMAGES_RUNNING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, this.animationSpeed);
    }

    /**
     * character takes damage
     */
    doDamage() {
        if (this.currentImage == 8) {
            world.character.takeDamage(world.bossDamage, this.otherDirection);
        }
    }
}