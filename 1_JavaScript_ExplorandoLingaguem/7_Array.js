console.log("Trabalhando com listas \n")

const salvador = `Salvador`
const saoPaulo = `São Paulo`
const rioDeJaneiro = `Rio de Janeiro`

console.log("\nDestino Possiveis")
console.log(salvador, saoPaulo , rioDeJaneiro + "\n")

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


console.log(listaDestinos)

listaDestinos.push(`Curitiba`) // PUSH adicionando item por ultimo a lista


console.log(listaDestinos)
console.log("\n")

listaDestinos.splice(1, 1)  // Splice dela um item no () colcase em sequencia a posicao que vai ser deletada e a quantidade
                            // neste caso deletou  a posicao 1(lembre-se inicia posicao 0) e quantidade 1    
console.log(listaDestinos)    

console.log(listaDestinos[1]) // acessando elemento especifico da lista
                            
