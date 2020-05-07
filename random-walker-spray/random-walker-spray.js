let walkers;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(0);
  //stroke(255);
  strokeWeight(2);
  walkers = []
  for (let i = 0; i < 100; i++) {
    walkers.push(new Walker(20));
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
    walkers[i].checkEdges();
  }
}