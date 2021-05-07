class Paper{

    constructor(x,y){
        var options={
            isStatic: false,
            density:1.2,
            restitution:0.3,
            friction:0.5
        }
       this.x=x;
       this.y=y;
        this.body=Bodies.circle(this.x,this.y,40,options);

        World.add(world,this.body);
    }
    display(){

        
        push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      
      fill("cyan");
      ellipseMode(RADIUS);
      ellipse(0,25,14);
     
      
      pop();

    }
}