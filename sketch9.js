
var webCamFeed;
var webCamImage;
var Shutter;
var buttonFXInvert;
var buttonFXPosterize;
var buttonFXPorklife;
var buttonReset;
var sliderExp;
var FXInvertState = 1;
var FXPosterizeState = 1;
var vScale = 15;
var FXPorklifeState = 1;
saveCount = 0;
let img;
var filter;

function setup() {
  createCanvas(1500,900);
  pixelDensity(1);
  webCamFeed = createCapture(VIDEO);
  webCamFeed.size(650, 545);
  webCamFeed.position(257,102);
  webCamFeed.hide();

  // filter = createCapture(VIDEO);
  // filter.size(650 / vScale ,545 / vScale );
  // filter.position(vScale / 257 , 102 / vScale );
  // filter.hide();

  img = loadImage('video/photobooth_2.jpeg'); // Load the image

    Shutter = createButton('Take a Photo');
    Shutter.style('background-color', 'pink')
    Shutter.position(500,450);
    Shutter.size(90,40);
    Shutter.mousePressed(takePhoto);

    backbutton = createButton('Restart');
    backbutton.position(1290,  60);
    backbutton.mousePressed(goBack);
    backbutton.style("color", "white");
    backbutton.style("background-color", "black");
    backbutton.style("padding", "20px 40px");

}

function draw() {
  background(255;
  image(img, 0, -50, 1500, 900);
	image(webCamFeed, 257, 102, 650, 545);

  // filter.loadPixels();
  // for (var z = 0; z < filter.height; z++) {
  //  for (var x = 0; x < filter.width; x++) {
  //    var index = (filter.width - x + 1 + (z * filter.width)) * 4;
  //    var r = filter.pixels[index + 0];
  //    var g = filter.pixels[index + 1];
  //    var b = filter.pixels[index + 2];
  //    var bright = (r + g + b) / 3;
  //    var w = map(bright, 0, 255, 0, vScale);
  //    noStroke();
  //    fill(r, g, b);
  //    rectMode(CENTER);
  //    rect(x * vScale, z * vScale, w, w);
  //    }
  //  }

}


function takePhoto(){
save("selfie.png");
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}
