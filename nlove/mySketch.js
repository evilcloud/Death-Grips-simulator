// Death Grips simulator: Double Helix
//
// A supplemental artefact for the paper:
// "Cool media as the way to reclaim music from audiovisual hegemony"
// from 2020-06-12
// https://github.com/evilcloud/Death-Grips-simulator
//
// Original video:
// https://www.youtube.com/watch?v=2MHhLDCJ57E
//
// TODO: freeze frame on the large text for a second
// TODO: fix enumeration (twentytenth)
// DONE: how the fuck do I do the string interpolation in JS?!
// FIX: maybe learn some JS...

let capture;
var offset = 0;
var totalCount = 1;

function preload() {
  bigF = loadFont("jcandlestick.ttf");
}

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);

  capture = createCapture(VIDEO);
  // capture.size(width, height);
  capture.hide();

  background(0);

  fill("#FEFE8A");
}

function draw() {
  offset = offset + 100;
  if (offset > windowWidth * 2) {
    offset = 0;
    totalCount++;
    if (totalCount == 100) {
      totalCount = 1;
    }
  }

  filter(POSTERIZE, 2);
  tint(255, 0, 0, 255);
  image(capture, -100, 0, width, height);

  tint(0, 153, 100, 110);
  image(capture, 0, 0, width + 100, height);
  capture.loadPixels();
  if (totalCount % 3 == 0) {
    largeText();
  }
  runningText(offset, totalCount % 2 == 0);
}

function runningText(offset, even) {
  textFont("Arial");
  textSize(windowHeight / 20);
  if (even == true) {
    var give = "did not give";
  } else {
    var give = "gave";
  }
  var txt =
    "on the " + stringifyNumber(totalCount) + " day i " + give + " a fuck";
  text(txt, windowWidth - offset, windowHeight - windowHeight / 50);
}

function largeText() {
  textFont(bigF);
  textSize(windowHeight / 5);
  text("1000%!! I\nUSED TO GIVE\nA FUCK", windowWidth / 100, windowHeight / 5);
}

function stringifyNumber(n) {
  // lazy, so I've got this from here:
  // https://stackoverflow.com/a/20426113/12102652
  var special = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
  ];
  var deca = [
    "twent",
    "thirt",
    "fort",
    "fift",
    "sixt",
    "sevent",
    "eight",
    "ninet",
  ];

  if (n < 20) return special[n];
  if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + "ieth";
  return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
}
