var btn = document.querySelector('#btn')
btn.addEventListener('click', calcular)

function calcular() {
    var nt1 = document.querySelector('#notaProva');
    var nt2 = document.querySelector('#notaPim');
    var nt3 = document.querySelector('#notaAva');
    var media = document.querySelector('#media');
    var res = Number(nt1.value) * 0.7 + Number(nt2.value) * 0.2 + Number(nt3.value) * 0.1;
    if(res >= 5.8) {
        media.innerHTML = `Sua média foi <strong>${res.toFixed(2)}.<br/>Você <strong>PASSOU</strong>!`
    } else if (res == 0){
        media.innerHTML = `Digite os valores!`
    }else {
        media.innerHTML = `Sua média foi <strong>${res.toFixed(2)}</strong>.<br/>Você <strong>REPROVOU!</strong>`
    }
}   