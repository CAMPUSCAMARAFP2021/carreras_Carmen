class Carrera {
    circuitos=new circuito('miami',3,['r','r','r','c','c','r','c','r','r'])
    coches =  [new Coche(200,4), new Coche(230, 3)];
    resultados = [];
    instante = 0;

    start(){
        while (this.coches.length !== this.resultados.length) {
            this.instante++;
            this.coches.map((coche)=>{
                if(coche.distanciarecorrida<this.circuitos.distancia){
                this.carrera(this.circuitos.Pista[ parseInt(coche.distanciarecorrida/100)])
                    this.resultados.push({instante:this.instante,coche})
                }
            })
        }
    }
    carrera(lugar){
        switch(lugar){
            case 'r':
                coche.acelerar();
                break;
            case 'c':
                coche.frenar();
                break;
        }
    }

}