let button;
let video;
let input;
let analyzer;
let img;
let timer = 30;
var Shutter;
var vScale = 15;
let back = 21;
let fillColorR = 0;
let fillColorG = 50;
let fillColorB = 100;
let shape = 20;
var vScale = 16;
let camera;
let bgVideo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  Shutter = createButton('Take a Photo');
  Shutter.style('background-color', '#d15ecb', 'font-size', '12px')
  Shutter.position(windowWidth/2.15,650);
  Shutter.size(120,60);
  Shutter.mousePressed(takePhoto);
  bgVideo = loadImage('assets/backvan.png'); // Load the image

  r = random(255);
  g = random(255);
  b = random(255);

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

}

function draw() {
  background(0, 20);
  	image(video, windowWidth/2.55, windowHeight/3.1, 375 , 240 );
  fill(back, 0.1);

  rect(windowWidth/1.95, windowHeight/2.08, 370, 240 );

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
    back = 21;
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
  window.location='index.html';
}

function page6() {
  window.location='page6.html';
}

function previous() {
  window.location='page4.html';
}
