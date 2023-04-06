function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.guthubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}"/>
            </div>
        </li>
    `;
}

function corrigeOrder (order) {
    if (order.length() == 1) {
        return "00"+order;
    } else if (order.length() == 2) {
        return "0"+order;
    } else {
        return order;
    }
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
});