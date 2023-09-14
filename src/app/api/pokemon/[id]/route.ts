import { Pokemon } from '@/types/api'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)).json() as Pokemon
        return Response.json(response, { status: 200 })
    } catch (error) {
        return Response.json({ error: 'Error al obtener datos de la API' });
    }

} 