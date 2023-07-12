class Blood extends MovingObjects {
    bloodSet = false;
    bloodType
    IMAGES_BLOOD_FADE1 = [
        'img/blood/blood1_100.png',
        'img/blood/blood1_80.png',
        'img/blood/blood1_60.png',
        'img/blood/blood1_40.png',
        'img/blood/blood1_20.png',
    ];
    IMAGES_BLOOD_FADE2 = [
        'img/blood/blood2_100.png',
        'img/blood/blood2_80.png',
        'img/blood/blood2_60.png',
        'img/blood/blood2_40.png',
        'img/blood/blood2_20.png',
    ];
    IMAGES_BLOOD_FADE3 = [
        'img/blood/blood3_100.png',
        'img/blood/blood3_80.png',
        'img/blood/blood3_60.png',
        'img/blood/blood3_40.png',
        'img/blood/blood3_20.png',
    ];
    constructor(x, y, height, width) {
        super();
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.loadImage('img/blood/blood_clean.png');
        this.loadImages(this.IMAGES_BLOOD_FADE1);
        this.loadImages(this.IMAGES_BLOOD_FADE2);
        this.loadImages(this.IMAGES_BLOOD_FADE3);
        this.setBloodType();
        this.setImage();
    }

    setBloodType() {
        let numbr = Math.round(Math.random() * 3);
        if (numbr == 2) {
            this.bloodType = this.IMAGES_BLOOD_FADE1;
        } else if (numbr == 1) {
            this.bloodType = this.IMAGES_BLOOD_FADE2;
        } else {
            this.bloodType = this.IMAGES_BLOOD_FADE3;
        }
    }

    setImage() {
        if (!this.bloodSet) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < this.bloodType.length) {
                    this.loadImage(this.bloodType[i]);
                    i++;
                } else {
                    clearInterval(interval); // Schleife beenden, wenn alle Durchläufe abgeschlossen sind
                    world.blood.splice(0, 1);
                }
            }, 300);
            this.bloodSet = true;
        }
    }
}
