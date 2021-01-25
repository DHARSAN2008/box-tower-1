const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world;
var box1;


function preload(){
  polygonImage=loadImage("polygon.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;
  createCanvas(1200,500);

  ground=new Ground()

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);
  
  fill("green")
  slingshot = new Sling(this.ball, {x: 100, y: 200});


  //level 1
  box1=new Box(425,340)
  box2=new Box(450,340)
  box3=new Box(475,340)
  box4=new Box(500,340)
  box5=new Box(525,340)
  box6=new Box(550,340)
  box7=new Box(575,340)
  
  //level 2
  box8=new Box(450,305)
  box9=new Box(475,300)
  box10=new Box(500,300)
  box11=new Box(525,300)
  box12=new Box(550,305)

  //level 3
  box13=new Box(475,280)
  box14=new Box(500,280)
  box15=new Box(525,280)

  //level 4
  box16=new Box(500,245)



  //level 1
  box17=new Box(850,235)
  box18=new Box(875,235)
  box19=new Box(900,235)
  box20=new Box(925,235)
  box21=new Box(950,235)

  //level 2
  box22=new Box(875,205)
  box23=new Box(900,205)
  box24=new Box(925,205)

  //level 3
  box25=new Box(900,175)

  stand1=new Stand(500,350)

  stand2=new Stand(900,250)

}

function draw() {
 background("black")
 textSize(20)
 text("drag the hexagon to hit the boxes",50,50)
  Engine.update(engine);

  ground.display();



  fill("cyan")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("lime")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("yellow")
  box13.display();
  box14.display();
  box15.display();

  fill("pink")
  box16.display();


  stand1.display();
  stand2.display();


  fill("violet")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("orange")
  box22.display();
  box23.display();
  box24.display();

  fill("blue")
  box25.display();


  slingshot.display();

  imageMode(CENTER);
  image(polygonImage, ball.position.x, ball.position.y, 50, 50);

 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}