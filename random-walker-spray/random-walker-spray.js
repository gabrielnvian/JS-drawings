let walkers;

function setup() {
  createCanvas(800, 600);
  background(0);
  stroke(255);
  strokeWeight(3);
  walkers = []
  for (let i = 0; i < 100; i++) {
    walkers.push(new Walker(10));
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
    walkers[i].checkEdges();
  }
}