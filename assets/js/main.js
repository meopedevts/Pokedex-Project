const pokemonList = document.getElementById('pokemonList');
const divButton = document.getElementById('div-button');
const loadMoreButton = document.getElementById('loadMoreButton');
const firstGen = document.getElementById('first');
const secondGen = document.getElementById('second');
const thirdGen = document.getElementById('third');
const fourthGen = document.getElementById('fourth');
let maxRecords;
const limit = 20;
let offset;

function corrigeId (id) {
    if (id.length == 1) {
        return '00'+id;
    } else if (id.length == 2) {
        return '0'+id;
    } else {
        return id;
    }
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${corrigeId((pokemon.id).toString())}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.imagem}" alt="${pokemon.name}"/>
            </div>
        </li>
        `).join('');
        pokemonList.innerHTML += newHtml;
    });
}

firstGen.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    offset = 0;
    maxRecords = 151;
    loadPokemonItens(offset, limit);
    divButton.appendChild(loadMoreButton);
});

secondGen.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    offset = 151;
    maxRecords = 251;
    loadPokemonItens(offset, limit);
    divButton.appendChild(loadMoreButton);
});

thirdGen.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    offset = 251;
    maxRecords = 386;
    loadPokemonItens(offset, limit);
    divButton.appendChild(loadMoreButton);
});

fourthGen.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    offset = 386;
    maxRecords = 493;
    loadPokemonItens(offset, limit);
    divButton.appendChild(loadMoreButton);
});

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    };
});

function firstAccess() {
    offset = 0;
    maxRecords = 151;
    loadPokemonItens(offset, limit);
}

firstAccess();