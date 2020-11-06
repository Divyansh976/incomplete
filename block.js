class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.Visibility = 255;
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        if(this.body.speed<3)  {
            var angle = this.body.angle
            var pos = this.body.position
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER)
            fill(171,247,247)
            rect(0,0,this.width,this.height)
            pop()
        } else {
            World.remove(world,this.body)
            push()
            this.Visibility = this.Visibility-5
            pop()
        }

    }
    
    score()  {
        if(this.Visibility<0 && this.Visibility>=105)  {
            score = score + 1;


        }

    }
    
    
    
}