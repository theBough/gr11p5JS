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
    if (rooms[activeY][activeX] == this.room) {
      //check if we hit the left of any wall
      if (
        k.y <= this.y + this.h &&
        k.y + k.h >= this.y &&
        k.x <= this.x + this.w &&
        k.x >= this.x
      ) {
        k.x += 5;
      }
      //check if we hit the right of any wall
      if (
        k.y <= this.y + this.h &&
        k.y + k.h >= this.y &&
        k.x + k.w >= this.x &&
        k.x <= this.x + this.w
      ) {
        k.x -= 5;
      }
      if (
        k.x <= this.x + this.w &&
        k.x + k.w >= this.x &&
        k.y <= this.y + this.h &&
        k.y >= this.y
      ) {
        k.y += 5;
      }
      //check if we hit the top of any wall
      if (
        k.x <= this.x + this.w &&
        k.x + k.w >= this.x &&
        k.y + k.h >= this.y &&
        k.y <= this.y + this.h
      ) {
        k.y -= 5;
      }
    }
  }; //end collision
   this.keyCollision = function () {
    if (rooms[activeY][activeX] == this.room) {
      //check if we hit the left of any wall
      if (
        k.y <= this.y + this.h &&
        k.y + k.h >= this.y &&
        k.x <= this.x + this.w &&
        k.x >= this.x
      ) {
       this.locked =false;
      }
      //check if we hit the right of any wall
      if (
        k.y <= this.y + this.h &&
        k.y + k.h >= this.y &&
        k.x + k.w >= this.x &&
        k.x <= this.x + this.w
      ) {
        this.locked =false;
      }
      if (
        k.x <= this.x + this.w &&
        k.x + k.w >= this.x &&
        k.y <= this.y + this.h &&
        k.y >= this.y
      ) {
        this.locked =false;
      }
      //check if we hit the top of any wall
      if (
        k.x <= this.x + this.w &&
        k.x + k.w >= this.x &&
        k.y + k.h >= this.y &&
        k.y <= this.y + this.h
      ) {
        this.locked =false;
      }
    }
  }; //end collision
} //end Gate
