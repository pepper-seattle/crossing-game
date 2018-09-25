//Pick up modal for use below
const modal = document.querySelector(".win-modal");

//Enemy creation function
const Enemy = function(startY, speed) {
    //x values start at -103
    this.startX = -103;
    //y values top to bottom: 60, 145, 225
    this.startY = startY;

    //coordinates
    this.x = this.startX;
    this.y = this.startY;

    //step value for enemy movement
    this.step = 103;

    //speed of each enemy
    this.speed = speed;

    //enemy boundary value for right edge of board
    this.boundary = this.step * 5;

    //enemy image sprite
    this.sprite = 'images/enemy-bug.png';
};

//Update enemy position
Enemy.prototype.update = function(dt) {
    // while enemy is on gameboard have them move at a speed of 175 * the time delta
    if(this.x < this.boundary){
        //move enemy right
        this.x += this.speed * dt;
    } else {
        //reset to starting position
        this.x = this.startX;
    }
};

//Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Hero Class
class Hero {
    constructor() {
        //initializing coordinates and starting location
        this.startY = 390;
        this.startX = 205;
        this.x = this.startX;
        this.y = this.startY;
        //movement values
        this.step = 101;
        this.upAndDown = 83;
        // player image
        this.sprite = 'images/char-horn-girl.png';
    }

    handleInput(input) {
        switch(input) {
            case 'left':
                if(this.x > 3) {
                   this.x -= this.step;
                }
                break;
            case 'right': 
                if(this.x < this.step * 4) {
                this.x += this.step;
                }
                break;
            case 'up':
                if(this.y > -25){
                    this.y -= this.upAndDown;
                }
                break;
            case 'down':
                if(this.y < this.startY){
                    this.y += this.upAndDown;
                }
                break;
        }
    }

    //player render method
    render() {
        //draw player on current x and y
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //player update method - includes collision and win checks, reset function
    update() {
        //collision check
        for(let enemy of allEnemies){
            if(this.y === enemy.y && (enemy.x + enemy.step - 20 > this.x && enemy.x < this.x + this.step - 20)) {
                this.reset();
            }
        }
        //check for win
        if(this.y < 58) {
            modal.style.visibility = 'visible';
        }
    }
    //resets player to bottom center of gameboard
    reset() {
        this.y = this.startY;
        this.x = this.startX;
    }
}

//New hero object
const player = new Hero();

//Enemy Objects with starting y coordinate and custom speeds
const bug1 = new Enemy(58, 200);
const bug2 = new Enemy(58, 125);
const bug3 = new Enemy(141, 155);
const bug4 = new Enemy(141, 75);
const bug5 = new Enemy(224, 100);
const bug6 = new Enemy(224, 80);

//For each enemy create and push new enemy object into array above
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4, bug5, bug6);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//function tied to the win modal button to play again
const playAgain = () => {
    modal.style.visibility = 'hidden';
    player.reset();
};