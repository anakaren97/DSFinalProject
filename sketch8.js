var capture;
var video;


function setup() {
  createCanvas(1465, 800);
  video = createCapture(VIDEO);
  video.position(0,0);
  video.size(1000, 700);

  background(50);

  button2 = createButton('Previous');
  button2.position(100,  400);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "40px 40px");

}

function draw() {
     video.show();
         filter('THRESHOLD');
    image(video,0,0);


}

function mousePressed(){

  save('myCanvas.png');
  return false;
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page6.html';
}
