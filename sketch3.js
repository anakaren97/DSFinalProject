let button;
let camera;
function setup() {
  createCanvas(1465, 800);
  background(color(random(255),random(255),random(255)));
  backbutton = createButton('Home');
  // button2 = createButton('Click for Camera');

  button1 = createButton('Next');
  button1.position(1000,  400);
  button1.mousePressed(page4);
  button1.style("color", "white");
  button1.style("background-color", "black");
  button1.style("padding", "40px 40px");

  button2 = createButton('Previous');
  button2.position(100,  400);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "40px 40px");

  // button2.position(400,  height/4);
  // button2.mousePressed(draw);
  // button2.style("color", "white");
  // button2.style("background-color", "green");
  // button2.style("padding", "100px 100px");

  backbutton.position(400,  500);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

  // start video capture
 camera = createCapture(VIDEO);
 // set size of capture frame
 camera.size(width/2, height/2);
 // hide the original HTML video object
 camera.hide();
}

function draw() {
  image(camera, 0, 0);
  // imageMirrored(camera, 0, 0);
}

function imageMirrored(img, x, y) {
  push();
  scale(-1, 1);
  image(img, -img.width, 0, img.width, img.height);
  pop();
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function page4() {
  // let val = color(random(255),random(255),random(255));
  window.location='page4.html';
}
function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page1.html';
}
