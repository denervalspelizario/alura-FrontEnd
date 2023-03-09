


const BotaoConclui = () => { // funcao anonima 

    const botaoConclui = document.createElement('button') // createElemente funcao para criar elemento, variavel que recebe elemento criado button   
    
    botaoConclui.innerText = 'concluir' // adicionando texto ao button
    botaoConclui.classList.add('check-button') // a variavel botaoConclui adicionando class de css ao elemento no caso o button ou seja a button terá classe check-button    
 
 
    botaoConclui.addEventListener('click', concluirTarefa)
 
    return botaoConclui
 
 }
 
 
 concluirTarefa = (evento) => {
 
    const botaoConclui = evento.target  // target para acessar um alvo(descobrir o elemento) no caso o alvo que foi clicado 
 
    const tarefaCompleta = botaoConclui.parentElement  // depois de descobrir o elemento o parentElemente acessa o pai do elemento 
                                                       // no caso o pai do botão  é a li(linha 20) a li que foi adicionada com dado do input 
 
    tarefaCompleta.classList.toggle('done') // ao acessar esse pai(li) ele acessa sua classe e joga a propriedade done(que no caso é um traço)
                                            
    //  Ou seja ao clicar no botao que fica lado da li ele risca o texto da li com um traço
 } 


 export default BotaoConclui