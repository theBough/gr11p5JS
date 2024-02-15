let p;

function setup() {
  createCanvas(300, 300);
  p = new Player(150,150, 10,10,"#780000");
}

function draw() {
  background("#003049");
  p.display();
  p.update();
  screenChange();
}

function screenChange(){
  if(p.x > width){
    //The play has crossed the right edge
    p.x=0
  }//end if
  
}//end screenchange




