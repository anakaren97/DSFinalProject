let angle = 0;
var theta = 0; // must be 0
var offset = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(20, 20);

  button1 = createButton('Next');
  button1.position(1100,  600);
  button1.mousePressed(page8);
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
  background(0);
  let locX = mouseX - height / 2;
let locY = mouseY - width / 2;


pointLight(250, 250, 200, locX, locY, 10);
   //pointLight(255, 255, 255, 50*cos(theta), 0, 150);


  noStroke();

//gases from planet
 push();
  specularMaterial(100);
    texture(cam);
    translate(-100, -200, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(20);
  pop();
  push();
  specularMaterial(100);
    texture(cam);
    translate(-150, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(50);
  pop();
  push();
 specularMaterial(100);
   texture(cam);
     translate(200, -200, 0);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   sphere(20);
   pop();
   push();
    specularMaterial(100);
      texture(cam);
     translate(random(100,102), -300, 0);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   sphere(30);
   pop();
   push();
      specularMaterial(100);
      texture(cam);
      translate(-300, -200, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(20);
    pop();
    push();
    specularMaterial(100);
    texture(cam);
      translate(450, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(50);
    pop();
    push();
    specularMaterial(100);
    texture(cam);
     translate(600, -200, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-600, 40, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(40);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-700, 60, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-750, 160, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(730, 160, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(40);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(700, 100, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(30);
     pop();
     push();
      translate(500, 40, 0);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     specularMaterial(100);
     texture(cam);
     sphere(10);
     pop();




//planet
  push();

  stroke(100);
  specularMaterial(250);
  texture(cam);
  translate(0, height, 0);
  rotateZ(0.01);
  rotateX (0.05);
  rotateY(frameCount * 0.01);
  sphere(width/2);
  pop();


}

function page8() {
  // let val = color(random(255),random(255),random(255));
  window.location='page8.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page6.html';
}
