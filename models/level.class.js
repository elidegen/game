class Level {
    enemies;
    clouds;
    background;
    blessings;
    bomb;
    level_start_x = 100;
    level_end_x = 2500;
    level_top_y = 120;
    level_bottom_y = 460;

    constructor(enemies, clouds, background, blessings, bomb){
        this.enemies = enemies;
        this.background = background;
        this.clouds = clouds;
        this.blessings = blessings;
        this.bomb = bomb;
    }
}