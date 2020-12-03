let button;
var video;
let mic, fft;
let input;
let analyzer;
let img;

var vScale = 15;
let back = 51;
let fillColor = 0;
var vScale = 16;
let camera;

function preload() {
  img = loadImage('assets/backvan.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(255);
  g = random(255);
  b = random(255);

  button1 = createButton('Next');
  button1.position(1100,  600);
  button1.mousePressed(page6);
  button1.style("color", "white");
  button1.style("background-color", "black");
  button1.style("padding", "40px 40px");

  button2 = createButton('Back');
  button2.position(100,  600);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "40px 40px");

  backbutton = createButton('Home');
  backbutton.position(630,  625);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  //camera
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(500 / vScale, 400 / vScale);
  video.position(width/4, 100);
    // Create an Audio input
    input = new p5.AudioIn();
    analyzer = new p5.Amplitude();
    input.start();
    fft = new p5.FFT();
    fft.setInput(input);

    //van image
     image(img, width/3.5, 200);

}

function draw() {
background(back);
  fill(back);
  rect(10,10, 40,40);

  let rms = analyzer.getLevel();

  stroke(223,255,fillColor);
  strokeWeight(5);

  let spectrum = fft.analyze();
    beginShape();
      for (i = 0; i < spectrum.length; i++) {
        line(i * 10, map(spectrum[i] * 2, 0, 10, -height/8, 0), width/2, height/2);
    }
    endShape();


  video.loadPixels();
  translate(width/3, 230);
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
