class Blessing extends MovingObjects {
    height = 80;
    width = 80;
    feetY = 70;
    offset = {
        top: 5,
        right: 7,
        left: 7,
        bottom: 5,
    };
    IMAGES_BLESSING = [
        'img/Shield.png',
    ];
    constructor() {
        super().loadImage('img/Shield.png');
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