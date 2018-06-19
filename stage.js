class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "".concat(this.x).concat(this.y);
    }
}

class Game {
    constructor(length, player) {
        this.length = length;
        this.stage = [];
        let startingPoint = Math.floor(length / 2);

        for (let i = 0; i < length; i++) {
            this.stage.push(new Array(length));
        }

        this.stage[length - 1][startingPoint] = player;
        player.position = new Vector(startingPoint, length - 1);
    }

    toString() {
        let str = "";

        for (let i = 0; i < this.stage.length; i++) {
            for (let j = 0; j < this.stage[i].length; j++) {
                if (this.stage[i][j] == null) {
                    str += "&nbsp";
                } else if (this.stage[i][j] == player) {
                    str += player.key;
                } else {
                    str += this.stage[i][j].key;
                }
            }
            str += "<br>";
        }
        document.getElementById("canvas").innerHTML = str;
    }

    spawnBlock() {
        let spawnPosition;
        spawnPosition = Math.floor(Math.random() * this.stage[0].length);
        let block = new Block;
        block.position = new Vector(spawnPosition, 0);
        this.stage[0][spawnPosition] = block;
    }

    turn() {
        let block;

        for (let i = this.stage.length - 1; i >= 0; i--) {
            for (let j = 0; j < this.stage[i].length; j++) {
                if (this.stage[i][j] instanceof Block && this.stage[i][j].hasMoved == false) {
                    block = this.stage[i][j];
                    block.fall();
                }
            }
        }

        // Refresh block.hasMoved from true back to false
        for (let i = 0; i < this.stage.length; i++) {
            for (let j = 0; j < this.stage[i].length; j++) {
                if (this.stage[i][j] instanceof Block && this.stage[i][j].hasMoved == true) {
                    block = this.stage[i][j];
                    this.hitConfirm(block, player);
                    block.hasMoved = false;
                }
            }
        }
    }

    hitConfirm(entity1, entity2) {
        if (entity1.position.toString() == entity2.position.toString()) {
            console.log("DEAD!");
            document.getElementById("message").innerText = "DEAD";
            clearInterval(animate);
        }
    }

    cleanup() {
        for (let i = 0; i < this.stage.length; i++) {
            if (this.stage[this.stage.length - 1][i] instanceof Block) {
                this.stage[this.stage.length - 1][i] = null;
            }
        }
    }

    updateState(entity) {
        this.stage[entity.previousPosition.y][entity.previousPosition.x] = null;
        this.stage[entity.position.y][entity.position.x] = entity;
        //this.toString();
    }
}