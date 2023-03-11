import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input') // acessando todos os inputs

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {

        valida(evento.target)

    })
})







