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
        if (this instanceof Character || this instanceof Enemy1 || this instanceof Enemy2 || this instanceof Enemy3 || this instanceof Enemy4 || this instanceof Endboss || this instanceof ThrowedBomb) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.rect((this.x + this.offset.left + this.range), this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.bottom + this.offset.top));
            ctx.stroke();
        }
        if (this instanceof Blessing || this instanceof Bomb) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'red';
            ctx.moveTo(this.x, this.y + this.feetY);
            ctx.lineTo(this.x + this.width, this.y + this.feetY);
            ctx.stroke();
        }
    }
}