function Player(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h; 
  this.col = col;
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h)
  }//end display
  
  this.update = function(){
    
    if(keyIsDown(37)){
      //left arrow pressed
      this.x -= 5
    }//end if
    
    if(keyIsDown(39)){
      //left arrow pressed
      this.x += 5
    }//end if
    if(keyIsDown(38)){
      this.y -= 5
    }//end if
     if(keyIsDown(40)){
      this.y += 5
    }//end if
    
  }//end update
}//end player
