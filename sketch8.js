var capture;
var video;


function setup() {
  createCanvas(320,240);
  video = createCapture(VIDEO);
video.position(0,0);
  video.size(320, 240);

  background(50);
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
