let canvas;
let world;
let keyboard = new Keyboard();
let allInterval = [];
let pause = true;
let enableBlood = false;
let gameStarted = 0;
let startScreen = new Image();
let volume = true;
let currentLevel = 1;
let hero;
startScreen.src = 'img/backgrounds/game_background_1.png';
const BACKGROUND_MUSIC = new Audio('audio/backgroundMusic.mp3');
const BUTTON_SOUND = new Audio('audio/button.mp3');

/**
 * initialises the game upon loading
 */
function init() {
    canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
    getLocalStorageBlood();
    showKing();
}

/**
 * checks for pressed keys
 */
window.addEventListener("keydown", (e) => {
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
    if (e.keyCode == 75 && !world.recentAction(world.character.lastAttack, 500)) { //K
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
        togglePlayPause();
    }
});

/**
 * checks for released keys
 */
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
    if (e.keyCode == 76) {
        keyboard.THROW = false;
    }
});

/**
 * shows king as optinal hero
 */
function showKing() {
    if (localStorage.getItem('king') == 'unlocked') {
        document.getElementById('king').classList.remove('d-none');
    }
}

/**
 * puts canvas in fullscreen
 */
async function enterFullscreen() {
    await canvas.requestFullscreen();
}

/**
 * exits canvas fullscreen
 */
async function closeFullscreen() {
    await canvas.exitFullscreen();
}

/**
 * toggle sound mute
 */
function toggleMute() {
    volume = !volume;
    if (volume) {
        document.getElementById('soundImg').src = ('img/sound.png');
    } else {
        document.getElementById('soundImg').src = ('img/mute.png');
    }
    playBackgroundMusic();
}

/**
 * toggles settings menu and triggers animation
 */
function toggleMenu() {
    if (document.getElementById('settingsMenu').classList.contains('closeSettings')) {
        document.getElementById('settingsMenu').classList.add('openSettings');
        document.getElementById('settingsMenu').classList.remove('closeSettings');
        document.getElementById('settingsMenu').classList.remove('d-none');
    } else {
        document.getElementById('settingsMenu').classList.remove('openSettings');
        document.getElementById('settingsMenu').classList.add('closeSettings');
        setTimeout(() => {
            document.getElementById('settingsMenu').classList.add('d-none');
        }, 1000);
    }
}

/**
 * play pause button function and appearance
 */
function togglePlayPause() {
    if (gameStarted) {
        pause = !pause;
        if (pause) {
            document.getElementById('playPauseButton').src = 'img/playBlack.png';
            document.getElementById('playPauseButton').style = 'margin-left: 6px';
            playBackgroundMusic();
        } else {
            document.getElementById('playPauseButton').src = 'img/pause.png';
            document.getElementById('playPauseButton').style = 'margin-left: 0px';
            playBackgroundMusic();
        }
    }
}

/**
 * allows you to set blood splatter on and off
 */
function toggleBlood() {
    enableBlood = !enableBlood;
    setBloodButton();
    setLocalStorageBlood();
}

/**
 * stops the game by clearing all intervals
 */
function stopGame() {
    allInterval.forEach(clearInterval);
}

/**
 * gives the ability to pause and stop all intervals at once
 * @param {function} fn executed function
 * @param {number} time frequency of intervall in ms
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(() => {
        if (!pause) {
            fn();
        }
    }, time);
    allInterval.push(id);
}

/**
 * creating world and make game start
 */
function startGame() {
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
    pause = false;
    gameStarted = 1;
    world.keyboard.mobileButtonPress();
    document.getElementById('controls').classList.remove('d-none');
    playBackgroundMusic();
}

/**
 * sets design of blood button depending on setting of enableBlood
 */
function setBloodButton() {
    if (enableBlood == true) {
        document.getElementById('bloodEnable').style = 'background: linear-gradient(to bottom, rgba(255, 0, 0, 0.568), #8B0000);'
    } else {
        document.getElementById('bloodEnable').style = 'background: linear-gradient(to top, rgb(202, 202, 202), rgb(155, 155, 155));'
    }
}

/**
 * saves the chosen setting for blood in localstorage
 */
function setLocalStorageBlood() {
    localStorage.setItem('enableBlood', enableBlood);
}

/**
 * get prefered setting for blood from localstorage
 */
function getLocalStorageBlood() {
    if (localStorage.getItem('enableBlood') != undefined) {
        enableBlood = JSON.parse(localStorage.getItem('enableBlood'));
    }
    setBloodButton();
}

/**
 * make next level overlay dissapear
 */
function hideWinOverlay() {
    document.getElementById('overlayWin').classList.add('d-none');
}

/**
 * increases enemy damage per level and sets next level
 */
async function loadNextLevel() {
    startGame();
    currentLevel++;
    world.enemyDamage = world.enemyOriginalDamage + currentLevel * 3;
    world.bossDamage = world.bossOriginalDamage + currentLevel * 3;
    if (currentLevel == 8) {
        document.getElementById('levelEndText').innerHTML = "You Win!";
        document.getElementById('levelEndButton').classList.add('d-none');
        document.getElementById('gameEndButton').classList.remove('d-none');
        localStorage.setItem('king', 'unlocked');
    } else {
        setLevel();
    }
}

/**
 * creates next level depending on progress
 */
async function setLevel() {
    if (currentLevel == 2) {
        await setLevel2();
    } else if (currentLevel == 3) {
        await setLevel3();
    } else if (currentLevel == 4) {
        await setLevel4();
    } else if (currentLevel == 5) {
        await setLevel5();
    } else if (currentLevel == 6) {
        await setLevel6();
    } else if (currentLevel == 7) {
        await setLevel7();
    }
    let level = 'level' + currentLevel;
    world.level = eval(level);
    hideWinOverlay();
}

/**
 * makes hero selection disappear
 */
function hideHeroSelection() {
    document.getElementById('heroSelection').classList.add('d-none');
}

/**
 * 
 * @param {number} nr indicates which hero was chosen
 */
function chooseHero(nr) {
    hero = nr;
    startGame();
}

/**
 * plays background music if not paused or muted
 */
function playBackgroundMusic() {
    BACKGROUND_MUSIC.volume = volume;
    if (pause) {
        BACKGROUND_MUSIC.pause();
    } else {
        BACKGROUND_MUSIC.play();
    }
}

/**
 * plays button sounds unless muted
 */
function buttonSound() {
    BUTTON_SOUND.volume = volume;
    BUTTON_SOUND.currentTime = 0;
    BUTTON_SOUND.play();
}