let timer = new Timer([document.getElementById("timer"), document.getElementById("best-time")]);
let game = new Game(15, new Player(), 1000 / 15, 0.3, document.getElementById("canvas"), document.getElementById("message"));

game.play();

function restart() {
    if (game.isDone) {
        message.innerText = "";
        game.play();
    } else {
        console.log("Game is not yet done!");
    }
}

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