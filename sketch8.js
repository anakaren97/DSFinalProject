let r, g, b;
let mic, fft;
let input;
let analyzer;
let rc, gc, bc;
let img;
let circle_x, circle_y, circle_size_x, circle_size_y;
let threshold;
let widthofCanvas;

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

  threshold = 0.1;

  button1 = createButton('Next');
  button1.position(1200,  630);
  button1.mousePressed(page9);
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
  // title();

  ///TO BE COMMENTED OUT/////
  // fill(255, 0, 0);
  // noStroke();
  // ellipse(circle_x, circle_y, circle_size_x, circle_size_y);
  /////////////////////////////////////////////////////////////////

  /////TO BE COMMENTED FOR BUS/////
  image(img, circle_x, circle_y, circle_size_x, circle_size_y);
//////////////////////////////////////////////////////////////////////

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  print('value: ' + rms);
  print('circle_x Value: ' + circle_x);

  fill(r, g, b, 0);
  stroke(255, 0, 0);
  strokeWeight(20);

  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
   point(i*10, map(spectrum[i]* 2, 0, 255, height, 0));
  endShape();
  }
    if (rms < threshold){
    circle_x += 8;
  }

  if(circle_x > windowWidth){
    window.location='page9.html';
  }

}

// function title(){
//   fill(0);
//   rect(30, 50, 650, 170)
//   stroke(255);
//   strokeWeight(8);
//   fill(0);
//   textSize(34);
//   text('Speak Up...', 50, 100);
//   textSize(18);
//   text('Talk as loud as you can to make it through this last stretch on you journey', 50, 150);
// }


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
