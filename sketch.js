let p, k, g,g2,myFont,m;
let backColour = "#003049";
let activeX, activeY;
let w = [];

function setup() {
  createCanvas(300, 300);
  fillRooms();
  p = new Player(150, 150, 10, 10, "#FFFFFF");
  k = new Key(100, 200, 10, 10, rooms[0][0]);
  g = new Gate(175, 0, 10, height, "#FFFFFF", rooms[0][0]);
  g2 = new Gate(175, 0, 10, height, "black", rooms[1][0]);
  m = new Mob(200, 200, 20, 20, "niners.png", rooms[1][0],0.2,0.2);
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
  mobStuff();
  rooms[activeY][activeX].call();
}
function mobStuff(){
  m.display();
  m.update();
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
  
  g2.display();
  g2.collision();
  // the gate called 'g' will be opened by the key 'k'
  g2.keyCollision(k);
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
