//Problema
//La obligación de tener las mismas propiedades
//Interpolación de string: colocar un valor dentro de un string

//Para solucionar ese tema de crear instancias de una misma "plantilla", se implementó: 
//UpperCamelCase -> Función para crear instancias.

//new -> Crear una nueva instancia

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, mi nombre es ${ this.nombre } y tengo ${ this.edad } años.`);
    }
}

const aldair = new Persona('Juan Aldair', 19);
aldair.saludar();

const sendy = new Persona('Sendy Yaranga', 30);
sendy.saludar();