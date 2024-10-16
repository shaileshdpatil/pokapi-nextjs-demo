export const filterPokemons = (pokemons, { type, search }) => {
    return pokemons.filter((pokemon) => {
        const matchesType = !type || pokemon.types.some((t) => t.type.name === type);
        const matchesSearch = !search || pokemon.name.toLowerCase().includes(search.toLowerCase());
        return matchesType && matchesSearch;
    });
};