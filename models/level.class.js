class Level {
    enemies;
    clouds;
    background;
    blessings;
    bombs;
    level_start_x = 0;
    level_end_x = 3000;
    level_top_y = 120;
    level_bottom_y = 460;

    constructor(enemies, clouds, background, blessings, bombs){
        this.enemies = enemies;
        this.background = background;
        this.clouds = clouds;
        this.blessings = blessings;
        this.bombs = bombs;
    }
}