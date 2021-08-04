class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    static _conteo = 0;

    static get getConteo(){
        return `${ Persona._conteo } instancias.`;
    }

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        //Es una función que se ejecuta en el momento en que se crea una nueva instancia de esta clase
        //Se ejecuta antes de crear la instancia
        //Cuando el constructor termina de ejecutarse, retorna la nueva instancia de nuestra clase.
        //No retorna undefined. Siempre retorna una instancia nueva.
        //Tener propiedades y métodos comunes en las instancias de esta clase.
        //Las características de mi clase se le llama PROPIEDADES
        //Tiene el 'use strict' por defecto
        //Si no se usa el "this", va a buscar dicha función o dicha variable dentro del scope que nos encontramos
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    //Setters y Getters
    //El set sólo se debe recibir 1 argumento
    set setComidaFavorita(value){
        this.comida = value.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es el(la) ${ this.comida }`;
    }

    //Es recomendable que los métodos esten después del constructor
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi "chaplín" es ${ this.codigo }`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const aldair = new Persona('Juan Aldair', 'El buhito', 'Cosas de búhos');
console.log(aldair);
aldair.quienSoy();
aldair.miFrase();

const sendy = new Persona('Sendy Yaranga', 'La buhita', 'Ay buhoooooooo');
sendy.setComidaFavorita = 'tortita';
console.log(sendy);
console.log(sendy.getComidaFavorita);

const pedro = new Persona('Pedro', 'Pedrito', 'Mi pito es chico');
console.log(pedro);

//Si llamamos a la función sin los paréntesis, estamos referenciando. Si lo hacemos con los paréntesis, lo estamos ejecutando

//Propiedades y métodos estáticos
//Propiedades de la clase
//Constructor
//Set y Get
//Métodos
//Privado (opc)


//Métodos y propiedades estáticas: Permiten utilizarlos sin necesidad de crear una nueva instancia.
//Ejercicio: saber cuántas instancias se hizo de mi objeto