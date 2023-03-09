
import BotaoConclui from "./2_Javascript_Dom/Ceep/components/concluiTarefas"
import BotaoDeleta from "./2_Javascript_Dom/Ceep/components/deletaTarefa"

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



