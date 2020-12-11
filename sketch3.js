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

}

function draw() {

    //FOR IMAGE BECAUSE DOES NOT LOAD IF NOT HOSTED
    image(img, circle_x, circle_y, circle_size_x, circle_size_y);

    // TEST OBJECT
    // ellipse(circle_x, circle_y, circle_size_x, circle_size_y);


    if(keyIsDown(UP_ARROW)){
    circle_y -= 3;

    circle_x += random(-15, 15);
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
