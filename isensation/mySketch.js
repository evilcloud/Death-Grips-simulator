let capture;
let img;

function preload() {
  img = loadImage("DG@2x.png");
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
