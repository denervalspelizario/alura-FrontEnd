

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
        
    },
    cpf: {

        valueMissing: 'O campo de cpf não pode estar vazio.',
        customError: 'O cpf digitado não é valido',
        
    }      
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input), // recebendo o data-tipo la do html (linha 49 de cadastro.html)
    cpf:input => validaCPF(input) // funcao de validacao de cpf (linha 103)
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


// funcao para validacao do cpf que sera adicionada(chamada) la na funcao validadores(linha 61)

function validaCPF(input){ // funcao recebe dado input

    const cpfFormatado = input.value.replace(/\D/g, '')  // variavel recebe dado do input e substituir tudo que não for digito
                                                         // dai usamo a replace(substitui) e a regex que diz  do dado recebido
                                                         // tudo que NÂO for numero será substituido por ''(vazio) ou seja só sobrara numero
                                                         // assim vc pode digitar o cpf como quiser que o input só vai ler os digitos             

    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado) || !checaEstuturaCPF(cpfFormatado)){ // confere se der igual manda a mensagem de erro

        mensagem = 'O CPF digitado não é valido'

    }

    input.setCustomValidity(mensagem)

}

// funcao para verificar repeticao no cpf

function checaCPFRepetido(cpf){  // recebe cpf(dado do input)

    const valoresRepetidos = [  // valore repetidos
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true

    valoresRepetidos.forEach(valor => {   // pega o dado do input(cpf) e compara com todos os dados da variavel valoresRepetidos

        if(valor == cpf){    // se algum for igual altera a varialvel cpfValido para false que la em cima(linha 11) faz um evento

            const multiplicador = 10

            cpfValido = false
        
        }

    })

    return cpfValido
}

// normalmente um cpf se faz validcao por ap mas como estamos sem ela vamos fazer na mao 

//let soma = (10 * 1) + (9 * 2) + (8* 3) + ...(2 * 9)

//let digitoVerificador = 11 (soma % 11)

function checaEstuturaCPF(cpf){

    return checaDigitoVerificador(cpf, multiplicador)

}

function checaDigitoVerificador(cpf, multiplicador){

    if(multiplicador >= 12){
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--){

        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++

    }

    if(digitoVerificador == confirmaDigito(soma)){

        return checaDigitoVerificador(cpf, multiplicador + 1)

    } else {

        return false
    }

   
}


function confirmaDigito(soma){

    return 11 - (soma % 11)

} 