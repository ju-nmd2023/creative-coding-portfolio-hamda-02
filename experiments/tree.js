let angle = random(0, PI / 3);

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(150, 169, 100);
  translate(width / 2, height);
  stroke(0);
  strokeWeight(1.5);
  branch(130, true);
  angle = map(mouseX, 0, width, 0, HALF_PI);
}

function branch(len) {
  //root line

  line(0, 0, 0, -len);
  translate(0, -len);

  len *= 0.67;

  if (len > 2) {
    let n = Math.floor(random(1, 4));
    for (let i = 0; i < n; i++) {
      let angle = random(-PI / 2, PI / 2);

      // right branch
      push();

      rotate(PI / 6);
      // line(0, 0, 0, -100);
      branch(len);
      pop();
    }

    //left branch
    push();
    rotate(-PI / 6);
    // line(0, 0, 0, -100);

    branch(len);
    pop();
  }
}

