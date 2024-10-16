"use client"
import Image from "next/image";

const PokemonInformationCard = ({data}) => {
    return (
        <div className="relative max-w-screen-md w-full mx-auto">
            <div
                className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg"
                key={data.id}
            >
                <div className="relative h-56 overflow-hidden text-white rounded-md p-4 my-6">
                    <Image
                        src={`https://img.pokemondb.net/artwork/${data.name}.jpg`}
                        alt={data.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <span className="text-lg p-4 font-bold uppercase">{data.name}</span>
                <div className="p-4 bg-light">
                    <div className="flex items-start mb-3">
                        <span className="font-semibold w-1/3">Name : </span>
                        <h6 className="text-slate-800 text-sm font-medium uppercase w-2/3">
                            {data.name}
                        </h6>
                    </div>
                    <div className="flex items-start mb-3">
                        <span className="font-semibold w-1/3">Type : </span>
                        <h6 className="text-slate-800 text-sm font-medium capitalize w-2/3">
                            {data.types.map(pok => pok.type.name).join(', ')}
                        </h6>
                    </div>
                    <div className="flex items-start mb-3">
                        <span className="font-semibold w-1/3">Stats : </span>
                        <h6 className="text-slate-800 text-sm font-medium capitalize w-2/3">
                            {data.stats.map(pok => pok.stat.name).join(', ')}
                        </h6>
                    </div>
                    <div className="flex items-start mb-3">
                        <span className="font-semibold w-1/3">Abilities : </span>
                        <h6 className="text-slate-800 text-sm font-medium capitalize w-2/3">
                            {data.abilities.map(pok => pok.ability.name).join(', ')}
                        </h6>
                    </div>
                    <div className="flex items-start mb-3">
                        <span className="font-semibold w-1/3">Some Moves : </span>
                        <h6 className="text-slate-800 text-sm font-medium capitalize w-2/3">
                            {data.moves.map(pok => pok.move.name).join(', ')}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonInformationCard;