class Ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.w = width;
    this.h = height;
    //World.add (world,this.body); DOESNT WORK
   
  }
  display() {
    var pos = this.body.position;
    translate(pos.x,pos.y);
    //push(); (NOT REQUIRED? WHY? UNDER WHAT CIRCUMSTANCES IS THIS REQUIRED)
    rectMode(CENTER);
    fill(100,100,50);
    rect(0,0,this.w, this.h);
   // pop();
    
  }
}
