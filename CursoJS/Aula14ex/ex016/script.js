function contar() {
    var ini = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var pas = Number(document.getElementById('txtpasso').value)

    if (pas == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        pas = 1
    }

    if (ini == 0 || fim == 0 || pas == 0) {

        res.innerHTML = 'Impossível contar!'

    } else {
        res.innerHTML = 'Contando: <br>'

        for (ini; ini <= fim; ini += pas) {

            res.innerHTML += `Valor ${ini} > `
        }
    }
}
