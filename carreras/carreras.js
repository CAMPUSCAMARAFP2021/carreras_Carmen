class Vehicle {
    velocity = 0
    maxVelocity = 500

    accelerate() {
        this.velocity >= (this.maxVelocity - 10) ?  
            this.velocity += 10 :  
            this.velocity = this.maxVelocity
    }

    brake() {
        this.velocity >= 10 ?
            this.velocity -= 10 :  
            this.velocity = 0
    }
 
    standing() {

    }

}