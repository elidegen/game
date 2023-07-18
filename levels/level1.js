const level1 = new Level(
    [
        new Endboss(),
        new Goblin(),
        new Ogre(),
    ],
    [
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 0),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 1280),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 1280 * 2),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 1280 * 3),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 1280 * 4),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 1280 * 5),
    ],
    [
        new Blessing(),
        new Blessing(),
    ],
    [
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
        new Bomb(),
    ],
);