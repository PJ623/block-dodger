class Entity {
    constructor() {
        this.position;
        this.previousPosition;
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.key = "O";
        this.life = 3;
    }

    move(direction) {
        let previousPosition = this.position;
        let newPosition = new Vector(this.position.x + direction, this.position.y);
    
        if (newPosition.x > -1 && newPosition.x < game.length) {
            this.previousPosition = previousPosition;
            this.position = newPosition;
            game.updateState(this);
        }
    }
}

class Block extends Entity {
    constructor() {
        super();
        this.key = "&#9608;";
        this.hasMoved = false;
        this.hasLanded = false; // 
    }

    fall() {
        let previousPosition = this.position;
        let newPosition = new Vector(this.position.x, this.position.y + 1);

        if(newPosition.y > -1 && newPosition.y < game.length){
            this.previousPosition = previousPosition;
            this.position = newPosition;
            this.hasMoved = true;
            game.updateState(this);
        }
    }
}