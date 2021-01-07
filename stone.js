class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r=r;
        this.image = loadImage("PluckingMangoes/stone.png")

        this.body = Bodies.circle(x,y,r/3,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
}