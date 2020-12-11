let angle = 0;
var theta = 0; // must be 0
var offset = 0.01;
let timer = 30;

function setup() {
  createCanvas(1500, 900, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(20, 20);

}

function draw() {
  background(0);
    orbitControl();
  let locX = mouseX - height / 2;
let locY = mouseY - width / 2;

textAlign(CENTER, CENTER);
textSize(50);
fill(255, 23, 220);
text(timer, width/2, 700);

///// Page Timer
if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    window.location='page8.html';
  }
pointLight(250, 250, 200, locX, locY, 10);
   //pointLight(255, 255, 255, 50*cos(theta), 0, 150);


  noStroke();

//gases from planet
 push();
  specularMaterial(100);
    texture(cam);
    translate(-100, -200, 100);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(20);
  pop();
  push();
  specularMaterial(100);
    texture(cam);
    translate(-150, -100, -200);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(50);
  pop();
  push();
 specularMaterial(100);
   texture(cam);
     translate(200, -200, 50);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   sphere(20);
   pop();
   push();
    specularMaterial(100);
      texture(cam);
     translate(random(100,102), -300, 200);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   sphere(30);
   pop();
   push();
      specularMaterial(100);
      texture(cam);
      translate(-300, -200, 100);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(20);
    pop();
    push();
    specularMaterial(100);
    texture(cam);
      translate(450, -100, -80);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(50);
    pop();
    push();
    specularMaterial(100);
    texture(cam);
     translate(600, -200, -150);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-600, 40, -90);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(40);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-700, 60, 400);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(-750, 160, 90);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(20);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(730, 160, -200);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(40);
     pop();
     push();
     specularMaterial(100);
     texture(cam);
     translate(700, 100, 190);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     sphere(30);
     pop();
     push();
      translate(500, 40, 400);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     specularMaterial(100);
     texture(cam);
     sphere(10);
     pop();
     push();
      translate(500, 40, -400);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     specularMaterial(100);
     texture(cam);
     sphere(10);
     pop();
     push();
      translate(500, 40, -200);
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
