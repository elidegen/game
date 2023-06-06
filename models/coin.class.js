class Coin extends MovingObjects {
    height = 150;
    width = 150;
    offset = {
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
    };
    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];
    constructor(){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 300 + Math.random() * 2000;
        this.y = 70;
        this.animate();
    }

    animate(){
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 150);
    }
}