"use client"
import { useEffect, useState } from 'react';
import { UserDecoded } from '@/types/api';
import { useRouter } from 'next/navigation'

const Profile = () => {
    const [user, setUser] = useState<UserDecoded | null>(null);
    const router = useRouter()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/auth/user');
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error('Error al obtener datos del usuario');
                }
            } catch (error) {
                console.error('Error al realizar la solicitud', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="container mx-auto mt-8 px-3 h-screen">
            <h1 className="text-3xl font-semibold mb-4">Perfil de Usuario</h1>
            {user ? (
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
                    {/* Otros campos del usuario */}
                    <p>
                        <strong>Correo Electrónico:</strong> {user.email}
                    </p>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
            <button
                role='button'
                onClick={() => router.back()}
                className="mt-4 bg-green-500 hover:bg-green-600 focus:bg-green-400 text-white py-2 px-4 rounded"
            >
                Regresar
            </button>
        </div>
    );
};

export default Profile;
