const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click',()=>{
    //pego o valor do input
    const campoUsuario = document.querySelector('#filmeInput').value
    //cria um novo li
    const itemlista = document.createElement('li')
    //adiciona o item a lista
    listaFilmes.append(itemlista)
    itemlista.innerHTML = campoUsuario
    //mudar o estilo
    itemlista.style.background = 'red'
    //adicionar uma coisa
    itemlista.classList.add('ativo')
    //liga/desliga uma classe
    itemlista.classList.toggle('ativo')
})

//window.onload - quando a página carregar, faça...