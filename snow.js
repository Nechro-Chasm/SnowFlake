class Snow{
constructor(x, y){
var options = {
    restitution:0.8,
    friction:0.02,
    density:0.05
}
this.body = Bodies.circle(x, y, 20, options)
World.add(world, this.body)
this.image = loadImage("snow4.webp");
            
}  
display(){ 
    console.log("enetering display()")
    imageMode(CENTER);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    image(this.image, 0, 0, 50, 50);
    pop();
}

}