function Mob(x,y,w,h,img,r,xSpeed, ySpeed){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h; 
  this.r = r;
  this.img = loadImage(img)
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.show = true;
  
  this.display = function(){
   if(rooms[activeY][activeX] == this.r && this.show){
     this.img.resize(this.w, this.h);
     image(this.img, this.x, this.y);
   }
  }//end display
  
  this.update = function(){
    if(this.x > p.x){
      this.xSpeed *= -1;
    }else{
      this.xSpeed *= -1;
    }
     if(this.y> p.y){
      this.ySpeed *= -1;
    }else{
      this.ySpeed *= -1;
    }
    
  }//end update
}//end player
