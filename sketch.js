let img;
let x = 720;
let y = 380;
let xspeed = 4;
let yspeed = 4;

let r1 = 150;
let r2 = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('video/bus.png'); // Load the image

}


function draw() {
  background(0);
  image(img, x, y, r1, r2);
  x += xspeed;
  y += yspeed;
  if (x > windowWidth - r1 || x < r1) {
    xspeed = -xspeed;
  }
  if (y > windowHeight - r1 || y < r1) {
    yspeed = -yspeed;
  }
}
