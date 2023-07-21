class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    ENTER = false;
    HIT = false;
    THROW = false;
    RUN = false;
    PAUSE = false;

    mobileButtonPress() {
        document.getElementById('touchUp').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('touchUp').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
    }
}