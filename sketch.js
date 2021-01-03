const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var backgroundImg;
function preload(){
  getbgimg();
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height-10,width,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    //row1(stand1)
    Box1 = new Box(300,275,30,40)
    Box2 = new Box(330,275,30,40)
    Box3 = new Box(360,275,30,40)
    Box4 = new Box(390,275,30,40)
    Box5 = new Box(420,275,30,40)
    Box6 = new Box(450,275,30,40)
    Box7 = new Box(480,275,30,40)
    //row2(stand1)
    Box8 = new Box(330,235,30,40);
    Box9 = new Box(360,235,30,40);
    Box10 = new Box(390,235,30,40);
    Box11 = new Box(420,235,30,40);
    Box12 = new Box(450,235,30,40);
//row3(stand1)
    Box13 = new Box(360,195,30,40) 
    Box14 = new Box(390,195,30,40) 
    Box15 = new Box(420,195,30,40) 
   // row4(stand1)
   Box16 = new Box(390,155,30,40)

   //row1(stand2)
   Box1A = new Box(640,175,30,40);
   Box2A = new Box(670,175,30,40);
   Box3A = new Box(700,175,30,40);
   Box4A = new Box(730,175,30,40);
   Box5A = new Box(760,175,30,40);

   //row2(stand2)
   Box1B = new Box(670,135,30,40);
   Box2B = new Box(700,135,30,40);
   Box3B = new Box(730,135,30,40);

   //row3(stand2)
   Box1C = new Box(700,95,30,40);

   ball = Bodies.circle(50,200,20);
   World.add(world,ball);
   sling = new Slingshot(this.ball,{x:100,y:200});
   /*const1 = {
     bodyA:ball.body,bodyB:{x:100,y:200},stiffness:0.04
}
   var garvi = Constraint.create(const1);
  World.add(world,garvi)*/
}
function draw() {
  if(backgroundImg){
background(backgroundImg)

  }
  else{
    background("green");  
  }
  
  Engine.update(engine);
  textSize(25);
  fill("White");
  stroke("black");
  strokeWeight(4);
  text("Score:" 
  + score,width/2,30);
  ground.display();
  stand1.display();
  stand2.display();
  fill("blue");
  Box1.display();
  Box1.score();
  Box2.display();
  Box2.score();
  Box3.display();
  Box3.score();
  Box4.display();
  Box4.score();
  Box5.display();
  Box5.score();
  Box6.display();
  Box6.score();
  Box7.display();
  Box7.score();
  fill("red");
  Box8.display();
  Box8.score();
  Box9.display();
  Box9.score();
  Box10.display();  
  Box10.score();
  Box11.display();
  Box11.score();
  Box12.display();
  Box12.score();
  fill("orange");
  Box13.display();
  Box13.score();
  Box14.display();
  Box14.score(); 
  Box15.display();
  Box15.score();
  fill("pink");
  Box16.display();
  Box16.score();
  fill("yellow");
  Box1A.display();
  Box1A.score();
  Box2A.display();
  Box2A.score();
  Box3A.display();
  Box3A.score();
  Box4A.display();
  Box4A.score();
  Box5A.display();
  Box5A.score();
  fill("lightblue");

  Box1B.display();
  Box1B.score();
  Box2B.display();
  Box2B.score();
  Box3B.display();
  Box3B.score();
  fill("cyan");

  Box1C.display();
  Box1C.score();
  

  sling.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    ball.trajectory = []
   sling.attach(ball.body);
   Matter.Body.setPosition(ball.body,{x:50,y:200,})
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

async function  getbgimg(){
  var response =  await fetch
("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var resjson = await response.json();
//console.log(resjson);
//console.log(resjson.datetime);  
var datetime = resjson.datetime;
var Hour = datetime.slice(11,13);
console.log(Hour);
if(Hour >= 06 && Hour <= 19){
bg = "bg1.png"
}
else{
  bg = "bg2.jpg"
}
backgroundImg = loadImage(bg)}