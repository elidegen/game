class EndbossHealthbar extends DrawableObject {
    x = 500;
    y = 60;
    height = 60;
    width = 200;
    percentage = 100;
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }
}

class EndbossHealthbarIcon extends EndbossHealthbar {
    x = 488;
    y = 69;
    height = 60;
    width = 60;
    IMAGES_ICON = ['img/7_statusbars/3_icons/icon_health_endboss.png'];

    constructor() {
        super();
        this.loadImage(this.IMAGES_ICON);
    }
}