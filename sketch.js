const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var chain;
var constraintLog;
var engine, world;
var box1, pig1;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
   platform = new Ground(150,500,300,250);

    box1 = new Box(800,520,70,70);
    box2 = new Box(1000,520,70,70);
    pig1 = new Pig(900, 540);
    log1 = new Log(900,500,280, PI/2);

    box3 = new Box(800,460,70,70);
    box4 = new Box(1000,460,70,70);
    pig2 = new Pig(900, 480);

    log3 =  new Log(900,400,280, PI/2);

    box5 = new Box(900,400,70,70);
    log4 = new Log(840,360,150, PI/7);
    log5 = new Log(960,360,150, -PI/7);
    constraintLog = new Log(250,180,80,PI/2);
    bird = new Bird(200,200);
    chain = new Chain(bird.body,constraintLog.body);

    console.log("Hi");
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    constraintLog.display();
    chain.display();
}