const pokemon = document.querySelector('#pokemon');
const nome = document.querySelector('.nome');
const img = document.querySelector('.img');



pokemon.addEventListener('change', function () {
    if (!pokemon) {
        return
    }
    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.value);

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            nome.textContent = body.name.slice(0, 1).toUpperCase() + body.name.slice(1, body.name.length);
            img.src = body.sprites.front_default;
            img.alt = body.name;
        });
    });
});