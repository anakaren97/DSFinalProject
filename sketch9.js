
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
let shape = 20;
var vScale = 16;



function setup() {
  createCanvas(1500,900);
  pixelDensity(1);
  webCamFeed = createCapture(VIDEO);
  // webCamFeed.size(650, 545);
  webCamFeed.size(650 / vScale, 545 / vScale);
  webCamFeed.position(257,102);
  webCamFeed.hide();
  r = random(255);
  g = random(255);
  b = random(255);
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

    citebutton = createButton('Citation');
    citebutton.position(100,  60);
    citebutton.mousePressed(cite);
    citebutton.style("color", "white");
    citebutton.style("background-color", "black");
    citebutton.style("padding", "20px 40px");

}

function draw() {
  background(255);
  image(img, 0, -50, 1500, 900);
	image(webCamFeed, 257, 102, 650, 545);

  webCamFeed.loadPixels();
  translate(windowWidth/5, windowHeight/7);
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
      fill(153, 109, 199);
      rectMode(CENTER);
      rect(x *16, y * 16,shape,w, shape);
    }
  }
}


function takePhoto(){
save("selfie.png");
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}
function cite() {
  // let val = color(random(255),random(255),random(255));
  window.location='citation.html';
}
