let canvas;
let world;
let keyboard = new Keyboard();
let allInterval = [];
let pause = true;
let enableBlood = false;
let startScreen = new Image();
startScreen.src = 'img/backgrounds/PNG/game_background_2/game_background_2.png';

function init() {
    canvas = document.getElementById('canvas');

    // startScreen.draw(canvas.getContext('2d'));
    let ctx = canvas.getContext('2d');

    ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
    //startGame();
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
        world.character.currentImage = 0;
    }
    if (e.keyCode == 16) {
        if (!world.recentAction(world.character.startRun, 2000)) {
            keyboard.RUN = true;
            world.character.startRun = new Date().getTime();
        }
    }
    if (e.keyCode == 27) {
        playPause();
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
    if (e.keyCode == 16) {
        keyboard.RUN = false;
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
    if(world.volume){
    document.getElementById('soundImg').src = ('img/sound.png');
    } else {
    document.getElementById('soundImg').src = ('img/mute.png');
    }
}

function stopGame() {
    allInterval.forEach(clearInterval);
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

    console.log('My Character is', world.character);

    document.getElementById('startGame').classList.add('d-none');
    pause = false;
}

function playPause() {
    pause = !pause;
    if (pause) {
        document.getElementById('playPauseButton').src = 'img/playBlack.png';
        document.getElementById('playPauseButton').style = 'margin-left: 6px';
    } else {
        document.getElementById('playPauseButton').src = 'img/pause.png';
        document.getElementById('playPauseButton').style = 'margin-left: 0px';
    }
}