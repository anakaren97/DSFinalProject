let button;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background video

//start button
  button1 = createButton('Start');
  button1.position(width/2.5, height/1.1);
  button1.mousePressed(page2);
  button1.style("color", "white");
  button1.style("background-color", "transparent");
  button1.style("padding", "10px 30px");
  button1.style("z-index", "10");


}

function draw(){

}

function page2() {
  window.location='page1.html';
}
