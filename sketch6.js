// var video;
let button;
var bubbles = [];

let camera;
let song;
let r, g, b;
let mic, fft;
let input;
let analyzer;
let rc, gc, bc;
let value = 0;
let circle_x, circle_y;


function setup() {
  createCanvas(1465, 800);
  backbutton = createButton('Home');
  backbutton.position(400,  500);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  r = random(255);
  g = random(255);
  b = random(255);
  circle_x = 200;
  circle_y = 200;
  //camera
  // pixelDensity(1);
  // video = createCapture(VIDEO);
  // video.size(width / vScale, height / vScale);

  for (var i = 0; i < 50; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

  button1 = createButton('Next');
  button1.position(1000,  400);
  button1.mousePressed(page7);
  button1.style("color", "white");
  button1.style("background-color", "black");
  button1.style("padding", "40px 40px");

  button2 = createButton('Previous');
  button2.position(100,  500);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "40px 40px");

  //audio
  // Create an Audio input
  input = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  input.start();
  fft = new p5.FFT();
  fft.setInput(input);

  background(0);

}

function draw() {
  background(0);
  // video.loadPixels();
  let rms = analyzer.getLevel();
  let spectrum = fft.analyze();

 // Get the overall volume (between 0 and 1.0)
 let threshold = 0.01;
 let volume = input.getLevel();

//   if (volume > threshold) {
//   // clear();
//   stroke(20);
//   fill(255, 0, 0);
//   // rect(random(40, width), random(height), volume * 500, volume * 500);
//   rect(width/2, height/2, 200, 200);
//
// }

stroke(100);
fill(255);
circle(circle_x, circle_y, 40, 40);
circle_x = circle_x + (mouseX - circle_x)/10;
circle_y = circle_y + (mouseY - circle_y)/10;

  for (i = 0; i < spectrum.length; i++) {
    rc = random(255);
    gc = random(255);
    bc = random(100, 255);
    strokeWeight(10);
    stroke(rc, g, bc);
    point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));

    }

  for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].update();
      bubbles[i].display();
      bubbles[i].display2();
      for (var j = 0; j < bubbles.length; j++) {
        // to eliminate the loop detecting a circle
        //detecting 'itself'...

        if (i != j && bubbles[i].intersects(bubbles[j])) {
                bubbles[i].changeColor();
                bubbles[j].changeColor();
          }

      }
    }

    // for (var k = 0; k < bubbles.length; k++) {
    //   bubbles[k].update();
    //   bubbles[k].display2();
    //   }
    title();

}

function Bubble(tempX, tempY) {

  this.x = tempX;
  this.y = tempY;
  this.r = 15;
  this.col = color(255, 0);

  this.display = function() {
    rc = random(255);
    gc = random(255);
    bc = random(100, 255);
    strokeWeight(10);
    stroke(0, 255, 0);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.display2 = function() {
    // background(color(random(255),random(255),random(255)));
    let rms = analyzer.getLevel();
    let spectrum = fft.analyze();
    rc = random(255);
    gc = random(255);
    bc = random(100, 255);
    strokeWeight(5);
    stroke(r, g, b);
    // fill(this.col, 100);
    ellipse(this.x, this.y, map(spectrum[this.r], 255, 0, width/10, 20), map(spectrum[this.r] * 4, 255, 0, height/30, 20));

    // for (i = 0; i < spectrum.length; i++) {
    //     point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));
    // }
  }

  this.update = function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);

  }

  this.update2 = function() {
    this.x = this.x + random(-100, 100);
    this.y = this.y + random(-100, 100);

  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
    return true;
    } else {
    return false;
    }
  }

    this.changeColor = function() {
      // stroke(2);
      // this.r = 2;
      // noFill();
      // this.update2();
      this.col = color(r, g, b, 0);
      strokeWeight(0);
      stroke(value);
      // noStroke();
    }

}

function title(){
  
  stroke(255);
  strokeWeight(8);
  fill(0);
  textSize(52);
  text('Shh...', 50, 300);
  textSize(24);
  text('Navigate through the sleeping aliens to enter the next realm', 50, 350);
  textSize(24);
  text('Do not make a sound to make sure not to wake them', 50, 400);
}

function page7() {
  // let val = color(random(255),random(255),random(255));
  window.location='page8.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page5.html';
}
// function page7() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='page7.html';
// }
