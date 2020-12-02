let button;
let myFont;

function preload() {  myFont = loadFont('assets/hacked.ttf');}

function setup() {
  createCanvas(windowWidth, windowHeight);

//Welcome text
 fill(43,30,174);
 textFont(myFont);
 textSize(36);
text('Welcome', width/2.5, height/3);
 loadImage('assets/rect.png', img => {
   image(img, width/4, height/6);
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


  let s = 'We can all agree this year has been a ride we all deserve a little break so why not join us on a trip that is out of this world with the Magic Van. Think of the Magic Van as a one stop gateway from the taxing day to day life of this global pandemic. When you are ready to start your journey you can press start below!';
  fill(195,159,192);
   textSize(26);
  text(s,width/3.5, height/2, 700,400);

}

function page2() {
  window.location='page1.html';
}
