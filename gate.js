function Gate(x,y,w,h,col,room){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.room = room;
  this.locked = true;
  
  this.display = function(){
    if(rooms[activeY][activeX] === this.room && this.locked){
      fill(this.col)
      rect(this.x, this.y, this.w, this.h)
    } //end if
  }//end display
}//end Gate
