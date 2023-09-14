import { Pokemon, Pokemons } from '@/types/api';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page"));

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`, { cache: 'force-cache' });
    const pokemons = await response.json();
    const pokemonDetails = await Promise.all(
        pokemons.results.map(async (pokemon: any) => {
            const pokemonResponse = await fetch(pokemon.url, {
                cache: 'force-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const pokemonData = await pokemonResponse.json();
            return pokemonData;
        })
    );

    return NextResponse.json({ count: pokemons.count, pokemonDetails });

}
