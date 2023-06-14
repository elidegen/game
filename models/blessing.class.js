class Blessing extends MovingObjects {
    height = 50;
    width = 50;
    offset = {
        top: 5,
        right: 7,
        left: 7,
        bottom: 5,
    };
    IMAGES_BLESSING = [
        'img/blessing_0.png',
        'img/blessing_1.png',
    ];
    constructor() {
        super().loadImage('img/blessing_0.png');
        this.loadImages(this.IMAGES_BLESSING);
        this.x = 300 + Math.random() * 2000;
        this.y = 230 + Math.random() * 350;
        this.animate();
    }

    animate(){
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BLESSING);
        }, 200)
    }
}