class Box{
    constructor(posx, posy, width, height){
       var option = {
       'restitution':0.8, 
       'friction':0.3, 
       'density':1.0
    }
        this.body =  Bodies.rectangle(posx, posy, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}