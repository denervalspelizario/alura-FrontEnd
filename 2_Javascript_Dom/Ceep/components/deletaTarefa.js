


const BotaoDeleta = () => {  // componente sempre letra maiuscula, 

    const botaoDeleta = document.createElement('button') // criando elemento botao
 
    botaoDeleta.innerText = 'deletar' // adicionao ao elemento criado o texto deletar
 
    botaoDeleta.addEventListener('click', deletarTarefa)  // adicionando ao elemento o evento de click e dispara funcao deletarTarefa
   
 
    return botaoDeleta  // tem que colocar o return senao nao vai renderizar o componente criado
  
 } 
 
 const deletarTarefa = (evento) => {
 
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement   // pegando elemento pai de botao que neste caso é a li
 
    tarefaCompleta.remove()// ou seja ao clicar(linha 90) dispara o evento deletar tarefa que pega o elemento pai de botaoDeletar que é a li digitada(31) de deleta com a funcao remove()
 
    return botaoDeleta
 
 }
 
 
export default BotaoDeleta