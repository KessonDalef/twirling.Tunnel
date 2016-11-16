var points = [];
var hexagons = [];

var numsquares = 64;

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < numsquares; i++) {
    points.push(map(i, 0, numsquares, 0, PI/2));
    hexagons.push(new Hexagon(map(i, 0, i+1, height*2, 0)));
  }
} 

function draw() {
  background(255);

  noStroke();
  for (var i = 0; i < points.length; i++) {
    if (i%2 == 1) fill(0); 
    else fill(255);
    push();
    translate(width/2, height/2);
    rotate(sin(points[i])*TWO_PI);
    hexagons[i].display();
    pop();

    points[i] += 0.02;
  }
}

function Hexagon(d) {

  this.points = [];

  for (var i = 0; i < 6; i++) {
    this.a = map(i, 0, 6, 0, TWO_PI);
    this.points[i] = createVector(cos(this.a)*d, sin(this.a)*d, this.a);
  }

  this.display = function() {
    beginShape();

    for (var i = 0; i < this.points.length; i++) {
      vertex(this.points[i].x, this.points[i].y);
    }

    endShape(CLOSE);
  }
}
