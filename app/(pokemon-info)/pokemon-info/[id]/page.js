import {Fragment} from "react";
import Link from "next/link";
import Head from "next/head";
import PokemonInformationCard from "@/app/(pokemon-info)/pokemon-info/_components/PokemonInformationCard";
import {getPokemonInfo} from "@/app/(pokemon-info)/pokemon-info/[id]/actions";

export async function generateMetadata({ params }, parent) {
    const post = await getPokemonInfo(params.id);
    return {
        title: `${post.name} - Pokemon Info`,
        description: `Get information about ${post.name}, a Pokémon.`,
    };
}

export default async function PokemonInfo({params})  {
    const data = await getPokemonInfo(params.id);
    return (
        <Fragment>
            <Head>
                <title>{data.name} - Pokémon Info</title>
                <meta name="description" content={`Get information about ${data.name}, a Pokémon.`} />
            </Head>
            <Link href="/pokemon">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Back
                </button>
            </Link>
            <PokemonInformationCard data={data}/>
        </Fragment>
    )
}