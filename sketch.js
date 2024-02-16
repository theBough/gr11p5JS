let p;
let backColour = "#003049"
let activeX, activeY;


function setup() {
  createCanvas(300, 300);
  p = new Player(150,150, 10,10,"#780000");
  activeX = 0;
  fillRooms();
}

function draw() {
  background(backColour);
  p.display();
  p.update();
  screenChange();
  rooms[activeX].call();
}

function screenChange(){
  if(p.x > width){
    //The play has crossed the right edge
   activeX += 1
    p.x=0
  }//end if
   if(p.x < 0){
    //The play has crossed the right edge
   activeX -= 1;
    p.x=width
  }//end if
  if(p.y > height){
    //The play has crossed the right edge
    backColour = "yellow"
    p.y=0
  }//end if
   if(p.y < 0){
    //The play has crossed the right edge
    backColour = "#003049"
    p.y=height
  }//end if
  
}//end screenchange




