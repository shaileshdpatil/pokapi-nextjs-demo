const usePokemon = () => {
    const fetchPokemonTypes = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type');
        return res.json()
    };

    const fetchPokemonData = async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return {
            id: data.id,
            name: data.name,
            types: data.types,
            image: data.sprites.front_default,
        };
    }

    const fetchPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await res.json();
        return await Promise.all(data.results.map(fetchPokemonData));
    };

    return {fetchPokemonTypes, fetchPokemons};
};

export default usePokemon;