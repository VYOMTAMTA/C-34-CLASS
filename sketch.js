const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3;
var ground;
var rope, ball;

function setup(){
    var canvas = createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900, 100, 70, 70);
    box2 = new Box(800, 100, 70, 70);
    box3 = new Box(700, 100, 70, 70);
  
    ground = new Ground(600, 790, 3000, 20);

    ball = new Ball(200, 200, 80, 80);

    rope = new Rope(ball.body, {x: 100, y: 25});

}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();

    ground.display();

    ball.display();
    rope.display();

}


function mouseDragged(){

Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});

}