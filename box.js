class Box{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :1.0
            
            
            
           
        }
        this.body = Bodies.rectangle(x, y, 25, 30, options);
        this.width = 25;
        this.height = 30;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        
      }
}