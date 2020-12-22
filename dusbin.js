class dusbin{
    constructor(x,y,w,h){
        this.dusbin1 = loadImage("dustbingreen.png")

       var options = {
            isStatic: true
        }

    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world, this.body);
    
    this.left = Bodies.rectangle(400,340,10,75,options)
    World.add(world, this.left);

    this.right = Bodies.rectangle(500,340,10,75,options)
    World.add(world, this.right);


    }
    display(){
        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255); 
        image(this.dusbin1,0,0,100,75)
       // rect(0,0,100,40)
         pop()
        //rect(400,340,10,75)
        //rect(500,340,10,75)
    }

}