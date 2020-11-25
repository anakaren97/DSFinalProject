let button;

var vScale = 16;
let camera;
let r, g, b;
let mic, fft;
let input;
let analyzer;

function setup() {
  createCanvas(1465, 800);
  background(color(random(255),random(255),random(255)));
  backbutton = createButton('BACK');
  button2 = createButton('Click for Audio Visualizer');

  button1 = createButton('Next');
  button1.position(1000,  400);
  button1.mousePressed(page5);
  button1.style("color", "white");
  button1.style("background-color", "transparent");
  button1.style("padding", "40px 40px");

  button2.position(400,  height/4);
  button2.mousePressed(draw);
  button2.style("color", "white");
  button2.style("background-color", "blue");
  button2.style("padding", "100px 100px");

  backbutton.position(400,  500);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  //audio
// Create an Audio input
input = new p5.AudioIn();
analyzer = new p5.Amplitude();
input.start();
fft = new p5.FFT();
fft.setInput(input);


}

function draw(){
  background(0);
  let rms = analyzer.getLevel();
  fill(201, 153, 204);
  stroke(201, 153, 204);
  strokeWeight(50);

  let spectrum = fft.analyze();
    beginShape();
      for (i = 0; i < spectrum.length; i++) {
        point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));
    }
    endShape();
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function page5() {
  // let val = color(random(255),random(255),random(255));
  window.location='page5.html';
}
