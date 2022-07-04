const inputCripto = document.querySelector('#cripto');
const valor = document.querySelector('.valor');



inputCripto.addEventListener('change', function () {
    if (!inputCripto.value) {
        return;
    }

    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + inputCripto.value + '/ticker/');

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valor.textContent = Number(body.ticker.high).toFixed(2);
        });
    });
});