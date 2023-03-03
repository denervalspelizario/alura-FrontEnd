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
let index = 0


const podeComprar = idadeComprador > 18 && estaAcompanhada == true
let destinoExiste = false

while ( index < 3){

    

    if(listaDestinos[index] == destino){
        console.log("Destino Existe")
        destinoExiste = true
        break;
    }
    
    index += 1
}

console.log("Destino existe " + destinoExiste)