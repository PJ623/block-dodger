let player = new Player();
let game = new Game(6, player);

const movementMap = {
    "a": -1,
    "d": 1
}

game.toString();

document.addEventListener("keypress", (event) => {
    if (event.key == "a" || event.key == "d") {
        console.log(event.key);
        player.move(movementMap[event.key]);
    }
});

const fps = 1000 / 2;

let animate = setInterval(() => {
    game.cleanup();
    game.turn();
    game.spawnBlocks();
    game.toString();
}, fps);