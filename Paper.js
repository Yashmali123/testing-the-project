class Paper {
    constructor(){
       var options={
           isStatic:true,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
     this.body=Bodies.rectangle(100,200,50,20,options);
     this.width=50;
     this.height=20;
     World.add(world,this.body);
    
    }
    display(){
    var pos=this.body.position;
    pos.x=this.body.positionX;
    pos.y=this.body.positionY;
    push()
    rectMODE(CENTER)
    fill(255);
    rect(pos.x,pos.y,50,20);
    pop()
    }
    
    }