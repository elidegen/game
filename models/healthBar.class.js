class Healthbar extends MovingObjects {
x = 10;
y = 0;
height = 60;
width = 200;
percentage = 100;
IMAGES=[
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
]
    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }
}