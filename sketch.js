const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 300, 60, 60);
    box2 = new Box(900, 300, 60, 60);
    pig1 = new Pig(800, 300, 60, 60);
    ground1 = new Ground(600, 590, 1200, 20);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    pig1.display();
    ground1.display();
}