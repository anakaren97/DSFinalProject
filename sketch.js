let button;
let myFont;
var video;

function preload() {  myFont = loadFont('assets/hacked.ttf');}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background video
  video = createVideo("video/glitch.mp4");
 video.size(windowWidth, windowHeight);
 video.loop();
 video.position(0,0);
video.style("z-index", "-10");

//Welcome text
 fill(43,30,174);
 textFont(myFont);
 textSize(36);
text('Welcome', width/2.5, height/3);
 loadImage('assets/rect.png', img => {
   image(img, 100, 0);
 });
//start button
  button1 = createButton('Start');
  button1.position(width/2.5, height/1.2);
  button1.mousePressed(page2);
  button1.style("color", "white");
  button1.style("background-color", "transparent");
  button1.style("padding", "10px 30px");


}

function draw(){
background(0);

  let s = 'We can all agree this year has been a ride we all deserve a little break so why not join us on a trip that is out of this world with the Magic Van. Think of the Magic Van as a one stop gateway from the taxing day to day life of this global pandemic. When you are ready to start your journey you can press start below!';
  fill(195,159,192);
   textSize(26);
  text(s,width/3.5, height/2, 700,400);

}

function page2() {
  window.location='page1.html';
}
