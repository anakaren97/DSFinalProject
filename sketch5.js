let button;
var video;
let mic, fft;
let input;
let analyzer;
let img;
let timer = 30;

var vScale = 15;
let back = 51;
let fillColor = 0;
var vScale = 16;
let camera;

//function preload() {
 //img = loadImage('assets/backvan.png');
//}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(color(random(255),random(255),random(255)));

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
  video.position(width/4, 100);
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
  rect(width/1.85, 345, 330,240);

  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 23, 220);
  text(timer, 800, 700);

  ///// Page Timer
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      window.location='page6.html';
    }

//  let rms = analyzer.getLevel();

//  stroke(223,255,fillColor);
//  strokeWeight(5);

// let spectrum = fft.analyze();
  // beginShape();
  //  for (i = 0; i < spectrum.length; i++) {
    //   line(i , map(spectrum[i] , 0, 2, -100, 0), width/2, height/2);  }
  //  endShape();


  video.loadPixels();
  translate(width/2.4, 230);
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(fillColor,50,250);
      rectMode(CENTER);

      rect(x *16, y * 16,random(20,30),w, random(20,30));

    }
  }


}
function mousePressed() {
  if (fillColor === 0 && back == 51) {
    fillColor = random(0,255);
    back = random(100,255);
  } else {
    fillColor =  0;
    back = 51;
  }
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
