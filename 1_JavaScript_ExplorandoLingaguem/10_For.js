console.log("Trabalhando com While \n")


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


console.log("\n")


let idadeComprador = 18
let estaAcompanhada = true
let temPassagemComprada = false
const destino = `São Paulo`


const podeComprar = idadeComprador > 18 && estaAcompanhada == true
let destinoExiste = false

for ( let index = 1; index < 3; index ++){

    if(listaDestinos[index] == destino){
        console.log("Destino Existe")
        destinoExiste = true
        break;
    }
    

}

console.log("Destino existe " + destinoExiste)



