console.log("Trabalhando com Condicionais \n")


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


console.log(listaDestinos)
console.log("\n")

listaDestinos.splice(1, 1)  // Splice dela um item no () colcase em sequencia a posicao que vai ser deletada e a quantidade
                            // neste caso deletou  a posicao 1(lembre-se inicia posicao 0) e quantidade 1    
console.log(listaDestinos)    
console.log("\n")

let idadeComprador = 15

console.log(idadeComprador < 18)
console.log(idadeComprador <= 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador == 18) 

console.log("\n")


let estaAcompanhada = true

if(idadeComprador > 18){
    // amior de idade
    console.log("Pode Comprar o imóvel")

} else if (estaAcompanhada){

        console.log("Pode comprar pois esta acompanhado de maior de idade")

    }else {

        // menor de idade
        console.log("Não pode comprar")
    
    }

console.log("\n")

    if(idadeComprador > 18 && estaAcompanhada == true){
        // amior de idade
        console.log("Pode Comprar o imóvel")
        listaDestinos.splice(2,1) // removendo item

    } else {
    
            // menor de idade
            console.log("Não pode comprar")

    }



console.log("\n")

    if(idadeComprador > 18 || estaAcompanhada == true){
        // amior de idade
        console.log("Pode Comprar o imóvel")
        listaDestinos.splice(2,1) // removendo item

    } else {
    
            // menor de idade
            console.log("Não pode comprar")

    }
