let r, g, b;
let mic, fft;
let input;
let analyzer;
let rc, gc, bc;
let img;
let circle_x, circle_y, circle_size_x, circle_size_y;
let dots_x, dots_y, dots_size_x, dots_size_y;
let widthofCanvas;
let timer = 30;


function setup() {
  widthofCanvas = 1800;
  createCanvas(widthofCanvas, 900);
  img = loadImage('video/bus.png'); // Load the image
  r = random(255);
  g = random(255);
  b = random(255);

  circle_x = 100;
  circle_y = height/2;
  circle_size_x = 150;
  circle_size_y = 100;

  dots_x = 2;
  dots_y = 10;
  dots_size_x = 20;
  dots_size_y = 20;


  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  // Patch the input to an volume analyzer
  analyzer.setInput(mic);
  //for mic
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

}

function draw() {
  background(0);

  ///TO BE COMMENTED OUT/////
  // fill(255, 0, 0);
  // noStroke();
  // ellipse(circle_x, circle_y, circle_size_x, circle_size_y);
  /////////////////////////////////////////////////////////////////

  /////TO BE COMMENTED FOR BUS/////
  image(img, circle_x, circle_y, circle_size_x, circle_size_y);
  //////////////////////////////////////////////////////////////////////

  circle_x += 1;


  ///// Page Timer //////
  if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      window.location='page9.html';
    }


  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  let spectrum = fft.analyze();

  fill(240, 41, 213);
  noStroke();

  for (i = 0; i < spectrum.length; i++) {
    ellipse(i * 10, map(spectrum[i], 0, 255, height, 0), dots_size_x, dots_size_y);

  }

  var d = dist(dots_x, dots_y, circle_x, circle_y);
  if (d >= 500) {
    circle_x += 4;
  }
  if (d >= 900) {
    circle_x += 6;
  }

  print('dist: ' + d); //10
  // print('circle_y :' + circle_y); //450

  if(circle_x > windowWidth){
    window.location='page9.html';
  }

}



function page9() {
  // let val = color(random(255),random(255),random(255));
  window.location='page9.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page7.html';
}
