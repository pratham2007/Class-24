class AngryBird{
    constructor(posx, posy){
       var option = {
       'restitution':0.5, 
       'friction':0.3, 
       'density':1.5
    }
        this.body =  Bodies.rectangle(posx, posy, 50, 50, option);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(0, 0, 50, 50);
        pop();
    }
}