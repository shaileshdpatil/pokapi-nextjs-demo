"use client";
import Image from "next/image";
import usePokemon from "@/hooks/usePokemon";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const PokemonFilter = () => {
    const router = useRouter();
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const { fetchPokemonTypes } = usePokemon();

    useEffect(() => {
        fetchPokemonTypes().then(response => setPokemonTypes(response.results));
    }, []);

    const handleSearch = (e) => {
        const { name, value } = e.target;
        const currentQuery = new URLSearchParams(window.location.search);
        if (value) {
            currentQuery.set(name, value);
        } else {
            currentQuery.delete(name);
        }
        const queryString = currentQuery.toString();
        router.push(`?${queryString}`);
    };

    return (
        <form className="flex gap-6">
            <div className="flex flex-wrap md:flex-nowrap gap-6 w-full ">
                <div className="w-full">
                    <select
                        name="type"
                        onChange={handleSearch}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Select Pokemon Type</option>
                        {(pokemonTypes || []).map(pokemon => <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>)}
                    </select>
                </div>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src="/assets/search.svg" alt="search0" height={18} width={18}/>
                    </div>
                    <input type="text"
                           name="search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search Pokemon by name"
                           onChange={handleSearch}
                    />
                </div>
                <button type="submit" className="hidden">Search</button>
            </div>
        </form>
    );
};

export default PokemonFilter;