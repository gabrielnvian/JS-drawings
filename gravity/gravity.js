let G = 5;
let planets = [];
let attractor;
let showTrails = false;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  for (let i = 0; i < 1; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    planets[i] = new Planet(x, y, m);
  }
  attractor = new Attractor(width / 2, height / 2, 100);
  background(0);
}

function draw() {
  if (showTrails) {
    background(0, 10);
  } else {
    background(0);
  }
  for (let planet of planets) {
    planet.update();
    planet.edges();
    planet.show();
    attractor.attract(planet);
  }
  if (mouseIsPressed && mouseButton === LEFT) {
    attractor.pos.x = mouseX;
    attractor.pos.y = mouseY;
  }
  attractor.show();
}