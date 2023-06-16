let canvas;
let world;
let keyboard = new Keyboard();
let allInterval = [];
let pause = true;
let startScreen = new Image();
startScreen.src = 'img/9_intro_outro_screens/start/startscreen_1.png';

function init() {
    canvas = document.getElementById('canvas');

    // startScreen.draw(canvas.getContext('2d'));
    let ctx = canvas.getContext('2d');

    ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
    startGame();
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        keyboard.ENTER = true;
    }
    if (e.keyCode == 87) { //W
        keyboard.UP = true;
    }
    if (e.keyCode == 65) { //A
        keyboard.LEFT = true;
    }
    if (e.keyCode == 83) { //S
        keyboard.DOWN = true;
    }
    if (e.keyCode == 68) { //D
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 75) { //K
        keyboard.HIT = true;
        world.character.lastAttack = new Date().getTime();
        world.character.currentImage = 0;
    }
    if (e.keyCode == 76) { //L
        keyboard.THROW = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
    if (e.keyCode == 75) {
        keyboard.HIT = false;
    }
    if (e.keyCode == 76) {
        keyboard.THROW = false;
    }
});

async function enterFullscreen() {
    await canvas.requestFullscreen();
}

async function closeFullscreen() {
    await canvas.exitFullscreen();
}

function toggleMute() {
    world.volume = !world.volume;
    document.getElementById('sound').classList.toggle('mute');
}

function togglePause() {
    pause = !pause;
}

function stopGame() {
    allInterval.forEach(clearInterval)
}

function setStoppableInterval(fn, time) {
    let id = setInterval(() => {
        if (!pause) {
            fn();
        }
    }, time);
    allInterval.push(id);
}

function startGame() {
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character)
}

function pauseGame() {
    pause = true;
}

function resumeGame() {
    pause = false;
}