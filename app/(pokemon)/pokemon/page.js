import {Fragment} from "react";
import PokemonFilter from "@/app/(pokemon)/_components/PokemonFilter";
import PokemonLists from "@/app/(pokemon)/_components/PokemonLists";
import usePokemon from "@/hooks/usePokemon";
import {filterPokemons} from "@/app/(pokemon)/pokemon/actions";

export default async function PokemonPage({searchParams}) {
    const { fetchPokemons } = usePokemon();
    const pokemons = await fetchPokemons();
    const filteredPokemons = filterPokemons(pokemons, searchParams);

    return (
        <Fragment>
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-black md:text-3xl lg:text-4xl">Pokemon App</h1>
            <PokemonFilter/>
            <PokemonLists pokemons={filteredPokemons}/>
        </Fragment>
    )
}