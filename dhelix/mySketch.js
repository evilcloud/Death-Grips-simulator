// Death Grips simulator: Double Helix
//
// A supplemental artefact for the paper:
// "Cool media as the way to reclaim music from audiovisual hegemony"
// from 2020-06-12
// https://github.com/evilcloud/Death-Grips-simulator
//
// Original video:
// https://www.youtube.com/watch?v=tWzJhkrZm5Y

let capture;
let img;

function preload() {
  img = loadImage("bkframe.jpg");
}

function setup() {
  if (windowWidth > windowHeight * (img.width / img.height)) {
    height = windowHeight;
    width = windowHeight * (img.width / img.height);
  } else {
    width = windowWidth;
    height = windowWidth * (img.height / img.width);
  }

  createCanvas(width, height);

  capture = createCapture(VIDEO);
  capture.size(width * 0.3, height * 0.3);
  capture.hide();

  background(0);

  bg = image(img, 0, 0, width, height);

  // Text on the screen properties
  fill(100, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(4);
  textSize(height / 35);
}

function draw() {
  translate(width / 2.9, height / 2.55);
  image(capture, 0, 0);

  text("Check surroundings for safety", width / 15, height / 3.5);

  capture.loadPixels();
}
