//Instancia única de mi clase
//Cuando quiero que las características sean globales
//Compartir información a lo largo de la aplicación, base de datos
//Ahorrar memoria, ya que las instancias apuntan al mismo espacio en memoria, al mismo objeto
class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = ''){
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia = new Singleton('Aldair');
const instancia2 = new Singleton('Sendy');
const instancia3 = new Singleton('Pedro');

console.log(`El nombre en la nueva instancia es: ${ instancia.nombre }`);
console.log(`El nombre en la nueva instancia es: ${ instancia2.nombre }`);
console.log(`El nombre en la nueva instancia es: ${ instancia3.nombre }`);