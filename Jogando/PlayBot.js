function JogadaBot() {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
}


function AnimaçãoPedra(img, jogador = 'player') {
    let style = img.style
    setTimeout(function () {
        if (jogador.toLowerCase() == 'player') {
            setTimeout(function () {
                style.transform = 'rotate(90deg)' // deixao  elemento em um angulo 90 grau
                setTimeout(function () { // espera 1s
                    style.transition = '0s' // botamos a animcao em 0s, ou seja  sem animação
                    img.src = '../imagem/pedra90deg.png' // add a imagem em 90 grau
                    style.transform = 'rotate(0deg)' // Voltando ao angulo padrao
                    setTimeout(function () { // esperar um 1s
                        style.transition = '1s' // voltando a animação de 1s um transicao
                        style.transform = 'translate(100px, 0px)' // movendo o elemento ha 100px no eixo X
                    }, 1000)
                }, 1000)
            }, 1000)
        }

        else if (jogador.toLowerCase() == 'bot') {
            setTimeout(function () {
                style.transform = 'rotate(-90deg)'
                setTimeout(function () {
                    img.src = '../imagem/pedra-90deg.png'
                    style.transition = '0s'
                    style.transform = 'rotate(0deg)'
                    setTimeout(function () {
                        style.transition = '1s'
                        style.transform = 'translate(-100px, 0px)'
                    }, 1000)
                }, 1000)
            }, 1000);
        }
        else {
            console.log('?????????????????????????')
        }
    }, 500)
}


function AnimaçãoPepelAndTesoura(img, jogador) {
    console.log('teu cu viado')
    let style = img.style
    setTimeout(function () {
        let pos = ''
        if (jogador == 'player') {
            console.log('foi1')
            pos = 'translate(100px, 0px)'
        }
        else if (jogador == 'bot') {
            pos = 'translate(-100px, 0px)'
            console.log('foi2')
        }
        style.transform = pos
    }, 1000)
}

function Resultado() {
    function QuemGanhou() {
        let player = 1//Number(window.localStorage.getItem('JogadaPlayer'))
        let bot = 1//JogadaBot()
        //botando a img das jogadas
        Player.src = Disc[player]
        Bot.src = Disc[bot]

        if (player == bot) {
            return {Ganhado : 'Imparte', jogadas : {'bot' : bot, 'player' : player}}
        }
        else if 
        (
            player == 0 && bot == 2 ||
            player == 1 && bot == 0 ||
            player == 2 && bot == 1
        ) {
            return {Ganhado : 'player', jogadas : {'bot' : bot, 'player' : player}}
        }
        else {
            return {Ganhado : 'bot', jogadas : {'bot' : bot, 'player' : player}}
        }
    }


    function AddPontos(jogador, obj) {
        if (jogador == 'player') {
            obj.player ++
            window.localStorage.setItem('pontos', JSON.stringify(obj))
        }
        else if (jogador = 'bot') {
            obj.bot ++
            window.localStorage.setItem('pontos', JSON.stringify(obj))
        }
        else {
            window.localStorage.setItem('pontos', JSON.stringify({'player' : obj.player, 'bot' : obj.bot}))
        }
    }


    function Animar(play_bot, play_ply) {
        /*
        Essa porra vai trabalha com as seguinte funcoes
        -AnimaçãoPedra
        -AnimaçãoPapelAndTesoura
        */
        // Player
        if (play_ply == 0) { // se a jogada do player for pedra
            console.log('pedra player')
            TimeAnimar = 4500
            AnimaçãoPedra(Player, 'player')
        }
        else {
            let time = 0
            if (play_bot == 0) {

                time = 2500
            }
            setTimeout(function () {
                AnimaçãoPepelAndTesoura(Player, 'player')
            },time)
        }
        //Bot
        if (play_bot == 0) { // se a jogada do bot for pedra
            TimeAnimar = 5000
            AnimaçãoPedra(Bot, 'bot')
        }
        else {
            let time = 0
            if (play_ply == 0) {

                time = 2500
            }
            setTimeout(function () {
                AnimaçãoPepelAndTesoura(Bot, 'bot')
            }, time)
        }
    }


    function AlguemGanhou() {
        let obj = JSON.parse(window.localStorage.getItem('pontos'))
        if (obj.player == 3) {
            Vencedo('Player')
            Ganhado = true
        }
        else if (obj.bot == 3) {
            Vencedo('Bot')
            Ganhado = true
        }
        else {
            console.log('Ninguem ganhou paizao')
        }
    }


    //Resultado de quem ganhou e a jogadas
    let Pontos = JSON.parse(window.localStorage.getItem('pontos'))
    let TimeAnimar = 3000 // o tempo da proxima animação
    let infoList = QuemGanhou()
    let jogadas = infoList.jogadas // jogadas retonadas em um obj/dicionario
    let Ganhando = infoList.Ganhado // retorna o ganhado
    let Ganhado = false // essa varivel vai dizer se alguem ganhou, isso vai mudar a direção do script
    //Animar as img
    Animar(jogadas.bot, jogadas.player)
    console.log(TimeAnimar)
    setTimeout(function () {
        //Text up
        const UpPlayer = window.document.getElementById('1+Right')
        const UpBot = window.document.getElementById('1+Left')
        //Conteiner
        let conteiner = window.document.querySelector('.conteiner')
        //Verificar quem ganhou essa jogada
        if (Ganhando == 'player') {
            console.log('Player Ganhou')
            AddPontos('player', Pontos)
            //+1
            UpPlayer.style.opacity = 1
            UpPlayer.style.animation = 'up 1.5s ease-in-out 1 0s forwards'
            //Conteiner
            conteiner.style.animation = 'ganhar 0.5s ease-out 3 both'
            //Pontos aumentando
            PontosPlayerText.style.animation = 'UpPonto 0.5s ease-in-out 1 normal'
            // eliminando teu cu
            Bot.style.opacity = 0
            //fds
            AlguemGanhou() // chamanda a funcao que vai dizer se alguem ganhou
            setTimeout(function () {
                Player.style.transform = 'translateX(170px)'
                setTimeout(function () {
                    if (!Ganhado) {
                        location.href = 'Jogada.html' 
                    }
                }, 2000)
            }, 2000)
        }
        else if (Ganhando == 'bot') {
            console.log('Bot ganhou')
            AddPontos('bot', Pontos)
            UpBot.style.opacity = 1
            UpBot.style.animation = 'up 1.5s ease-in-out 1 0s forwards'
            //Conteiner
            conteiner.style.animation = 'perde 0.5s ease-out 3 both'
            //Pontos aumentando
            PontosBotText.style.animation = 'UpPonto 0.5s ease-in-out 1 normal'
            //"eleminando" o derrotado vai toma no cu
            Player.style.opacity = 0
            //fds
            AlguemGanhou() // chamanda a funcao que vai dizer se alguem ganhou
            setTimeout(function () {
                Bot.style.transform = 'translateX(-170px)'
                setTimeout(function () {
                    if (!Ganhado) {
                        location.href = 'Jogada.html'
                    }
                }, 2000)
            }, 2000)
        }
        else {
            setTimeout(function () {
                conteiner.style.animation = 'empate 0.5s ease-out 5 both'
                Bot.style.animation = 'Emparte 2s ease-in-out 1'
                Player.style.animation = 'Emparte 2s ease-in-out 1'
                AlguemGanhou() // chamanda a funcao que vai dizer se alguem ganhou
                setTimeout(function () {
                    Bot.style.display = 'none'
                    Player.style.display = 'none'
                    setTimeout(function () {
                        if (!Ganhado) {
                            location.href = 'Jogada.html'
                        }
                    }, 1000)
                }, 2000)
            }, 1000)
        }
        //Atualizando text
        GetPontos(Pontos)
    } ,TimeAnimar)
}


function AleatorioImg(max = 15) {
    cont = 0
    let loop = setInterval(function () {
        Player.src = Disc[JogadaBot()]
        Bot.src = Disc[JogadaBot()]
        ///aqui fdp
        cont ++
        if (cont == max) {
            clearInterval(loop)
        }
    }, 200)
}


function GetPontos() {    
    let obj = JSON.parse(window.localStorage.getItem('pontos'))
    PontosBotText.innerText = obj.bot 
    PontosPlayerText.innerText = obj.player
} 


function Vencedo(quem) {
    function DesfoqueGeral() {
        let list = window.document.querySelectorAll('.conteiner')
        for (let elemento of list) {
            elemento.style.filter = 'blur(5px)'
        }
    }


    //Funcoes chamadas conteiner
    AleatorioImg(10000) // vai fica trocando de img pra deixa um negocio bem doido paizao
    GetPontos() // add os pontos final.
    //Text ganhado
    document.getElementById('Resultado').innerText = `${quem} Ganhou` // add o text de quem ganhou 
    const DivDestaque = document.getElementById('Vencedo') // pegar a div responsavel por deixa o texto em destaque paee
    //Div destaque
    DivDestaque.style.display = 'flex'
    DivDestaque.style.animation = 'glow 1.5s infinite alternate forwards, Àparecendo 4s ease-in-out 1 forwards'
    //   animation: glow 1.5s infinite alternate forwards, Àparecendo 4s ease-in-out 1 forwards ;
    //Conteiner principal
    const Conteiner = document.querySelector('.conteiner') // pegando o conteiner com DOM paizao
    Conteiner.style.animation = 'desfoque 4s ease-in-out 1' //Animação de desfoque da div
    //botao de voltar
    let Voltar = window.document.querySelector('.voltar') // Botao de voltar
    let Clicado = false // variavel responsavel por limita o clique do bagulho
    Voltar.style.display = 'flex' // aplicado o display flex
    setTimeout(function () {
        localStorage.clear() // limpando as variavels
        DesfoqueGeral() // desfoque geral no conteiner paizao
        Voltar.style.animation = 'Aparece 2s ease-in-out 1 forwards' // animação de aparece, ele  sair de fininho
        setTimeout(function () { 
            Voltar.style.cursor = 'pointer' // Cursor fica com style "pointer" ao passa por cima
            Voltar.style.opacity = 1 // transparencia pra 1 = sem transparencia
            Voltar.addEventListener('click', () => {
                if (!Clicado) {
                    Clicado = true // pra nao se chamanda novamente
                    Voltar.style.animation = 'Clica 1s ease-in-out 1 forwards' // animação de 'voltando'
                    setTimeout(() => {
                            window.location.href = '../Play.html' // indo pra outra pagina
                    }, 2000)
                }
            })
        }, 2100)
    }, 4000)
}  
//Imagens
const Player = window.document.querySelector('.ImgPlayer') // imagem do player
const Bot = window.document.querySelector('.ImgBot') // imagem do bot
//Text Pontos
const PontosBotText = window.document.querySelector('.PontoBot')
const PontosPlayerText = window.document.querySelector('.PontoPlayer')

let Disc = [
    '../imagem/pedra.png',
    '../imagem/papel.png',
    '../imagem/tesoura.png'
]

AleatorioImg()
GetPontos()
setTimeout(function () {
    Resultado()
}, 3000)
