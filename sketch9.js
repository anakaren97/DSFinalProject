
var webCamFeed;
var webCamImage;
var Shutter;
var buttonFXInvert;
var buttonFXPosterize;
var buttonFXPorklife;
var buttonReset;
var sliderExp;
var vScale = 15;
var FXPorklifeState = 1;
saveCount = 0;
let img;
var filter;
var vScale = 15;
let fillColorR = 0;
let fillColorG = 50;
let fillColorB = 100;
let shape = 10;
var vScale = 16;



function setup() {
  createCanvas(1500,900);
  pixelDensity(1);
  webCamFeed = createCapture(VIDEO);
  webCamFeed.size(650 / vScale, 545 / vScale);
  webCamFeed.position(257,102);
  webCamFeed.hide();
  r = random(255);
  g = random(255);
  b = random(255);

  img = loadImage('video/photobooth_2.jpeg'); // Load the image

    Shutter = createButton('Take a Photo');
    Shutter.style('background-color', 'purple');
    Shutter.position(500,450);
    Shutter.size(90,40);
    Shutter.mousePressed(takePhoto);

}

function draw() {
  background(0);
  image(img, 0, -50, 1500, 900);
	image(webCamFeed, 257, 102, 650, 545);

  webCamFeed.loadPixels();
  translate(windowWidth/5.25, windowHeight/7);
  for (var y = 0; y < webCamFeed.height; y++) {
    for (var x = 0; x < webCamFeed.width; x++) {
      var index = (webCamFeed.width - x + 1 + (y * webCamFeed.width)) * 4;
      var r = webCamFeed.pixels[index + 0];
      var g = webCamFeed.pixels[index + 1];
      var b = webCamFeed.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      var r = map(bright, 0, random(0,255), 0, vScale);
      noStroke();
      fill(209, 94, 203);
      rectMode(CENTER);
      rect(x *16, y * 16,shape,w, shape);
    }
  }
}


function takePhoto(){
save("selfie.png");
}
