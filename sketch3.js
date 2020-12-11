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

  // button1 = createButton('Next');
  // button1.position(1200,  630);
  // button1.mousePressed(page4);
  // button1.style("color", "white");
  // button1.style("background-color", "black");
  // button1.style("padding", "20px 40px");

  // button2 = createButton('Back');
  // button2.position(80,  630);
  // button2.mousePressed(previous);
  // button2.style("color", "white");
  // button2.style("background-color", "black");
  // button2.style("padding", "20px 40px");

  // backbutton = createButton('Restart');
  // backbutton.position(1200,  60);
  // backbutton.mousePressed(goBack);
  // backbutton.style("color", "white");
  // backbutton.style("background-color", "black");
  // backbutton.style("padding", "20px 40px");

}

function draw() {
  // background(255, 255, 0, 3);

    //FOR IMAGE BECAUSE DOES NOT LOAD IF NOT HOSTED
    image(img, circle_x, circle_y, circle_size_x, circle_size_y);

    // TEST OBJECT
    // ellipse(circle_x, circle_y, circle_size_x, circle_size_y);


    if(keyIsDown(UP_ARROW)){
    circle_y -= 1;

    circle_x += random(-75, 75);
    circle_y += random(-25, 25);
      if(circle_y < 0){
        window.location='page4.html';
      }
    }
  }

function goBack() {
  window.location='index.html';
}

function page4() {
  window.location='page4.html';
}
function previous() {
  window.location='page1.html';
}
