let button;
let bg;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //  cam = createCapture(VIDEO);
  //  cam.size(20, 20);
  //  vid = createVideo(['video/glitch.mp4']);
  //  vid.elt.muted = true;
  //  vid.loop();

  //bg = loadImage('https://i.ytimg.com/vi/41vuqCTd2-U/maxresdefault.jpg');

  button1 = createButton('Start');

  button1.position(width/6, height/8);
  button1.mousePressed(page2);
  button1.style("color", "white");
  button1.style("background-color", "transparent");
  button1.style("padding", "40px 40px");


}

function draw(){
  fill(0,250,0);
rect(100,100,100,100);


//  angle += 0.02;
//  noStroke();
  //botton 4
//  push();
//  translate(100, height/2);
//  texture(vid);
//  pop();


}

function page2() {
  window.location='page1.html';
}
