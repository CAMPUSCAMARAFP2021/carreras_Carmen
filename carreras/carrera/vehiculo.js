class Coche {
    velocidadmax;
    acceleracion;
    velocidad = 0;
    distanciarecorrida = 0;

    constructor(velocidadmax, acceleracion){
        this.velocidadmax = velocidadmax;
        this.acceleracion = this.acceleracion;
    }

    acelerar(){
            this.velocidad = this.velocidad + this.acceleracion;

            this.velocidad >= this.velocidadmax ? this.velocidad = this.velocidadmax : this.velocidad;

            this.distanciarecorrida = this.distanciarecorrida + this.velocidad;
    }
    frenar(){
        this.velocidad = this.velocidad-this.acceleracion;
        this.velocidad <= 0 ? this.velocidad=0 : this.velocidad;
        this.distanciarecorrida = this.distanciarecorrida + this.velocidad;
    }

}