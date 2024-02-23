let p,k;
let backColour = "#003049"
let activeX, activeY;
let w =[]

function setup() {
  createCanvas(300, 300);
  fillRooms();
  p = new Player(150,150, 10,10,"#FFFFFF");
  k = new Key(200,200,50,50);
  activeX = 0;
  activeY = 0;
  
 
}
function draw() {
  background(backColour);
  p.display();
  p.update();
  k.display();
  k.keyCollision();
  k.update()
  for(i=0 ; i < w.length ; i++){
    w[i].display() 
  }//end loop
  checkForCollision();
  screenChange();
  rooms[activeY][activeX].call();
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
    activeY += 1
    p.y=0
  }//end if
   if(p.y < 0){
   activeY -= 1
    p.y=height
  }//end if
  
}//end screenchange




