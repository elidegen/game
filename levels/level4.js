let level4;
function setLevel4() {
    level4 = new Level(
        [
            new Endboss(),
            new Enemy1(),
            new Enemy2(),
            new Enemy1(),
            new Enemy2(),
            new Enemy1(),
            new Enemy2(),
            new Enemy1(),
            new Enemy2(),
        ],
        [
            new BackgroundObject('img/backgrounds/game_background_4.png', 0),
            new BackgroundObject('img/backgrounds/game_background_4.png', 1280),
            new BackgroundObject('img/backgrounds/game_background_4.png', 1280 * 2),
            new BackgroundObject('img/backgrounds/game_background_4.png', 1280 * 3),
            new BackgroundObject('img/backgrounds/game_background_4.png', 1280 * 4),
            new BackgroundObject('img/backgrounds/game_background_4.png', 1280 * 5),
        ],
        [
            new Blessing(),
            new Blessing(),
        ],
        [
            new Bomb(),
            new Bomb(),
            new Bomb(),
        ],
    );
}