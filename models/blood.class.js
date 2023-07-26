class Blood extends MovingObjects {
    bloodSet = false;
    bloodType;
    IMAGES_BLOOD_FADE1 = [
        'img/blood/blood1_100.png',
        'img/blood/blood1_90.png',
        'img/blood/blood1_80.png',
        'img/blood/blood1_70.png',
        'img/blood/blood1_60.png',
        'img/blood/blood1_50.png',
        'img/blood/blood1_40.png',
        'img/blood/blood1_30.png',
        'img/blood/blood1_20.png',
        'img/blood/blood1_10.png',
    ];
    IMAGES_BLOOD_FADE2 = [
        'img/blood/blood2_100.png',
        'img/blood/blood2_90.png',
        'img/blood/blood2_80.png',
        'img/blood/blood2_70.png',
        'img/blood/blood2_60.png',
        'img/blood/blood2_50.png',
        'img/blood/blood2_40.png',
        'img/blood/blood2_30.png',
        'img/blood/blood2_20.png',
        'img/blood/blood2_10.png',
    ];
    IMAGES_BLOOD_FADE3 = [
        'img/blood/blood3_100.png',
        'img/blood/blood3_90.png',
        'img/blood/blood3_80.png',
        'img/blood/blood3_70.png',
        'img/blood/blood3_60.png',
        'img/blood/blood3_50.png',
        'img/blood/blood3_40.png',
        'img/blood/blood3_30.png',
        'img/blood/blood3_20.png',
        'img/blood/blood3_10.png',
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

    /**
     * randomly sets one of 3 different blood images
     */
    setBloodType() {
        this.bloodType = this.IMAGES_BLOOD_FADE1;
        // let numbr = Math.round(Math.random() * 3);
        // if (numbr == 2) {
        //     this.bloodType = this.IMAGES_BLOOD_FADE1;
        // } else if (numbr == 1) {
        //     this.bloodType = this.IMAGES_BLOOD_FADE2;
        // } else {
        //     this.bloodType = this.IMAGES_BLOOD_FADE3;
        // }
    }

    /**
     * will animate blood to fade away after occur
     */
    setImage() {
        if (!this.bloodSet) {
            let i = 0;
            const interval = setInterval(() => {
                if (!pause) {
                    if (i < this.bloodType.length) {
                        this.playAnimation(this.bloodType);
                        i++;
                    } else {
                        clearInterval(interval); // Schleife beenden, wenn alle Durchläufe abgeschlossen sind
                        world.blood.splice(0, 1);
                    }
                }
            }, 50);
            this.bloodSet = true;
        }
    }
}