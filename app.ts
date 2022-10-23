class Alumnoo {
    private examenRendidos: RendicionDeExamen[];
    private nombre: string;
    private dni: number;   

    constructor(nombre: string, dni:number) {
        this.nombre = nombre;
        this.dni= dni
        this.examenRendidos = []
    }
    
    getNombre():string {
        return this.nombre
    }

    getDNI():number {
        return this.dni
    }

    rendirExamen(examen: Examen, respuestas: number[]):boolean{

        
        if(examen.equals(respuestas)){
            return true
        }else{
            return false
        }
    }


}

class RendicionDeExamen {
    private examen : Examen
    private respuestas: number[]

    constructor(examen:Examen, respuestas: number[]){
        this.examen =examen;
        this.respuestas= respuestas;
    }

    getExamen():Examen {
        return this.examen
    }

    estaAprobado():boolean {
        if(this.examen.puntajeAprobacion >= 7){
            return true

        }else {
            return false
        }
    }
}

class Pregunta {
    private consigna: string
    private opciones: string[]
    private opcionCorrecta: number
    private puntaje: number 

    constructor(consigna: string, puntaje: number){
        
        this.consigna = consigna
        this.puntaje = puntaje
        this.opciones = []
        this.opcionCorrecta= 0
    
    }

    addOpcion(opcion:string):void{
        this.opciones.push(opcion)
    }
    
    setOpcionCorrecta(opcionCorrecta: number):void{
        this.opcionCorrecta = opcionCorrecta
    }

    esCorrecta(respuesta:number):boolean {
        if(respuesta === this.opcionCorrecta){
            return true
        }else{
            return false
        }
    }
    getPuntaje():number{
        console.log("Puntaje de la pregunta",this.puntaje)
        return this.puntaje
    }

}

class Examen {
 protected preguntas : Pregunta[]
 private tema : string
 public puntajeAprobacion: number

    constructor(tema: string, puntajeAprobacion: number){
        this.tema= tema
        this.puntajeAprobacion= puntajeAprobacion
        this.preguntas = []
    }

    
    addPregunta(pregunta:Pregunta):void{
       
        this.preguntas.push(pregunta)
    }
    
    equals(o: Object):boolean {
        return this.preguntas.some(pregunta => pregunta === o)
    }

    getTema():string{
        console.log("Nombre del tema del examen", this.tema)
        return this.tema
    }

}  


class ExamenEspecial extends Examen{
    private penalizacionRespuestaIncorrecta: number;

    constructor(tema: string, puntajeAprobacion: number, penalizacion: number){
        super(tema, puntajeAprobacion)
        this.penalizacionRespuestaIncorrecta = penalizacion
    }

    addPregunta(pregunta: Pregunta):void {
        this.preguntas.push(pregunta)   
    }

    getPenalizacionRespuestaIncorrecta(): number{
        return this.penalizacionRespuestaIncorrecta;
    }
}
const alumnoPrimero = new Alumnoo('Juan Perez', 40432122)
const examenCultura = new Examen('cultura general', 10)
const rendicionExamen = new RendicionDeExamen(examenCultura, [1,2,3,4])
const pregunta1 = new Pregunta('en que año estamos', 2)
const pregunta2 = new Pregunta('que año fue el anterior', 2)
const pregunta3 = new Pregunta('que añó es el siguiente', 2)
const pregunta4 = new Pregunta('cuando se juega el proximo mundial', 2)
const pregunta5 = new Pregunta('en que año empezo la pandemia', 2)

const examenEspecial = new ExamenEspecial('examenSorpresa', 10, 2)


alumnoPrimero.rendirExamen(examenCultura, [1,2,3,4])


examenCultura.addPregunta(pregunta1)
examenCultura.addPregunta(pregunta2)
examenCultura.addPregunta(pregunta3)
examenCultura.addPregunta(pregunta4)
examenCultura.addPregunta(pregunta5)

examenCultura.getTema()


pregunta1.getPuntaje()


rendicionExamen.estaAprobado()
rendicionExamen.getExamen()


rendicionExamen.getExamen()


