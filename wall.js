function Wall(x,y,w,h,col){
  this.x =x
  this.y = y
  this.w = w
  this.h = h
  this.col = col
  
  this.display = function(){
    fill(this.col);
    noStroke()
    rect(this.x , this.y, this.w, this.h);
  }//end Display
  
}//end Wall
