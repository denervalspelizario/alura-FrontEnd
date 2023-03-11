

export function valida(input) { // funcao de validacao do input que será exportada para app.js         
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {  // verificando s dentro de validadores
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){ // funcao que caso user clicar e input não estiver valido o input o campo fica vermelho

       input.parentElement.classList.remove('input-container--invalido') 
       input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''

    } else {

        input.parentElement.classList.add('input-container--invalido') // input naoe stando valido adiciona classe que avermelha input
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)

    }
}


const tiposDeErro = [

    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',

]

// mensagens de erros customizadas
const mensagensDeErro = {  // erros dos inputs

    nome: {

        valueMissing: 'O campo nome não pode estar vazio',

    },
    email: {

        valueMissing: 'o campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },
    senha: {

        valueMissing: 'o campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter 6 a 12 caracteres e precisa de 1 numero e 1 letra'

    },
    dataNascimento: {

        valueMissing: 'o campo de data nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar',
        
    }    
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input) // recebendo o data-tipo la do html (linha 49 de cadastro.html)
}


function mostraMensagemDeErro(tipoDeInput, input ){

    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            
            mensagem = mensagensDeErro[tipoDeInput][erro]
        
        }

    })
    return mensagem

}


function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value) // constante recebe dado de data de nacimento pelo input do formulario
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {  // condicional que faz a verificacao recebe dado digitado para verificar se é mais de 18 ou não
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.' // mensagem de erro 
    }

    input.setCustomValidity(mensagem)  // funcao que valida o input se caso der erro(idade menor de 18) repassa em alert a mensagem
}

function maiorQue18(data) {   // funcao com estrutura para ver se é maior de 18
    const dataAtual = new Date() // recebe todo a data 
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) // recebe data com menos - 18 anos

    return dataMais18 <= dataAtual // checando se dataMais18 é menor ou igual a dataAtual 
}