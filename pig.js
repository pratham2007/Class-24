class Pig{
    constructor(posx, posy){
       var option = {
       'restitution':0.8, 
       'friction':0.3, 
       'density':1.0
    }
        this.body =  Bodies.rectangle(posx, posy, 30, 30, option);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255, 0, 255);
        rect(0, 0, 30, 30);
        pop();
    }
}