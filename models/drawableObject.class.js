class DrawableObject {
    x = 120;
    y = 430;
    img;
    height = 150;
    width = 100;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Goblin || this instanceof Ogre || this instanceof Coin || this instanceof Salsa || this instanceof Endboss) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.rect((this.x + this.offset.left + this.range), this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.stroke();
        }
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}