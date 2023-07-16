const level1 = new Level(
    [
        new Endboss(),
        new Goblin(),
        new Ogre(),
    ],
    [
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 0),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 719),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 719 * 2),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 719 * 3),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 719 * 4),
        new BackgroundObject('img/backgrounds/PNG/game_background_2/game_background_2.png', 719 * 5),
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