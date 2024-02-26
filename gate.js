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
  
  this.collision = function(){
    //check if we hit the left of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x <= this.x + this.w && p.x >= this.x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x + p.w >= this.x && p.x <= this.x + this.w) {
      p.x -= 5
    }


    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y <= this.y + this.h && p.y >= this.y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y + p.h >= this.y && p.y <= this.y + this.h) {
      p.y -= 5;
    }


  }//end collision
}//end Gate
