function Key(x, y, w, h, r) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.have = false;
  this.img = loadImage("keyAdventure.jpg");
  this.show = true;

  this.display = function () {
    if (this.show) {
      if (rooms[activeY][activeX] === this.r || this.have) {
        this.img.resize(this.w, this.h);
        image(this.img, this.x, this.y);
      }
    }
  }; //end display
  this.keyCollision = function () {
    if (
      p.y <= this.y + this.h &&
      p.y + p.h >= this.y &&
      p.x + p.w >= this.x &&
      p.x <= this.x + this.w &&
      this.r === rooms[activeY][activeX]
    ) {
      this.have = true;
    }
  }; //end collision
  this.update = function () {
    if (this.have) {
      this.x = p.x;
      this.y = p.y;
    }
  }; //end update
} //end Key
