import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { UserDecoded } from '@/types/api'

export function GET(req: Request, res: Response) {
    const SECRET_KEY = process.env.SECRET_KEY ?? 'secret-key';

    try {
        // Obtener el token del encabezado de la solicitud
        const token = cookies().get("token")?.value

        if (!token) {
            return Response.json({ message: 'Token no proporcionado' }, { status: 401 });
        }

        // Verificar y decodificar el token
        const decoded = jwt.verify(token, SECRET_KEY);
        return Response.json({ user: decoded }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ message: 'Error en el servidor' }, { status: 500 });
    }
}

