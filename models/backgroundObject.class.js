class BackgroundObject extends MovingObjects {
    height = 720;
    width = 1280;
    y = 0;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}