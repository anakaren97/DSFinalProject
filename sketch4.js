// Finds eyes from webcam and draws a representation of them on
// the canvas, with random colors for the irises. Click on the
// canvas to save an image; press a key to clear the canvas.

// Starting point: https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm 🙏

let capture = null;
let tracker = null;
let positions = null;
let w = 0, h = 0;
let playing = false;
let fingers;
let button;
let vid;

function setup() {
  w = windowWidth;
  h = windowHeight;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  button1 = createButton('Next');
  button1.position(1100,  600);
  button1.mousePressed(page5);
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

  frameRate(10);
  colorMode(HSB);

  // vid = createVideo(['video/Page4_new.mov']);
  // vid.elt.muted = true;
  // vid.loop();
  // vid.hide();

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function draw() {
  background(255, 255, 0);

  // fingers.loop();
  title();
  // Flip the canvas so that we get a mirror image
  strokeWeight(1);
	translate(w, 0);
  scale(-1.0, 1.0);
  // Uncomment the line below to see the webcam image (and no trail)
  // image(capture, 0, 0, w, h);
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

function title(){
  stroke(0);
  strokeWeight(8);
  fill(255);
  textSize(54);
  text('Look Around...', 50, 250);
  textSize(24);
  text('Navigate the maze with your eyes', 50, 350);
  textSize(24);
  text('Be careful and try not to get lost', 50, 400);
  textSize(14);
  text('Press a key to start drawing again', 50, 450);
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
  background(0, 255, 0);

}

function mouseClicked() {
  // const timestamp = timestampString();
  // saveCanvas("eyeTrail-" + timestamp, "png");
}

function timestampString() {
  return year() + nf(month(), 2) + nf(day(), 2) + "-" + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  background(0, 255, 0);
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


// let button;
//
// var vScale = 16;
// let camera;
// let r, g, b;
// let mic, fft;
// let input;
// let analyzer;
//
// function setup() {
//   createCanvas(1465, 800);
//   background(color(random(255),random(255),random(255)));
//   backbutton = createButton('BACK');
//   button2 = createButton('Click for Audio Visualizer');
//
//   button1 = createButton('Next');
//   button1.position(1000,  400);
//   button1.mousePressed(page5);
//   button1.style("color", "white");
//   button1.style("background-color", "transparent");
//   button1.style("padding", "40px 40px");
//
//   button2.position(400,  height/4);
//   button2.mousePressed(draw);
//   button2.style("color", "white");
//   button2.style("background-color", "blue");
//   button2.style("padding", "100px 100px");
//
//   backbutton.position(400,  500);
//   backbutton.mousePressed(goBack);
//   backbutton.style("color", "white");
//   backbutton.style("background-color", "black");
//   backbutton.style("padding", "20px 40px");
//
//   //audio
// // Create an Audio input
// input = new p5.AudioIn();
// analyzer = new p5.Amplitude();
// input.start();
// fft = new p5.FFT();
// fft.setInput(input);
//
//
// }
//
// function draw(){
//   background(0);
//   let rms = analyzer.getLevel();
//   fill(201, 153, 204);
//   stroke(201, 153, 204);
//   strokeWeight(50);
//
//   let spectrum = fft.analyze();
//     beginShape();
//       for (i = 0; i < spectrum.length; i++) {
//         point(i * 10, map(spectrum[i] * 2, 0, 255, height, 0));
//     }
//     endShape();
// }
//
// function goBack() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='index.html';
// }
//
// function page5() {
//   // let val = color(random(255),random(255),random(255));
//   window.location='page5.html';
// }
