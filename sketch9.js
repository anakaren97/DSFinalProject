
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
var FXPorklifeState = 1;
saveCount = 0;
let img;

function setup() {
  createCanvas(1500,900);
  webCamFeed = createCapture(VIDEO);
  webCamFeed.size(650,545);
  webCamFeed.position(257,102);
  webCamFeed.hide();
  img = loadImage('video/photobooth.jpeg'); // Load the image

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
  background(255);
  image(img, 0, -50, 1500, 900);
	image(webCamFeed, 257, 102, 650, 545);

}


function takePhoto(){
save("selfie.png");
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}
