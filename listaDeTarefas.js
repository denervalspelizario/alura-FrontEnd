
const criarTarefa = (evento) => { // funcao disparada apó o clique (ler linha 20)

   evento.preventDefault() // funcao que garante o comportamento padrao essa funcao garante o msm comportamento em diferentes
                           // browser evitando comprtamento diferentes entre browsers 

   const  input =  document.querySelector('[data-form-input]') // variavel que recebe dom de item input (linha 25 de index.html)

   const valor = input.value // variavel valor recebe dado(value) de input digitado ou seja foi digitado algo este valor sera 
                                  // recebido por esta variável     

   console.log(valor) // imprimi no console o valor(value) digitado no input(linha 13) 

}





const  novaTarefa =  document.querySelector('[data-form-button]') // variavel que recebe dom de item button (linha 26 de index.html)

//console.log(input)  confirmando no atravez do console.log se esta fucnionando o dom
//console.log(novaTarefa)  confirmando no atravez do console.log se esta fucnionando o dom


novaTarefa.addEventListener('click', criarTarefa)  // na funcao recebe o click (acao do cique la no botao linha 26 index.html) 
                                                   // e o segundo parametro é a funcao que vai dar ação depois do clique (leia linha 2)   
                                                   // addEventListener para escutar eventos no elemento


 /*
    Explicando  pega-se o elemento formulario atravez do dom e adiciona em uma variável novaTarefa
    nesta variavel adiciona um evento atravez do addEventlistener  que tem 2 parametros 
    1 parametro será o click
    2 parametro a ação, que atravez do dom a variavel input recebe o elemento input
      e depois  adiciona na variável valor o dado que foi digitado no input
    E depois da variável pegar o dado digitado é impressa por um clg   
 */

