class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  attract(planet) {
    let force = p5.Vector.sub(this.pos, planet.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let strength = (G * (this.mass * planet.mass)) / distanceSq;
    force.setMag(strength);
    planet.applyForce(force);
  }

  show() {
    noStroke();
    fill(38, 186, 34);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}