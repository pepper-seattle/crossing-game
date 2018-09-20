// Enemies our player must avoid
let Enemy = function() {
    // //properties
    //     // x and y coordinates
    //     this.x = x;
    //     this.y = y;
    //     // The image/sprite for our enemies
    //     this.sprite = 'images/enemy-bug.png';
    // //methods
    //     //update position
    //     this.updatePos: function() {
    //         console.log('updated enemy position!')
    //     }
    //         //collision check
    //     //render
    //         //draw enemies on current x and y
    //     //reset
    //         //set x and y to starting x and y
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Hero Class
class Hero {
    constructor() {
        //initializing coordinates
        this.x = 200;
        this.y = 400;
        // player image
        this.sprite = 'images/char-horn-girl.png';
    }

    handleInput(input) {
        switch(input) {
            case 'left':
                this.x -= 100;
                break;
            case 'right': 
                this.x += 100;
                break;
            case 'up':
                this.y -= 85;
                break;
            case 'down':
                this.y += 85;
                break;
        }
    }
    //collision check
    collisionCheck() {
        //boundaries check
        if(this.x === 100){
            reset();
        } else {
            this.updatePos();
        }
    }
        // //check for win
        // this.winCheck: function(){
        //     //if player won then reset and do a thing to say they won
        //     console.log('YOU WON!')
        //     reset();
        // }        
        //render
    render() {
        //draw player on current x and y
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
        // // keyboard input
        // this.keyInput: function() {
        //     //update player's x and y property according to input
        //     this.x = x;
        //     this.y = y;
        // }
            
        //reset
            //set x and y to starting x and y
}

//New hero object
let player = new Hero();
//Init allEnemies array
//For each enemy create and push new enemy object into array above



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
