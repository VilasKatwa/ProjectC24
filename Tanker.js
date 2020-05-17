class Tanker {
  constructor(x, y, w, h) {
          var options = {
          isStatic: true
          }
          this.body = Bodies.rectangle(x,y,w,h, options);
      this.image = loadImage("assets/tanker1.png");
      this.w = w;
      this.h = h;
      
      //World.add(world, this.body); WHY IS THIS NOT WORKING?
       }     
    // Draw the tanker the way you like.
    // You could also use an image if you want a specific look
   
    display(test){
      var pos = this.body.position;
      translate(pos.x,pos.y);
      push();
      imageMode(CENTER);
      scale(5);
      image(this.image, 0, 0, this.w, this.h);

      noStroke();
      fill("black");
      rotate (test);
      rect(0+7,0-2,5,3);
      pop();
      }
  }
