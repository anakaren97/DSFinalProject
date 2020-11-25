let button;
var video;

var vScale = 16;
let camera;
function setup() {
  createCanvas(1465, 800);

  background(color(random(255),random(255),random(255)));
  backbutton = createButton('BACK');
  button2 = createButton('Click for Filter');

  r = random(255);
  g = random(255);
  b = random(255);

  button2.position(400,  height/4);
  button2.mousePressed(draw);
  button2.style("color", "white");
  button2.style("background-color", "purple");
  button2.style("padding", "100px 100px");

  backbutton.position(400,  500);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  //camera
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw(){
  background(0);
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
      fill(r, g, b);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}
