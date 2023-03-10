
export function valida(input){                  // funcao de validacao do input que será exportada para app.js
    const tiposDeInput = input.dataset.tipo

    if(validadores[tiposDeInput]){ // verificando s dentro de validadores

        validadores[tiposDeInput](input)

    }
}

const validadores = {
    dataNasciemnto:input => validaDataNascimento(input) // recebendo o data-tipo la do html (linha 49 de cadastro.html)

}



function validaDataNascimento(input){

   

    const dataRecebida = new Date(input.value) // constante recebe dado de data de nacimento pelo input do formulario
    let mensagem = ''

    if(!maiorQue18(dataRecebida)){ // condicional que faz a verificacao recebe dado digitado para verificar se é mais de 18 ou não
        
        mensagem = 'Voce deve ser maior de 18 anos para se cadastrar' // mensagem de erro 
    }

    input.setCustomValidity(mensagem) // funcao que valida o input se caso der erro(idade menor de 18) repassa em alert a mensagem
}


function maiorQue18(data){ // funcao com estrutura para ver se é maior de 18

    const dataAtual = new Date() // recebe todo a data 

    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) // recebe data com menos - 18 anos

    return dataMais18 <= dataAtual  // checando se dataMais18 é menor ou igual a dataAtual 

    
}


