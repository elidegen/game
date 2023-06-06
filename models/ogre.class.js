class Ogre extends MovingObjects {
    height = 200;
    width = 200;
    y = this.y - (this.height);
    i = 1;
    MAX_HEALTH = 10;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    offset = {
        top: 50,
        right: 0,
        left: 55,
        bottom: 35,
    };
    IMAGES_WALKING = [
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_000.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_001.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_002.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_003.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_004.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_005.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_006.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_007.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_008.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_009.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_010.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_011.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_012.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_013.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_014.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_015.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_016.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_017.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_018.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_019.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_020.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_021.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_022.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Walking/0_Ogre_Walking_023.png',
    ];
    IMAGES_ATTACK = [
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_000.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_001.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_002.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_003.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_004.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_005.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_006.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_007.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_008.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_009.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_010.png',
        'img/enemies/Ogre/PNG/PNG Sequences/Slashing/0_Ogre_Slashing_011.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 500 + Math.random() * 2500; //math.random = zahl zwischen 0 und 1
        this.speed = 0.25 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
            }
        }, 130);
    }
}