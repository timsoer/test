/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
var x, y;

function setup() {
  //createCanvas(720, 400);
  //pixelDensity(1);
  createCanvas(displayWidth -150 , displayHeight -150);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(0);
  
  // Draw a circle
  stroke(50);
  fill(246, 206, 220);
  ellipse(x, y, 42, 42);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}


