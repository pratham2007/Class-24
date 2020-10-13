class Log{
    constructor(posx, posy, height, angle){
       var option = {
       'restitution':0.2,
       'friction':2, 
       'density':1.0
    }
        this.body =  Bodies.rectangle(posx, posy, 20, height, option);
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0, 100, 255);
        rect(0, 0, 20, this.height);
        pop();
    }
}