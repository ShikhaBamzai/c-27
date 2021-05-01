class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density: 1.2,
          restitution:0.3,
          friction:0.1
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      //image(this.image, pos.x, pos.y, this.radius, this.radius)
    }
  };