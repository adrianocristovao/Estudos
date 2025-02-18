function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h3>Agora são ${hora} horas.</h3>`

    if (hora >= 22 || hora < 4) {
        msg.innerHTML += `<h3>Boa noite!</h3>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#001b3a'
    } else if (hora >= 4 && hora < 10) {
        msg.innerHTML += `<h3>Bom dia!</h3>`
        img.src = 'fotomanha.png'
        document.body.style.background = '#b190b8'
    } else if (hora >= 10 && hora < 16) {
        msg.innerHTML += `<h3>Bom dia!</h3>`
        img.src = 'fotodia.png'
        document.body.style.background = '#42b7d0'
    } else {
        msg.innerHTML += `<h3>Boa tarde!</h3>`
        img.src = 'fototarde.png'
        document.body.style.background = '#ff550a'
    }
}