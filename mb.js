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
    if(this.x < p.x){
      this.x += this.xSpeed;
    }else{
      this.x -= this.xSpeed;
    }
     if(this.y < p.y){
      this.y += this.ySpeed;
    }else{
      this.y -= this.ySpeed;
    }
   
  }//end update
}//end player
