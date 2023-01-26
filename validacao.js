function checkKickValue(kick) {
    const number = +kick;

    if (invalidKick(number)) {
        elementKick.innerHTML += '<div>Valor inválido</div>'

        return
    }

    if (numberGreaterOrLessThanAllowed(number)) {
        elementKick.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${lowerValue} e ${higherValue}</div>
        `
        return
    }

    if (number === drawnNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${drawnNumber}</h3>

        <button id="play-again" class="btn-play">Jogar novamente</button>
        `
    } else if (number > drawnNumber) {
        elementKick.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `
    } else {
        elementKick.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
        `
    }

}

function invalidKick(number) {
    return Number.isNaN(number);
}

function numberGreaterOrLessThanAllowed(number) {
    return number > higherValue || number < lowerValue;
}

document.body.addEventListener('click', e => {
    if(e.target.id == "play-again") {
        window.location.reload();
    }
})