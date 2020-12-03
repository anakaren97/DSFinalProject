let button;
let circle_x, circle_y, circle_size_x, circle_size_y;
let img;
let vid;

function setup() {
  createCanvas(1500, 900);
  img = loadImage('video/bus.png'); // Load the image

  r = random(255);
  g = random(255);
  b = random(255);
  circle_x = 750;
  circle_y = 700;
  circle_size_x = 150;
  circle_size_y = 100;

  button1 = createButton('Next');
  button1.position(1200,  630);
  button1.mousePressed(page4);
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

  // vid = createVideo('video/Page3_new.mp4');
  // vid.elt.muted = true;
  // vid.loop();
  // vid.position(0, 0);
  // vid.size(1600, 900);
}

function draw() {
  background(255, 255, 0, 2);
    // title();

    // noStroke();
    // fill(255);

    //FOR IMAGE BECAUSE DOES NOT LOAD IF NOT HOSTED
    // image(img, circle_x, circle_y, circle_size_x, circle_size_y);

    // TEST OBJECT
    ellipse(circle_x, circle_y, circle_size_x, circle_size_y);
    // circle_x = circle_x + (mouseX - circle_x)/3;
    // circle_y = circle_y + (mouseY - circle_y)/3;

    if(mouseIsPressed){
    circle_y -= 9;
    // circle_x += 9;
    circle_size_x -= 1;
    circle_size_y -= 3;

      if(circle_y < 0){
        window.location='page4.html';
      }
    }
  }

// function title(){
//   stroke(255, 0, 0);
//   fill(0);
//   rect(30, 50, 600, 150)
//   stroke(255);
//   strokeWeight(8);
//   fill(0);
//   textSize(34);
//   text('Travel with the bus to the next realm', 50, 100);
//   textSize(24);
//   text('Hold an press the mouse to start moving', 50, 150);
//
// }

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
