// Death Grips simulator: Inanimate Sensation
//
// A supplemental artefact for the paper:
// "Cool media as the way to reclaim music from audiovisual hegemony"
// from 2020-06-12
// https://github.com/evilcloud/Death-Grips-simulator
//
// Original video:
// https://www.youtube.com/watch?v=r5GCn1BKkxg

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

  // iScale = 0.35;
  capture = createCapture(VIDEO);
  capture.size(width * 0.45, height * 0.43);

  capture.hide();

  background(0);
  bg = image(img, 0, 0, width, height);
}

function draw() {
  translate(1, height / 1.8);
  rotate((7 * PI) / 3.97);

  image(capture, width / 7, height / 3);

  capture.loadPixels();
}
