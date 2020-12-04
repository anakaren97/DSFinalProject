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

  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  const Q = createVector(0, 0, eyeZ); // A point on the ray and the default position of the camera.
  const v = createVector(x, y, -eyeZ); // The direction vector of the ray.

  let intersect; // The point of intersection between the ray and a plane.
  let closestLambda = eyeZ * 10; // The draw distance.

  for (let x = 0; x < objects.length; x += 1) {
    let object = objects[x];
    let lambda = object.getLambda(Q, v); // The value of lambda where the ray intersects the object

    if (lambda < closestLambda && lambda > 0) {
      // Find the position of the intersection of the ray and the object.
      intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      closestLambda = lambda;
    }
  }

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
  translate(0,160,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  emissiveMaterial(77,249,192);
  model(van);
  pop();
  //van bottom
  push();
  translate(0,-160,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  emissiveMaterial(192,77,249);
  model(van);
  pop();
  //van left
  push();
  translate(-160,0,100);
  //fill(237, 34, 93);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.6);
  emissiveMaterial(130, 230, 0);
  model(van);
  pop();
  // Cursor
  push();
  translate(intersect);
  fill(237, 34, 93);
  sphere(10);
  pop();
}

// Class for a plane that extends to infinity.
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); // The normal vector of the plane
    this.point = createVector(p1, p2, p3); // A point on the plane
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
  }
}

function page3() {
  window.location='page3.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}
