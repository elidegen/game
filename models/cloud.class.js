class Cloud extends MovingObjects {
y= 0;
height = 250;
width = 500;
    constructor() {
        super();
        this.loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random()*400;
        this.animate();
    }
    animate(){
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}