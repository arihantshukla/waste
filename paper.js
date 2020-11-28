class Paper{
constructor(x,y,radius){
    var options = {
       
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options)
    World.add(myworld,this.body)
    this.radius=radius

}
display(){

    
    
    rectMode(CENTER)
    
   ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
  }
}