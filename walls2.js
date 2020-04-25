class Wall2 {
    constructor(x, y, width ){
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, 100, options);
      this.width = width
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(10);
      stroke("red");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };