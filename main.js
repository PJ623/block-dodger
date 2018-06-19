let player = new Player();
let game = new Game(15, player);

const movementMap = {
    "a": -1,
    "d": 1
}

game.toString();

document.addEventListener("keypress", (event) => {
    if (event.key == "a" || event.key == "d") {

        player.move(movementMap[event.key]);
    }
});

const fps = 1000 / 15;
let spawnChance = 0.1;
let nextSpawn = Math.random();

// score
// time survived
// Cleanup visuals
let animate = setInterval(() => {
    game.cleanup();
    game.turn();
    
    if (spawnChance > nextSpawn) {
        game.spawnBlock();
    }

    nextSpawn = Math.random();
    game.toString();
}, fps);