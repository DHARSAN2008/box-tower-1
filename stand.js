class Stand{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 200, 5, options);
        this.width = 200;
        this.height = 5;
        World.add(world, this.body);
      }
      display(){
        strokeWeight(2);
        fill("red");
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
  }