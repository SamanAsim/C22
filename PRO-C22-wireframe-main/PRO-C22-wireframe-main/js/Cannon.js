class Cannon{
    constructor(x,y,w,h,angle) {
    this.x= x;
    this.y= y;
    this.w= w;
    this.h= h;
    this.angle= angle;
    this.canon_image= loadImage("assets/canon.png");
    this.canon_base= loadImage("assets/cannonBase.png");
    }
    display() {
     push();
     imageMode(CENTER);
     image(this.canon_image,this.x,this.y,this.w,this.h);
     pop();
     image(this.canon_base,70,20,200,200);
     noFill();
    }
}
