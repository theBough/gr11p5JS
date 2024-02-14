let p;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200, 10,10,"#780000");
}

function draw() {
  background("#003049");
  p.display();
}
