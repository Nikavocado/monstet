class Throw{
        constructor(x,y,width,height){
            var options={
                bodyA:bodyA,
                pointB:pointB,
                stifness:0.01,
                length:10
            }
           this.pointB=pointB;
           this.throw=Constraint.create(options);

            World.add(world,this.body)
    
        }
        fly(){
           this.throw.bodyA=null
           
        }
        Launch(bodyA){
            this.throw.bodyA=BodyA;
        }
        display(){
            
        }
    }
