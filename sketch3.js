let button;
let camera;
function setup() {
  createCanvas(1400, 800);
  background(color(random(255),random(255),random(255)));

  button1 = createButton('Next');
  button1.position(1100,  600);
  button1.mousePressed(page4);
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

}

function draw() {

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
