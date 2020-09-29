/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
var x, y;

function setup() {
  //createCanvas(720, 400);
  //pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  // Starts in the middle
  //y = height;
  //x = width / 2;
  //windowResized()
  //x = randow(windowWidth/2) ;
  //y = windowHeight;
  x = randow(windowWidth-12
  y = 100;
  
}

function draw() {
  background(0);
  
  // Draw a circle
  stroke(50);
  //fill(66, 26, 30);
  fill(22);
  ellipse(x, y, 42, 42);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-3, 3);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}


