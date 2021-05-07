class Dustbin{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true});
    this.w=w;
    this.h=h
        World.add(world,this.body);
    }
    display(){

        push ()
        translate(this.body.position.x,this.body.position.y);
        fill ("green")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        
        pop ()
    }
}