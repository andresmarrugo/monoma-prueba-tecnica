"use client"
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Pokemon } from '@/types/api';
import Image from 'next/image';
import Spiner from '@/components/spiner';

const PokemonDetails = () => {
    const { id } = useParams()
    const router = useRouter()
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    return;
                }

                const response = await fetch(`/api/pokemon/${id}`);
                const data = await response.json();

                setPokemonData(data as Pokemon);
            } catch (err) {
                console.error('Error al obtener datos de la API', err);
                setError('Error al obtener datos de la API');
            }
        };

        fetchData();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!pokemonData) {
        return <Spiner />;
    }

    const abilities = pokemonData?.abilities.map((ability) => ability.ability.name).join(', ');
    const types = pokemonData?.types.map((type) => type.type.name).join(', ');

    return (
        <div className="container mx-auto mt-8 px-3 h-screen">
            <h1 className="text-3xl font-semibold mb-4">Detalles del Pokémon</h1>
            <div className="rounded-lg shadow-md p-4 card">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 capitalize">{pokemonData?.name}</h2>
                <div className="flex flex-col sm:flex-row items-center mb-4">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <Image
                            src={pokemonData?.sprites?.front_default || ''}
                            alt={`${pokemonData?.name} imagen`}
                            className="w-full h-auto"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <p className='text-3xl'>
                            <strong>Altura:</strong> {pokemonData?.height} Dm.
                        </p>
                        <p className='text-3xl'>
                            <strong>Peso:</strong> {pokemonData?.weight} Kg.
                        </p>
                        <p className='text-3xl'>
                            <strong>Habilidades:</strong> {abilities}
                        </p>
                        <p className='text-3xl'>
                            <strong>Tipo:</strong> {types}
                        </p>

                        <button
                            id="back-btn"
                            role='button'
                            onClick={() => router.back()}
                            className="mt-4 bg-green-500 hover:bg-green-600 focus:bg-green-400 text-white py-2 px-4 rounded"
                        >
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
