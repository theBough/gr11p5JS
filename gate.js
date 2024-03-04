function Gate(x, y, w, h, col, room) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.room = room;
  this.locked = true;

  this.display = function () {
    if (rooms[activeY][activeX] === this.room && this.locked) {
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
    } //end if
  }; //end display

  this.collision = function () {
    if (rooms[activeY][activeX] == this.room && this.locked) {
      //check if we hit the left of any wall
      if (
        p.y <= this.y + this.h &&
        p.y + p.h >= this.y &&
        p.x <= this.x + this.w &&
        p.x >= this.x
      ) {
        p.x += 5;
      }
      //check if we hit the right of any wall
      if (
        p.y <= this.y + this.h &&
        p.y + p.h >= this.y &&
        p.x + p.w >= this.x &&
        p.x <= this.x + this.w
      ) {
        p.x -= 5;
      }
      if (
        p.x <= this.x + this.w &&
        p.x + p.w >= this.x &&
        p.y <= this.y + this.h &&
        p.y >= this.y
      ) {
        p.y += 5;
      }
      //check if we hit the top of any wall
      if (
        p.x <= this.x + this.w &&
        p.x + p.w >= this.x &&
        p.y + p.h >= this.y &&
        p.y <= this.y + this.h
      ) {
        p.y -= 5;
      }
    }
  }; //end collision
  this.keyCollision = function (thisKey) {
    if (rooms[activeY][activeX] == this.room) {
      //check if we hit the left of any wall
      if (
        thisKey.y <= this.y + this.h &&
        thisKey.y + thisKey.h >= this.y &&
        thisKey.x <= this.x + this.w &&
        thisKey.x >= this.x
      ) {
       this.locked =false;
        thisKey.show =false
      }
      //check if we hit the right of any wall
      if (
        thisKey.y <= this.y + this.h &&
        thisKey.y + thisKey.h >= this.y &&
        thisKey.x + thisKey.w >= this.x &&
        thisKey.x <= this.x + this.w
      ) {
        this.locked =false;
         k.show =false
      }
      if (
        thisKey.x <= this.x + this.w &&
        thisKey.x + thisKey.w >= this.x &&
        thisKey.y <= this.y + this.h &&
        thisKey.y >= this.y
      ) {
        this.locked =false;
         thisKey.show =false
      }
      //check if we hit the top of any wall
      if (
        thisKey.x <= this.x + this.w &&
        thisKey.x + thisKey.w >= this.x &&
        thisKey.y + thisKey.h >= this.y &&
        thisKey.y <= this.y + this.h
      ) {
        this.locked =false;
        thisKey.show =false
      }
    }
  }; //end collision
} //end Gate
