class Vehicle {
    velocity = 0
    maxVelocity = 500
    accelerate() {
        if (this.velocity >= (this.maxVelocity - 10)) {
            this.velocity += 10
        } else {
            this.velocity = this.maxVelocity
        }
        
    }
    brake() {
        if (this.velocity >= 10) {
            this.velocity -= 10
        } else {
            this.velocity = 0
        }
    }
}