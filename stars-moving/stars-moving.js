let stars = [];
let alpha;
let wind;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  strokeWeight(2);
  // for (let i = 0; i < 100; i++) {
  //   stars.push(new Star(random(width), random(height)));
  // }
  t = 0;
}

function draw() {
  background(0, 100);
  alpha = 255; //map(height - mouseY, 0, height, 50, 255);
  stroke(255, alpha)
  for (let i = 0; i < stars.length; i++) {
    wind = map(noise(t), 0, 1, 0, 0.01); //createVector(map(height - mouseY, 0, height, 50, 255), 0);
    stars[i].applyForce(wind);
    stars[i].update();
    stars[i].draw();
    if (stars[i].pos.x > width) {
      stars.splice(i, 1);
    }
  }

  for (let i = 0; i < 5; i++) {
    stars.push(new Star(0, random(height)));
  }
  t++;
}