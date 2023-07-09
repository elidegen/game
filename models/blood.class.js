class Blood extends MovingObjects {
    height = 100;
    width = 100;
    bloodSet = false;
    IMAGES_BLOOD = [
        'img/blood/blood1.png',
        'img/blood/blood2.png',
        'img/blood/blood3.png',
    ];
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_BLOOD);
        this.setImage();
    }

    setImage() {
        if (!this.bloodSet) {
            this.loadImage(this.IMAGES_BLOOD[Math.floor(Math.random() * 3)]);
            this.bloodSet = true;
        }
    }
}
