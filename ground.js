class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(600,500,1200,20,options);      
      World.add(world, this.ground);
    }

    display(){     
      strokeWeight(2);
      fill("red");
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,1200,20);
    }
  }