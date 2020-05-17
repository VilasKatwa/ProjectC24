// You could have multiple flags like: 
//start, launch to indicate the state of the game.


// The above line creates different constant variables for Engine, World, Bodies etc.
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;

/*
const {Engine} = Matter is the same as const Engine = Matter.Engine
*/

// Setup the canvas, the ground the, tanker, the shooting ball 
//and the bubble balls.
var ground, tanker;
var v1,v2,ab


function setup() {
engine = Engine.create;
world = engine.world;

var canvas = createCanvas(1200,400);
ground = new Ground(600,height-10,width, 20);
tanker = new Tanker(150,380,20,20);

//var v1 = createVector(tanker.postion, 0);
//var v2 = createVector(mouseX - 150, mouseY - 380);
 

  

  
}

function draw() {
    background (225,225,175);
    
    
    //ab = v1.angleBetween(v2);
    tanker.display(-PI/6);
    ground.display();
   

// Remember to update the Matter Engine and set the background.
}

/*
function keyReleased() {
    // Call the shoot method for the cannon.
}

*/
