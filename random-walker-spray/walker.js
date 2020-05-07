class Walker {
  constructor(vel) {
    this.vel = vel
    this.pos = createVector(width/2, height/2);
  }

  update() {
    this.pos.x += random(-this.vel, this.vel)
    this.pos.y += random(-this.vel, this.vel)
  }

  draw() {
    point(this.pos.x, this.pos.y);
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = width;
    } else if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.y > height) {
      this.pos.y = height;
    }
  }
}