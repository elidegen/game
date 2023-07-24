class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    ENTER = false;
    THROW = false;
    PAUSE = false;

    mobileButtonPress() {
        // dpad

        document.getElementById('touchUp').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('touchUp').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });

        document.getElementById('touchDown').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.DOWN = true;
        });
        document.getElementById('touchDown').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.DOWN = false;
        });

        document.getElementById('touchRight').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('touchRight').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });

        document.getElementById('touchLeft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('touchLeft').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });

        // controls

        document.getElementById('touchHit').addEventListener('touchstart', (e) => {
            e.preventDefault();
            world.character.lastAttack = new Date().getTime();
            world.character.currentImage = 0;
        });

        document.getElementById('touchRun').addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!world.recentAction(world.character.startRun, 2000)) {
                keyboard.RUN = true;
                world.character.startRun = new Date().getTime();
            }
        });

        document.getElementById('touchThrow').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.THROW = true;
            world.character.currentImage = 0;
        });
        document.getElementById('touchThrow').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.THROW = false;
        });
    }
}