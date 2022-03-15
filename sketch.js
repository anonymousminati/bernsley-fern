let x = 0;
let y = 0;
let fern = [];
let v;
function setup() {
  createCanvas(600, 600);
  background(255);
  let nextX;
  let nextY;
  for (let i = 0; i < width * 500; i++) {
    let r = random(1);
    //range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983.
    if (r < 0.01) {
      //1
      nextX = 0;
      nextY = 0.16 * y;
    } else if (r < 0.86) {
      //2
      nextX = 0.85 * x + 0.04 * y;
      nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
      //3
      nextX = 0.2 * x + -0.26 * y;
      nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
      //4
      nextX = -0.15 * x + 0.28 * y;
      nextY = 0.26 * x + 0.24 * y + 0.44;
    }

    x = nextX;
    y = nextY;
    let px = map(x, -2.182, 2.6558, 0, width);
    let py = map(y, 0, 9.9983, height, 0);

    fern.push(createVector(px, py));
  }
}

function draw() {
  strokeWeight(0.1);
  beginShape(POINTS);
  for (let i = 0; i < fern.length; i++) {
    v = fern[i];
    //   stroke(v.s);
    // scale(2);
    stroke(79, 121, 66);
    // console.log("x" + i + "=" +v.x+ "," +"y" +i +" = "+ v.y);
    vertex(v.x, v.y);
  }
  endShape();
}
