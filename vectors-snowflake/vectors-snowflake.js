function setup() {
  createCanvas(800, 600);
  background(0);
  stroke(255, 50);
  strokeWeight(3);
}

function draw() {
  translate(width/2, height/2);
  let v = p5.Vector.random2D();
  v.mult(random(50, 150));
  line(0, 0, v.x, v.y);
}