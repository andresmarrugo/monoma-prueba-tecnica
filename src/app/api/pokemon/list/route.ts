import { Pokemons } from '@/types/api';

export async function GET(req: Response, res: Request) {
    try {
        const { searchParams } = new URL(req.url);
        let _page = Number(searchParams.get("page"));

        const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${_page * 10}&limit=10`)).json() as Pokemons;
        const pokemonDetails = await Promise.all(
            response.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                return pokemonData;
            })
        );

        return Response.json({ count: response.count, pokemonDetails });
    } catch (error) {
        return Response.json({ error: 'Error al obtener datos de la API' });
    }
}