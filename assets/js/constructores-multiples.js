class Persona {
    static porObjeto = function({ nombre, apellido, pais }){
        return new Persona(nombre, apellido, pais);
    }

    #nombre = '';
    #apellido = '';
    #pais = '';
    constructor(nombre, apellido, pais){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#pais = pais;
    }

    saludar(){
        console.log(`Hola, mis nombres son ${ this.#nombre } ${ this.#apellido } y soy de ${ this.#pais }`);
    }
}

const aldair = new Persona('Juan Aldair', 'Ruiz Carmona', 'Perú');
aldair.saludar();

const datos = {
    nombre: 'Sendy',
    apellido: 'Yaranga',
    pais: 'Perú'
}

const sendy = Persona.porObjeto(datos);
sendy.saludar();