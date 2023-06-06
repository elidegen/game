class Level {
    enemies;
    clouds;
    background;
    coins;
    salsa;
    level_start_x = 100;
    level_end_x = 2500;
    level_top_y = 120;
    level_bottom_y = 460;

    constructor(enemies, clouds, background, coins, salsa){
        this.enemies = enemies;
        this.background = background;
        this.clouds = clouds;
        this.coins = coins;
        this.salsa = salsa;
    }
}