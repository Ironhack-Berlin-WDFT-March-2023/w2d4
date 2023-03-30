// (2) preload() preloads all assets (images, sound, ...)
// If we want to show an image in P5, we first have to preload the image
function preload() {
    console.log("preload")
    
	playerImage = loadImage("./gustavo.png")
}

// setup() gets called after preload() and before draw()
// It is used to setup the html canvas
function setup() {
    console.log("setup")
    
	createCanvas(1000, 600)
}

let x = 200
let y = 200
let direction = 2

(2)
let playerImage
let playerX = 200
let playerY = 200

// This is the main draw function
// It gets called all the time by p5
function draw() {
	console.log("draw")

	// Draw a rectangle
	// Arguments: x, y, width, height
	fill("blue")
	stroke(color(0, 0, 255))
	rect(x, y, 100, 100)
    
	// Draw a line
	// Arguments: startX, startY, endX, endY
	line(0, 300, 1000, 300)

	// Clear the canvas 
	clear()

	// Draw a circle
	// Arguments: x, y, size
	circle(x, y, 100)

	// Move the circle horizontally
	x += direction
	if (x > 1000 - 50 || x <= 50) {
	// console.log("hits the wall")
	// Change direction
		direction = -direction
	}

	// p5 provides you with different values like mouse coordinates or the frame count
	// console.log(mouseX)
	// console.log(mouseY)
	// console.log(frameCount)

	clear()
	fill("red")
	stroke("red")
	circle(mouseX, mouseY, 100)


	// We can also use random() to create random values
	strokeWeight(0)

	if (frameCount % 20 === 0) {
		fill(random(255), random(255), random(255))
		circle(random(width), random(height), random(400))
	}


	// Challenge: Draw this blue pattern with p5
	stroke("black")
	fill(0, 51, 255)
	rect(0, 0, 1000, 600)

	fill(0, 102, 255)
	rect(200, 120, 1000, 600)

	fill(0, 153, 255)
	rect(400, 240, 1000, 600)

	fill(0, 204, 255)
	rect(600, 360, 1000, 600)

	fill(0, 255, 255)
	rect(800, 480, 1000, 600)


	// (2) Render an image
	// Arguments: img, x, y, width, height
	clear()
	image(playerImage, playerX, playerY, 100, 100)
}

// (2) This function is called when a key is pressed
// Move the player
function keyPressed() {
	// p5 gives you the keyCode
	console.log(keyCode)

	if (keyCode === 39) {
		playerX += 10
	}

    if (keyCode === 37) {
        playerX -= 10
    }
}
