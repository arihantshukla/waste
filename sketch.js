
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myengine,myworld
var  bound
var leftwallBody
var rightwallBody
var baseBody
var paper
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);

  myengine=Engine.create();
  myworld=myengine.world

	//Create the Bodies Here.

  ground=new Ground(400,695,800,10)
  var left_options = {
  isStatic:true
  }
leftwallBody=Bodies.rectangle(500,650,5,100,left_options)
World.add(myworld,leftwallBody)
var right_options = {
  isStatic:true
  }
rightwallBody=Bodies.rectangle(600,650,5,100,right_options)
World.add(myworld,rightwallBody)
var base_options = {
  isStatic:true
  }
baseBody=Bodies.rectangle(550,690,100,5,base_options)
World.add(myworld,baseBody)

  paper=new Paper(200,300,45)
  
  
  
	
 

}
function draw() {
  background("yellow");
  Engine.update(myengine)
  rectMode(CENTER);
  rect(leftwallBody.position.x,leftwallBody.position.y,5,100)
  rect(rightwallBody.position.x,rightwallBody.position.y,5,100)
  rect(baseBody.position.x,baseBody.position.y,100,5)
 ground.display();
  //drawSprites();
  paper.display();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}



