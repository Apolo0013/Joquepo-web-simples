const play = window.document.querySelector('.play')
let Play = false // para garantir a funcao quq a funcao so seja chamada um vez

play.addEventListener('click' , function () { // se o usuario clica
    if (!Play) {
       
        let ColorirText = () => {
            //Funcao que vai deixa cada string do titulo de uma cor so, como azul e vermelho
            let ListaLetras = window.document.querySelectorAll('.letrasH1')  // lista das string
            let indexred = 0 // index da strins
            let loopred = setInterval(function () { // loop que vai mudar as cor de cada um das letras
                if (indexred >= 1) { // se indexred igual o maior
                    //aqui é pra "apagar" o rastro do vermelho
                    ListaLetras[indexred - 1].style.color = 'white' // mundando a cor
                }

                if (indexred < ListaLetras.length) { // se o indexred for menor
                    ListaLetras[indexred].style.color = 'red' // mudando a cor pra vermelho
                    indexred ++ // add mais 1 na variavel na indexred
                }
                else if (indexred == ListaLetras.length - 1) { // se o indexred chegar no final dos indices
                    // aqui mudanmos a cor e o apagamos o rastro do penultimo e  ultimo indice
                    ListaLetras[indexred - 1].style.color = 'white' // "apagando" o rastro do penultimo
                    ListaLetras[indexred].style.color = 'red' // da a cor pro ultimo indice
                    clearInterval(loopred) // parando o loop atual
                    setTimeout(function () {ListaLetras[indexred].style.color = 'white'}, 150) // apagando o rastro do ultimo indice do red gld
                }
            }, 150)

            // um tempo antes de chama a outra funcao
            setTimeout(function () { // depois de 1s de exercução do vermelho vem o azul por tras aqui é a mesma ideia.
                let indexblue = 0
                let loopblue = setInterval(function () {
                    if (indexblue >= 1) {
                        ListaLetras[indexblue - 1].style.color = 'white'
                    }   

                    if (indexblue < ListaLetras.length) {
                        ListaLetras[indexblue].style.color = 'blue'
                        indexblue ++
                    }
                    else if (indexblue == ListaLetras.length - 1) {
                        ListaLetras[indexblue - 1].style.color = 'white'
                        console.log(indexblue)
                        ListaLetras[indexblue].style.color = 'blue'
                        clearInterval(loopblue)
                        setTimeout(function () {ListaLetras[indexblue].style.color = 'white'}, 150)
                    }

                }, 150)
            
            }
            , 1000)

            
        }
        Play = true
        this.style.animation = 'Play 1.5s ease-in-out 1 forwards'
        window.document.querySelector('.h1Titulo').style.animation = 'Titulo 1s ease-in-out 1 forwards'

        setTimeout(function () {ColorirText()}, 1500)
        let fds = window.document.querySelectorAll('.letrasH1') // lsita de letras
        let index = 0 // indices das letras
        setTimeout(function () { 
            let DeletarLoop = setInterval(function () { /// loop resposnavel por deletar as mesma, no caso as letras dentro da lista
                fds[index].remove() // removendo
                index ++ // add +1
                if (index == fds.length) { // se index for igual a quantidade de letras que tem dentro dessa lista, sigfinica que chegamos ao fim
                    setTimeout(function () {
                        window.document.location.href = 'Escolha.html' // indo pra proxima pagina
                    }, 500)
                    clearInterval(DeletarLoop) // parando o loop
                }    
            }, 100)
        }, 4000)

    }
})

/*
let trans = 1
        let loop = setInterval(() => {
            trans -= 0.1
            this.style.opacity = trans
            this.style.height = `${trans * 100}%`
            if (window.getComputedStyle(this).marginTop == '0px') {
                this.remove()
                let fds = window.document.querySelectorAll('.letrasH1')

                let index = 0
                setTimeout(function () { 
                    let DeletarLoop = setInterval(function () {
                        fds[index].remove()
                        index ++
                        if (index == fds.length) {
                            //window.document.location.href = 'Escolha.html'
                            clearInterval(DeletarLoop)
                        }    
                    }, 100)
                }, 300)
                clearInterval(loop)
            }
    }, 100)
*/