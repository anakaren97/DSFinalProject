
let mic, fft;
let input;
let analyzer;
var video;

var vScale = 15;
let back = 51;
let fillColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.position(width/2, 0);
  video.size(width / vScale, height / vScale);
  // Create an Audio input
  input = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  input.start();
  fft = new p5.FFT();
  fft.setInput(input);
}

function draw() {
  background(back);

  let rms = analyzer.getLevel();

  stroke(random(200,255),fillColor,fillColor);
  strokeWeight(5);

  let spectrum = fft.analyze();
    beginShape();
      for (i = 0; i < spectrum.length; i++) {
        line(i * 10, map(spectrum[i] * 2, 0, 10, -height/8, 0), width/2, height/2);
    }
    endShape();


  video.loadPixels();
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
      rect(x * vScale, y * vScale, random(20,40),w, random(20,30));
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
