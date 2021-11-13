class Box {
    constructor(x,y,w,h){
        var options = {
            density : 1.0,
            friction:0.5 
        }
        this.width = w;
        this.height= h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate (angle);      
fill ("gold");
rectMode(CENTER);
rect(0,0,this.width,this.height);

pop();
}

}