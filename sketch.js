let p, k, g, myFont;
let backColour = "#003049";
let activeX, activeY;
let w = [];

function setup() {
  createCanvas(300, 300);
  fillRooms();
  p = new Player(150, 150, 10, 10, "#FFFFFF");
  k = new Key(100, 200, 10, 10);
  g = new Gate(175, 0, 10, height, "#FFFFFF", rooms[0][0]);
  activeX = 0;
  activeY = 0;
  myFont = loadFont("Anta.ttf")
}
function draw() {
  background(backColour);
  playerStuff();
  keyStuff();
  wallStuff();
  gateStuff();
  screenChange();
  textStuff();
  rooms[activeY][activeX].call();
}
function textStuff(){
  if(rooms[activeX][activeY] == roomZero){
    fill("black")
    textSize(10);
    textFont(myFont);
    text("CORBIN" , 20,20)
  }
}
function gateStuff() {
  g.display();
  g.collision();
  // the gate called 'g' will be opened by the key 'k'
  g.keyCollision(k);
}
function wallStuff() {
  for (i = 0; i < w.length; i++) {
    w[i].display();
  } //end loop
  checkForCollision();
}
function keyStuff() {
  k.display();
  k.keyCollision();
  k.update();
}
function playerStuff() {
  p.display();
  p.update();
}
function screenChange() {
  if (p.x > width) {
    //The play has crossed the right edge
    activeX += 1;
    p.x = 0;
  } //end if
  if (p.x < 0) {
    //The play has crossed the right edge
    activeX -= 1;
    p.x = width;
  } //end if
  if (p.y > height) {
    activeY += 1;
    p.y = 0;
  } //end if
  if (p.y < 0) {
    activeY -= 1;
    p.y = height;
  } //end if
} //end screenchange
