"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { Pokemon } from '@/types/api';
import Image from 'next/image';
import Spiner from '@/components/spiner';


function PokemonList() {
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/pokemon/list?page=${page}`);
                const newData = await response.json();
                const maxPages = Math.floor(Number(newData.count) / 10)
                setCount(maxPages)
                setPokemons(newData.pokemonDetails);
            } catch (error) {
                console.error('Error al obtener la lista de Pokémons', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div className="container mx-auto mt-8 px-3 h-full">
            <h1 className="text-3xl font-semibold mb-4">Lista de Pokémons</h1>
            {isLoading ? (
                <Spiner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pokemons?.map((pokemon: Pokemon) => (
                        <div
                            id={pokemon.name}
                            key={pokemon.name}
                            onClick={() => router.push(`/pokemon/${pokemon.id}`)}
                            className="bg-transparent rounded-3xl overflow-hidden h-96 shadow hover:bg-lime-100 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <div className="relative overflow-hidden h-2/3 card">
                                <Image
                                    src={pokemon.sprites?.front_default || ''}
                                    alt={`${pokemon.name} imagen`}
                                    className="relative w-full object-cover object-center justify-center lg:w-60"
                                    fill
                                />
                                <span className="bg-lime-600 text-white text-center bol px-2 py-1 absolute bottom-2 right-4 rounded-3xl">
                                    weight: {pokemon.weight} kg
                                </span>
                            </div>
                            <div className='bg-white px-4 pt-4 h-1/3'>
                                <h2 className="text-4xl text-green-900 capitalize font-semibold mt-2 h-1/2 truncate overflow-x-hidden">{pokemon.name}</h2>
                                <div className="mt-2">
                                    {pokemon.moves?.map((move, ind) => {
                                        if (ind > 1) {
                                            return null
                                        }
                                        return (<span
                                            key={move.move.name}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 h-1/2 truncate text-ellipsis"
                                        >
                                            {move.move.name}
                                        </span>)
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {count > 0 && (
                <nav aria-label="Page navigation" className="flex mt-4 pb-4 justify-center">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                            <button
                                onClick={handlePrevPage}
                                disabled={page === 0}
                                className={`${page === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
                                    } flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                Anterior
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={handleNextPage}
                                disabled={page === count - 1}
                                className={`${page === count - 1
                                    ? 'cursor-not-allowed'
                                    : 'cursor-pointer'
                                    } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                Siguiente
                            </button>
                        </li>
                    </ul>
                </nav>
            )}


        </div>
    );
}

export default PokemonList;
