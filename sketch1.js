const objects = [];
let eyeZ;
let vid;
let vidline;
let van;

function preload() {
  // Load model with normalise parameter set to true
  van = loadModel('assets/VolksvagenVan.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(20, 20);
  cam.hide();
  //video for stars
  button1 = createButton('Next');
  button1.position(1200,  630);
  button1.mousePressed(page3);
  button1.style("color", "white");
  button1.style("background-color", "black");
  button1.style("padding", "20px 40px");

  button2 = createButton('Back');
  button2.position(80,  630);
  button2.mousePressed(previous);
  button2.style("color", "white");
  button2.style("background-color", "black");
  button2.style("padding", "20px 40px");

  backbutton = createButton('Restart');
  backbutton.position(1200,  60);
  backbutton.mousePressed(goBack);
  backbutton.style("color", "white");
  backbutton.style("background-color", "black");
  backbutton.style("padding", "20px 40px");

 vid = createVideo(['video/star.mp4']);
 vidline = createVideo(['video/line.mp4']);
 vid.elt.muted = true;
 vidline.elt.muted = true;
 vid.loop();
 vid.hide();
 vidline.loop();
 vidline.hide();

  eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // Left wall
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // Right wall
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // Bottom wall
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // Top wall
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // Back wall

  noStroke();
  ambientMaterial(250);



}

function draw() {
  background(0);
  orbitControl();

  // Lights
  pointLight(255, 255, 255, 0, 0, 400);
  ambientLight(244, 122, 158);


  // Left wall
  push();
  texture(vid);
  translate(-100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(width, height);
  pop();

  // Right wall
  push();
  texture(vid);
  translate(100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(width, height);
  pop();

  // Bottom wall
  push();
  translate(0, 100, 200);
  emissiveMaterial(50,23,77);
  rotateX((90 * PI) / 180);
  plane(width, height);
  pop();

  // Top wall
  push();
  texture(vid);
  translate(0, -100, 200);
  rotateX((90 * PI) / 180);
  plane(width, height);
  pop();

 push();
 texture(vidline);
  plane(200, 200); // Back wall
  pop();




  //van
  push();
  translate(0,0,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  normalMaterial();
  model(van);
  pop();
  //van top
  push();
  translate(0,180,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  ambientMaterial(250);
  model(van);
  pop();
  //van bottom
  push();
  translate(0,-180,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  ambientMaterial(192,77,249);
  model(van);
  pop();
  //van left
  push();
  translate(-190,0,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  ambientMaterial(130, 230, 0);
  model(van);
  pop();
  // Cursor
  push();
  translate(mouseX - width / 2, mouseY - height / 2);
  texture(cam);
  sphere(20);
  pop();
}

}

function page3() {
  window.location='page3.html';
}

function goBack() {
  window.location='index.html';
}

function previous() {
  window.location='index.html';
}
