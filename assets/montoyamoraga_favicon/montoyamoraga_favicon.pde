//montoya-moraga favicon
//favicon for my personal website
//by aaron montoya-moraga
//january 2017
// v0.0.1

void setup() {
  
  //square canvas
  size(500, 500);
  
  //white background
  background(255);
 
  //do horizontal lines of random colors
  //to cover the whole canvas
  for (int i = 0; i < 500; i++) {
     stroke(random(255), random(255), random(255));
     line(0, i, 499, i);
  } 
}

void draw() {
  
}

//if the mouse is clicked, save the frame
void mouseClicked() {
  saveFrame("favicon.png");
}