var p5Canvas;

function setup() {
  p5Canvas = createCanvas(100, 100);
  frameRate(20);
  background(random(255), random(255), random(255));
  p5Canvas.parent('myContainer');

  //p5Canvas.position(windowWidth/2, windowHeight/2);

}

function draw() {
  var pink = color(random(255), random(255), random(255));
  loadPixels();
  var d = pixelDensity();
  var wholeImage = random(4) * (width * d) * (height * d);
  for (var i = 0; i < wholeImage; i += 4) {
    pixels[i] = red(pink);
    pixels[i + 1] = green(pink);
    pixels[i + 2] = blue(pink);
    pixels[i + 3] = alpha(pink);
  }
  updatePixels();
}
