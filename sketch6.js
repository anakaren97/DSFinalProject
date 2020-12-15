// var video;
let button;
var bubbles = [];

let camera;
// let song;
let r, g, b;
let mic, fft;
let input;
let analyzer;
let rc, gc, bc;
let value = 0;
let img;
let dingdong;
let timer = 30;
let onScreen = false;
let xSpeed = 10;
let ySpeed = 10;

function setup() {
  createCanvas(1500, 900);
  img = loadImage('video/bus.png'); // Load the image
  soundFormats('mp3', 'ogg');
  dingdong = loadSound('assets/sound_new.mp3');
  //audio
  // Create an Audio input
  input = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  input.start();
  fft = new p5.FFT();
  fft.setInput(input);


  r = random(255);
  g = random(255);
  b = random(255);
  circle_x = 200;
  circle_y = 200;

  for (var i = 0; i < 25; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(0);

  ///// Page Timer //////
  if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      window.location='page7.html';
    }


    for (var i = 0; i < bubbles.length; i++) {
       bubbles[i].update();
       bubbles[i].display();
       bubbles[i].display2();


       for (var j = 0; j < bubbles.length; j++) {
         if (i != j && bubbles[i].intersects(bubbles[j])) {
           bubbles[i].changeColor();
           ///TO BE UNCOMMENTED WHEN HOSTED//////
           masterVolume(0.03, [10])
           dingdong.play();
         }
       }

   }

  //TO BE UNCOMMENTED WHEN NOT HOSTED////
    // stroke(100);
    // fill(0, 255, 0);
    // ellipse(mouseX, mouseY, 40, 40);
  ////////////////////////////////////

  ///TO BE UNCOMMENTED WHEN HOSTED//////
    image(img, mouseX - 50, mouseY - 50, 150, 100);
  /////////////////////////////////////

}

function Bubble(tempX, tempY) {

  this.x = tempX;
  this.y = tempY;
  this.r = 15;
  this.col = color(255, 0);

  this.display = function() {
      stroke(255);
      fill(this.col, 100);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

  this.display2 = function() {
    let rms = analyzer.getLevel();
    let spectrum = fft.analyze();
    rc = random(255);
    gc = random(255);
    bc = random(100, 255);
    strokeWeight(6);
    stroke(255);
    ellipse(this.x, this.y, map(spectrum[this.r] * 2, 0, 255, width/10, 10), map(spectrum[this.r], 0, 255, height/50, 10));
}

  this.update = function() {

    this.x -= 1;
    // this.y -= 1;
    this.y = this.y + random(-5, 5);

    if (this.x < 0 || this.x > windowWidth) {
      xSpeed *= -1;
    }

    if (this.y < 0  || this.y > windowHeight) {
      ySpeed *= -1;
    }
    // this.x -= 9;
    // this.y = this.y + random(-5, 5);
    // if(this.x <= 0 || this.x >= windowWidth){
    //   // window.location='page7.html';
    // }
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.r + other.r) {
    return true;
    } else {
    return false;
    }
  }

  this.changeColor = function() {
      this.col = color(random(0, 255), random(0, 255), random(0, 255));
      //or just red //
      // this.col = color(255, 0, 0);
      this.update;
    }


}
