//Aún no funca en todos lados (capaz ha cambiado en el 2021)

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#calcularArea();
    }

    #calcularArea = function(){
        this.#area = this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
console.log(rectangulo);