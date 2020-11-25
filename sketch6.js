var video;
var drops = [];
let button;

var vScale = 26;
let camera;
let song;
let r, g, b;
let mic, fft;
let input;
let analyzer;
let rc, gc, bc;


function setup() {
  createCanvas(1300, 700);
  backbutton = createButton('Back');
  backbutton.position(400,  500);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  r = random(255);
  g = random(255);
  b = random(255);


  //camera
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

   for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }

  button1 = createButton('Next');
  button1.position(1000,  400);
  button1.mousePressed(page7);
  button1.style("color", "white");
  button1.style("background-color", "transparent");
  button1.style("padding", "40px 40px");

  //audio
  // Create an Audio input
  input = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  input.start();
  fft = new p5.FFT();
  fft.setInput(input);



}

function draw() {
  background(0);
  video.loadPixels();
  let rms = analyzer.getLevel();
  let spectrum = fft.analyze();


 // Get the overall volume (between 0 and 1.0)
  let volume = input.getLevel();
  let threshold = 0.05;

  if (volume > threshold) {
  clear();
  background(0);

  for (var z = 0; z < video.height; z++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (z * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(r, g, b);
      rectMode(CENTER);
      rect(x * vScale, z * vScale, w, w);
      }
    }

    stroke(255, 255, 0);
    strokeWeight(25);
    beginShape();
      for (i = 0; i < spectrum.length; i++) {
        point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));
    }
    endShape();
  } else {
    for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    }
    strokeWeight(25);
    stroke(255, 255, 0);
    beginShape();
      for (i = 0; i < spectrum.length; i++) {
        point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));
      }
    endShape();

    loadPixels();
    for (var z = 0; z < video.height; z++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (z * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(rc, g, bc);
      rectMode(CENTER);
      rect(x * vScale, z * vScale, w, w);
      }
    }
  }

}

function Drop() {

  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);


  this.fall = function () {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }


  this.show = function () {
    var thick = map(this.z, 0, 20, 1, 3);
    rc = random(255);
    gc = random(255);
    bc = random(100, 255);
    strokeWeight(10);
    stroke(rc, gc, bc);
    line(this.x, this.y, this.x, this.y + this.len);
    // this.x--;
    // this.y++;
  }
}

function page7() {
  // let val = color(random(255),random(255),random(255));
  window.location='page8.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

// function page7() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='page7.html';
// }
