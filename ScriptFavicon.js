function IconReplace() { 
    let caminho = window.location.pathname.split('/')
    let Nome = caminho[caminho.length - 1]
    let Disc = null

    if (Nome == 'Escolha.html' || Nome == 'Play.html') {
        Disc = [
            'imagem/pedra.ico',
            'imagem/papel.ico',
            'imagem/tesoura.ico'
        ]
    }
    else if (Nome == 'Jogada.html' || Nome == 'PlayPlayer.html' || Nome == 'PlayBot.html') {
        Disc = [
            '../imagem/pedra.ico',
            '../imagem/papel.ico',
            '../imagem/tesoura.ico'
        ]
    }

    let vez = 1

    setInterval(function () {
        try {
            document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach(el => el.remove());
        }
        catch {
            
        }
        let newFavi = document.createElement('link')
        newFavi.rel = 'shortcut icon'
        newFavi.type = 'image/x-icon'
        newFavi.href = Disc[vez] + "?v=" + new Date().getTime()
        document.head.appendChild(newFavi)
        vez++
        if (vez == 3) {
            vez = 0
        }
    }, 5000);
}


IconReplace()
