
( () => {

const criarTarefa = (evento) => { // funcao disparada apó o clique (ler linha 20)

   evento.preventDefault() // funcao que garante o comportamento padrao essa funcao garante o msm comportamento em diferentes
                           // browser evitando comprtamento diferentes entre browsers 

   // acesso ao dom                        
   const lista = document.querySelector('[data-list]')

   // acesso ao elemento input
   const  input =  document.querySelector('[data-form-input]') // variavel que recebe dom de item input (linha 25 de index.html)
   
   // acesso ao dado digitado no input
   const valor = input.value // variavel valor recebe dado(value) de input digitado ou seja foi digitado algo este valor sera 
                                  // recebido por esta variável     


   // criacao de adicao de elemento(li) com a resposta do input
                                    
   const tarefa = document.createElement('li')    // createElemente funcao para criar elemento, variavel que recebe elemento criado lista(li)     
   tarefa.classList.add('task') // a variavel tarefa adicionando class de css ao elelemto no caso li ou seja a li terá classe task                     
   
   const conteudo = `<p class='content'> ${valor}</p>` // variavel que recebe um template string com um paragrafo que tem a variavel valor(linha 9)

   tarefa.innerHTML = conteudo // ou seja tarefa(linha 16) recebe conteudo(linha 18 paragrafo comvalor de input)

   tarefa.appendChild(BotaoConclui()) // estou adicionando a const tarefa um filho que é a funcao botaoConclui(linha 52)
   tarefa.appendChild(BotaoDeleta())  // adicionando como filho a tarefa botao de exclusao de li
   lista.appendChild(tarefa) // estou adicionado a lista(que recebe todo o dom linha 7) o filho tarefa(linha 20)
   // o appendChild vai sempre adicionar um nó e sempre aparecerá por ultimo na lista neste caso

   

   input.value = ''
}





const  novaTarefa =  document.querySelector('[data-form-button]') // variavel que recebe dom de item button (linha 26 de index.html)

//console.log(input)  confirmando no atravez do console.log se esta fucnionando o dom
//console.log(novaTarefa)  confirmando no atravez do console.log se esta fucnionando o dom


novaTarefa.addEventListener('click', criarTarefa)  // na funcao recebe o click (acao do cique la no botao linha 26 index.html) 
                                                   // e o segundo parametro é a funcao que vai dar ação depois do clique (leia linha 2)   
                                                   // addEventListener para escutar eventos no elemento


// criando componente para conclusão de tarefa


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


})() // todo o codigo vai estar dentro de uma função anonima que vai ser executado no momento a inicializacao atravez destas () no final