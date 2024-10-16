import Image from "next/image";
import Link from "next/link";

const PokemonLists = async ({pokemons}) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6">
            {(pokemons || []).map((pokemon) => (
                <div className="relative flex p-4 flex-col bg-white shadow-sm border border-slate-200 rounded-lg"
                     key={pokemon.id}>
                    <Link href={`/pokemon-info/${pokemon.id}`}>
                        <div className="relative h-56 overflow-hidden text-white rounded-md">
                            <Image
                                src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                                alt={pokemon.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="cursor-pointer"
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </Link>
                    <div className="mt-6">
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold capitalize">
                            {pokemon.name}
                        </h6>
                        <ul className="list-decimal pl-4 text-slate-600 leading-normal font-semibold capitalize">
                            {pokemon.types.map((pok, index) => <li key={pok.type.url}>{pok.type.name}</li>)}
                        </ul>
                    </div>
                    <div className="flex justify-center mt-6">
                        <Link href={`/pokemon-info/${pokemon.id}`}>
                            <button
                                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PokemonLists;