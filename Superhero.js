class Superhero{
        constructor(x,y,width,height){
            var options={
                isStatic:false,
                ristitution:0,
                friction:1,
                density:1.2

            }
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            this.image=loadImage("images/superhero.jpeg")

            World.add(world,this.body)
    
        }
        display(){
            var angle=this.body.angle;
            var pos=this.body.position;
            push();
            translate(this.body.position.x,this.body.position.y)
            rotate(angle)

            imageMode(CENTER)
            fill(255)
            rect(0,0,this.width,this.height);
            image(this.image,0,0,this.width,this.height)
            pop();
    }

}