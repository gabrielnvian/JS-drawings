class Planet {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  edges() {
    let mag = p5.Vector.sub(attractor.pos, this.pos).mag
    if (Math.abs(mag) < attractor.r + this.r) {
      this.vel.mult(-1);
    }
  }
}