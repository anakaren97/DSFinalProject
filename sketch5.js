let button;
var video;
let mic, fft;
let input;
let analyzer;
let img;
let timer = 30;
var Shutter;
var vScale = 15;
let back = 51;
let fillColorR = 0;
let fillColorG = 50;
let fillColorB = 100;
let shape = 20;
var vScale = 16;
let camera;
let bgVideo;

//function preload() {
 //img = loadImage('assets/backvan.png');
//}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(color(random(255),random(255),random(255)));
  Shutter = createButton('Take a Photo');
  Shutter.style('background-color', 'pink')
  Shutter.position(windowWidth/2.15,650);
  Shutter.size(90,40);
  Shutter.mousePressed(takePhoto);
  bgVideo = loadImage('assets/backvan.png'); // Load the image

  r = random(255);
  g = random(255);
  b = random(255);

  button1 = createButton('Next');
  button1.position(1200,  630);
  button1.mousePressed(page6);
  button1.style("color", "white");
  button1.style("background-color", "black");
  button1.style("padding", "20px 40px");

  button2 = createButton('Back');
  button2.position(80,  630);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "20px 40px");

  backbutton = createButton('Restart');
  backbutton.position(1200,  60);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  //camera
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(370 / vScale, 240 / vScale);
  video.position(width/7.5, 100);
  video.hide();
    // Create an Audio input
    input = new p5.AudioIn();
    analyzer = new p5.Amplitude();
    input.start();
    fft = new p5.FFT();
    fft.setInput(input);

    //van image
     //image(img, width/3, 200);
    // img.style("z-index", "5");

}

function draw() {
  background(255);
  fill(back);
  rect(windowWidth/1.85, windowHeight/2.08, 370, 240 );

  ///// Page Timer
  if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      window.location='page6.html';
    }



  video.loadPixels();
  translate(windowWidth/2.5, windowHeight/3);
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      var r = map(bright, 0, random(0,255), 0, vScale);
      noStroke();
      fill(fillColorR,fillColorG,fillColorB);
      rectMode(CENTER);

      rect(x *16, y * 16,shape,w, shape);

    }
  }
  image(bgVideo,-100, -50, 570, 500);



}
function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    shape = 20;
    fillColorR = 0;
    fillColorG = 50;
    fillColorB =  100;
    back = 51;
  } else {
    fillColorR = random(0,255);
    fillColorG = random(0,255);
    fillColorB = random(0,255);
    back = random(100,255);
    shape = random(0,30)
  }
}

function takePhoto(){
save("selfie.png");
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function page6() {
  // let val = color(random(255),random(255),random(255));
  window.location='page6.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page4.html';
}
