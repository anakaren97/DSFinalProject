
// Finds eyes from webcam and draws a representation of them on
// the canvas, with random colors for the irises. Click on the
// canvas to save an image; press a key to clear the canvas.

// Starting point: https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm

let capture = null;
let tracker = null;
let positions = null;
let w = 0, h = 0;
let timer = 30;

function setup() {
  img = loadImage('video/bus.png'); // Load the image



  w = 1500;
  h = 900;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  frameRate(30);
  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  circle_x = 100;
  circle_y =  mouseY;
  circle_size_x = 150;
  circle_size_y = 100;
  button1 = createButton('Next');
  button1.position(1200,  630);
  button1.mousePressed(page5);
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

}

function draw() {
  background(0);

  ///TO BE UNCOMMENTED WHEN HOSTED//////
  image(img, mouseX - 50, mouseY - 50, circle_size_x, circle_size_y);
  // noCursor();

  // TEST OBJECT- Comment out when hosted /////
  // noStroke();
  fill(255);
  // ellipse(mouseX, mouseY, circle_size_x, circle_size_y);
  // noCursor();
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 23, 220);
  text(timer, width/2, 700);

  ///// Page Timer
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      window.location='page5.html';
    }
  // Flip the canvas so that we get a mirror image
	translate(w, 0);
  scale(-1.0, 1.0);
  // Uncomment the line below to see the webcam image (and no trail)
  //image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();

  if (positions.length > 0) {

    // Eye points from clmtrackr:
    // https://www.auduno.com/clmtrackr/docs/reference.html
    const eye1 = {
      outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26)
    };
    const eye2 = {
      outline: [28, 67, 29, 68, 30, 69, 31, 70].map(getPoint),
      center: getPoint(32),
      top: getPoint(29),
      bottom: getPoint(31)
    }

    const irisColor = color(random(360), 80, 80, 0.4);
    drawEye(eye1, irisColor);
		drawEye(eye2, irisColor);
  }
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function drawEye(eye, irisColor) {
  noFill();
  stroke(255, 0.4);
  drawEyeOutline(eye);

  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius * 2;
  noStroke();
  fill(irisColor);
  ellipse(eye.center.x, eye.center.y, irisSize, irisSize);

  const pupilSize = irisSize / 3;
  fill(0, 0.6);
  ellipse(eye.center.x, eye.center.y, pupilSize, pupilSize);
}

function drawEyeOutline(eye) {
	beginShape();
  const firstPoint = eye.outline[0];
  eye.outline.forEach((p, i) => {
    curveVertex(p.x, p.y);
    if (i === 0) {
      // Duplicate the initial point (see curveVertex documentation)
      curveVertex(firstPoint.x, firstPoint.y);
    }
    if (i === eye.outline.length - 1) {
      // Close the curve and duplicate the closing point
      curveVertex(firstPoint.x, firstPoint.y);
      curveVertex(firstPoint.x, firstPoint.y);
    }
  });
  endShape();
}

function keyPressed() {
  // Clear background
  background(0, 20);
}

function timestampString() {
  return year() + nf(month(), 2) + nf(day(), 2) + "-" + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  background(0);
}

function page5() {
  // let val = color(random(255),random(255),random(255));
  window.location='page5.html';
}

function goBack() {
  // let val = color(random(255),random(255),random(255));
  window.location='index.html';
}

function previous() {
  // let val = color(random(255),random(255),random(255));
  window.location='page3.html';
}




























// // Finds eyes from webcam and draws a representation of them on
// // the canvas, with random colors for the irises. Click on the
// // canvas to save an image; press a key to clear the canvas.
//
// // Starting point: https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm 🙏
//
// let capture = null;
// let tracker = null;
// let positions = null;
// let w = 0, h = 0;
// let playing = false;
// let fingers;
// let button;
// let vid;
// let img;
// let circle_x, circle_y, circle_size_x, circle_size_y;
//
//
// function setup() {
//   img = loadImage('video/bus.png'); // Load the image
//   // vid = createVideo('video/Page4_new.mov');
//
//   w = windowWidth;
//   h = windowHeight;
//   capture = createCapture(VIDEO);
//   createCanvas(w, h);
//   capture.size(w, h);
//   capture.hide();
//   circle_x = 100;
//   circle_y = windowHeight - 100;
//   circle_size_x = 150;
//   circle_size_y = 100;
//   button1 = createButton('Next');
//   button1.position(1200,  630);
//   button1.mousePressed(page5);
//   button1.style("color", "white");
//   button1.style("background-color", "black");
//   button1.style("padding", "20px 40px");
//
//   button2 = createButton('Back');
//   button2.position(80,  630);
//   button2.mousePressed(previous);
//   button2.style("color", "white");
//   button2.style("background-color", "black");
//   button2.style("padding", "20px 40px");
//
//   backbutton = createButton('Restart');
//   backbutton.position(1200,  60);
//   backbutton.mousePressed(goBack);
//   backbutton.style("color", "white");
//   backbutton.style("background-color", "black");
//   backbutton.style("padding", "20px 40px");
//
//   frameRate(10);
//   colorMode(HSB);
//
//   tracker = new clm.tracker();
//   tracker.init();
//   tracker.start(capture.elt);
//   background(0, 30);
//
// }
//
// function draw() {
//   background(0, 30);
//
//   // vid.play();
//   // vid.position(0, 0);
//   // vid.size(windowWidth, windowHeight);
//   // title();
//
//   ///TO BE UNCOMMENTED WHEN HOSTED//////
//   // image(img, mouseX - 50, mouseY - 50, circle_size_x, circle_size_y);
//   // noCursor();
//
//   // TEST OBJECT- Comment out when hosted /////
//   noStroke();
//   fill(255);
//   ellipse(mouseX, mouseY, circle_size_x, circle_size_y);
//
//   // Flip the canvas so that we get a mirror image
//   strokeWeight(4);
// 	translate(w, 0);
//   scale(-1.0, 1.0);
//   // Uncomment the line below to see the webcam image (and no trail)
//   // image(capture, 0, 0, w, h);
//   positions = tracker.getCurrentPosition();
//
//   if (positions.length > 0) {
//
//     // Eye points from clmtrackr:
//     // https://www.auduno.com/clmtrackr/docs/reference.html
//     const eye1 = {
//       outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
//       center: getPoint(27),
//       top: getPoint(24),
//       bottom: getPoint(26)
//     };
//     const eye2 = {
//       outline: [28, 67, 29, 68, 30, 69, 31, 70].map(getPoint),
//       center: getPoint(32),
//       top: getPoint(29),
//       bottom: getPoint(31)
//     }
//
//     const irisColor = color(random(360), 80, 80, 0.4);
//     drawEye(eye1, irisColor);
// 		drawEye(eye2, irisColor);
//   }
//
// }
//
// // function title(){
// //   fill(255);
// //   rect(30, 50, 600, 170)
// //   stroke(255);
// //   strokeWeight(8);
// //   fill(0);
// //   textSize(34);
// //   text('Look Around...', 50, 100);
// //   textSize(18);
// //   text('Navigate the maze with your eyes and move the bus with the mouse', 50, 150);
// //   textSize(18);
// //   text('....Be careful and try not to get lost', 50, 175);
// // }
//
// function getPoint(index) {
//   return createVector(positions[index][0], positions[index][1]);
// }
//
// function drawEye(eye, irisColor) {
//   noFill();
//   stroke(255, 0.4);
//   drawEyeOutline(eye);
//
//   const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
//   const irisSize = irisRadius * 2;
//   noStroke();
//   fill(irisColor);
//   ellipse(eye.center.x, eye.center.y, irisSize, irisSize);
//
//   const pupilSize = irisSize / 3;
//   fill(0, 0.6);
//   ellipse(eye.center.x, eye.center.y, pupilSize, pupilSize);
// }
//
// function drawEyeOutline(eye) {
// 	beginShape();
//   const firstPoint = eye.outline[0];
//   eye.outline.forEach((p, i) => {
//     curveVertex(p.x, p.y);
//     if (i === 0) {
//       // Duplicate the initial point (see curveVertex documentation)
//       curveVertex(firstPoint.x, firstPoint.y);
//     }
//     if (i === eye.outline.length - 1) {
//       // Close the curve and duplicate the closing point
//       curveVertex(firstPoint.x, firstPoint.y);
//       curveVertex(firstPoint.x, firstPoint.y);
//     }
//   });
//   endShape();
// }
//
// function keyPressed() {
//   // Clear background
//   background(255, 255, 0);
//
// }
//
// function timestampString() {
//   return year() + nf(month(), 2) + nf(day(), 2) + "-" + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
// }
//
// function windowResized() {
//   w = windowWidth;
//   h = windowHeight;
//   resizeCanvas(w, h);
//   background(0, 255, 0);
// }
//
// function page5() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='page5.html';
// }
//
// function goBack() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='index.html';
// }
//
// function previous() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='page3.html';
// }
