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
let img; // Declare variable 'img'.
let c;


function setup() {
  createCanvas(1300, 800);
  img = loadImage('assets/photobooth.png'); // Load the image

  webCamFeed = createCapture(VIDEO);
  webCamFeed.size(500,00);
  webCamFeed.position(450,475);
  webCamFeed.hide();

  Shutter = createButton('Take a Photo');
  Shutter.style('background-color', 'green')
  Shutter.position(450,475);
  Shutter.size(90,30);
  Shutter.mousePressed(takePhoto);

  button2 = createButton('Previous');
  button2.position(100,  600);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "40px 40px");

  buttonFXInvert = createButton('Invert');
  buttonFXInvert.position(300, 520);
  buttonFXInvert.size(85,30);
  buttonFXInvert.mousePressed(FXInvert);

  buttonFXPosterize = createButton('Posterize');
  buttonFXPosterize.position(405, 520);
  buttonFXPosterize.size(85,30);
  buttonFXPosterize.mousePressed(FXPosterize);

  buttonFXPorklife = createButton('Blur');
  buttonFXPorklife.position(510, 520);
  buttonFXPorklife.size(85,30);
  buttonFXPorklife.mousePressed(FXPorklife);

  var c = color(85);
  buttonReset = createButton('Reset');
  buttonReset.position(625, 520);
  buttonReset.size(85,30);
  buttonReset.style('background-color', c);
  c = color(255);
  buttonReset.style('color', c);
  buttonReset.mousePressed(reset);

  sliderExp = createSlider(-50, 50, 0, 5);
  sliderExp.position(300, 570);
  sliderExp.style("color", "black");
  sliderExp.size(400, 30);

}


function draw() {
  background(255);
  image(img, 0, 0, 1300, 800);
  image(webCamFeed, 230, 135, 550, 480);
  // title();

  if (FXInvertState == -1){
    filter(INVERT);
    fill(0);
  }
  if (FXPosterizeState == -1){
    filter(POSTERIZE, 3);
    fill(0);
  }
  if (FXPorklifeState == -1){
    filter(BLUR, 5);
    fill(0);
  }

  loadPixels();
  var pix;
  var expComp = sliderExp.value();
  for (var x=100; x <= 500; x++){
    for (var y=50; y <= 350; y++){
    	pix = get(x,y);
      pix = color(red(pix)+expComp, green(pix)+expComp, blue(pix)+expComp);
      set(x,y, pix);
    }
  }
  updatePixels();
}

function title(){
  stroke(255);
  strokeWeight(8);
  fill(0);
  textSize(22);
  text('Say Cheese', 250, 550);
}


function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page8.html';
}

function takePhoto(){
  saveFrames('selfie', 'png', 1, 1);
}

function FXInvert(){
  FXInvertState *= -1;
}

function FXPosterize(){
  FXPosterizeState *= -1;
}

function FXPorklife(){
  FXPorklifeState *= -1;
}

function reset(){
  FXInvertState = 1;
	FXPosterizeState = 1;
	FXPorklifeState = 1;
}
