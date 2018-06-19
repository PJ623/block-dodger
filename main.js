let game = new Game(15, new Player(), 1000 / 15, 0.1);
let message = document.getElementById("message");

game.play();

// Move elsewhere?
const movementMap = {
    "a": -1,
    "d": 1
}

document.addEventListener("keypress", (event) => {
    if (event.key == "a" || event.key == "d") {
        game.player.move(Number(movementMap[event.key]));
    }

    if (event.key == "r") {
        restart();
    }
});

function restart() {
    if (game.isDone) {
        message.innerText = "";
        console.log("Starting new game!");
        game = new Game(15, new Player(), 1000 / 15, 0.1);
        game.play();
    } else {
        console.log("Game is not yet done!");
    }
}

restart();