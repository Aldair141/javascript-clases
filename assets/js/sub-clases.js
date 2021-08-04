//HERENCIA: Poder "copiar" las propiedades y métodos de una clase en otra clase

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
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(value){
        this.comida = value.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es el(la) ${ this.comida }`;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi "chaplín" es ${ this.codigo }`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

class Heroe extends Persona{
    clan = 'Sin clan';
    constructor(nombre, codigo, frase, clan){
        //Llamar al constructor de la clase padre
        //Se debe llamar antes de invocar cualquier propiedad o método que use "this"
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    quienSoy(){
        console.log('Penis');
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'Avengers');
spiderman.quienSoy();