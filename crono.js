/* VARIÁVEIS GLOBAIS */
var hr = 0
var min = 0
var seg = 0
var mil = 0

var tempo = 10
var cron
var mostra

var divPONTOS = document.querySelectorAll('.ponto')
var divHR = document.getElementById('hr')
var divMIN = document.getElementById('min')
var divSEG = document.getElementById('seg')
var divMIL = document.getElementById('mil')

/* COLOCANDO ':' NAS DIVS DAS VARIÁVEIS ACIMA */
for (var l = 0; l < divPONTOS.length; l++) {
    divPONTOS[l].innerHTML = ':'
}

/* FUNÇÃO QUE FAZ OS ':' DOIS PONTOS PISCAREM */
pisca = () => {
    mostra = setInterval(() => {
        if (this.seg % 2 == 0) {
            for (var l = 0; l < divPONTOS.length; l++) {
                divPONTOS[l].innerHTML = ':'
            }
        } else {
            for (var l = 0; l < divPONTOS.length; l++) {
                divPONTOS[l].innerHTML = '&#160;'
            }
        }
    }, 1)
}

/* FUNÇÃO PARA O BOTÃO START */
var start = () => {
    pisca()
    cron = setInterval(timer, tempo)
    for (var l = 0; l < divPONTOS.length; l++) {
        divPONTOS[l].innerHTML = ''
    }
    document.getElementById('start').removeEventListener('click', start)
}

/* FUNÇÃO PARA O BOTÃO PAUSE */
var pause = () => {
    clearInterval(cron)
    document.getElementById('start').addEventListener('click', start)
}

/* FUNÇÃO PARA O BOTÃO STOP */
var stop = () => {
    clearInterval(cron)
    clearInterval(mostra)
    hr = 0
    min = 0
    seg = 0
    mil = 0

    divHR.innerHTML = '00'
    divMIN.innerHTML = '00'
    divSEG.innerHTML = '00'
    divMIL.innerHTML = '000'
    document.getElementById('start').addEventListener('click', start)
}

/* FUNÇÃO PRINCIPAL  */
var timer = () => {

    mil++
    if (mil == 100) {
        mil = 0
        seg++
        if (seg == 60) {
            seg = 0
            min++
            if (min == 60) {
                min = 0
                hr++
            }

        }
    }

    divHR.innerHTML = (hr < 10 ? '0' + hr : hr)
    divMIN.innerHTML = (min < 10 ? '0' + min : min)
    divSEG.innerHTML = (seg < 10 ? '0' + seg : seg)
    divMIL.innerHTML = (mil < 100 ? (mil < 10 ? '00' + mil : '0' + mil) : mil)
}

/* AÇÕES DOS BUTÕES  */
document.getElementById('start').addEventListener('click', start)
document.getElementById('pause').addEventListener('click', pause)
document.getElementById('reset').addEventListener('click', stop)