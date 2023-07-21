let level3;
function setLevel3() {
    level3 = new Level(
        [
            new Endboss(),
            new Enemy1(),
            new Enemy2(),
            new Enemy1(),
            new Enemy2(),
            new Enemy1(),
            new Enemy2(),
        ],
        [
            new BackgroundObject('img/backgrounds/game_background_3.png', 0),
            new BackgroundObject('img/backgrounds/game_background_3.png', 1000),
            new BackgroundObject('img/backgrounds/game_background_3.png', 1000 * 2),
            new BackgroundObject('img/backgrounds/game_background_3.png', 1000 * 3),
            new BackgroundObject('img/backgrounds/game_background_3.png', 1000 * 4),
            new BackgroundObject('img/backgrounds/game_background_3.png', 1000 * 5),
        ],
        [
            new Blessing(),
            new Blessing(),
        ],
        [
            new Bomb(),
        ],
    );
}