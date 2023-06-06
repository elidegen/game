class Goblin extends Enemies {
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
    IMAGES_ATTACK = [
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_000.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_001.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_002.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_003.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_004.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_005.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_006.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_007.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_008.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_009.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_010.png',
        'img/enemies/Goblin/PNG/PNG Sequences/Slashing/0_Goblin_Slashing_011.png',
    ];
    IMAGE_DEAD = 'img/enemies/Goblin/PNG/PNG Sequences/Dying/0_Goblin_Dying_014.png'

    constructor() {
        super().loadImage('img/enemies/Goblin/PNG/PNG Sequences/Walking/0_Goblin_Walking_000.png');
        this.x = 500 + Math.random() * 2500; //math.random = zahl zwischen 0 und 1    
        this.y = 120 + Math.random() * 460;
        this.speed = 0.25 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }
}