class Goblin extends MovingObjects {
    height = 200;
    width = 200;
    y = this.y - (this.height);
    i = 1;
    MAX_HEALTH = 1;
    health = this.MAX_HEALTH;
    otherDirection = 1;
    offset = {
        top: 50,
        right: 0,
        left: 55,
        bottom: 35,
    };
    IMAGES_WALKING = [
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_000.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_001.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_002.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_003.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_004.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_005.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_006.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_007.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_008.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_009.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_010.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_011.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_012.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_013.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_014.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_015.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_016.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_017.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_018.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_019.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_020.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_021.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_022.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_023.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
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
            if (this.health > 0) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
            }
        }, 130);
    }
}