class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }