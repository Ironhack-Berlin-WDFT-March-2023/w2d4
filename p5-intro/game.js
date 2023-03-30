// The Game class holds all the objects that the game needs
class Game {
	constructor() {
		this.player = new Player()
	}

	preload() {
		this.player.image = loadImage("./gustavo.png")
	}

	// Draw all objects
	draw() {
		clear()
		this.player.draw()
	}
}

// The Player class holds all the properties and methods of the player
class Player {
	constructor() {
		this.x = 500
		this.y = 500
		this.width = 100
		this.height = 100
		this.image
	}

	draw() {
		image(this.image, this.x, this.y, this.width, this.height)

		// (2) We can also use keyIsDown(keyCode) to move the player
		if (keyIsDown(LEFT_ARROW)) {
			if (this.x > 0) this.moveLeft()
		}

		if (keyIsDown(RIGHT_ARROW)) {
			if (this.x < width - this.width) this.moveRight()
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.y > 0) this.moveUp()
		}

		if (keyIsDown(DOWN_ARROW)) {
			if (this.y < height - this.height) this.moveDown()
		}
	}

	moveRight() {
		this.x += 10
	}

	moveLeft() {
		this.x -= 10
	}

	moveUp() {
		this.y -= 10
	}

	moveDown() {
		this.y += 10
	}
}

// Create the game
const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)
}

function draw() {
	game.draw()
}

// (1) Move the player
function keyPressed() {
	if (keyCode === 39) {
		game.player.moveRight()
	}

	if (keyCode === 37) {
		game.player.moveLeft()
	}

	if (keyCode === 38) {
		game.player.moveUp()
	}

	if (keyCode === 40) {
		game.player.moveDown()
	}
}
