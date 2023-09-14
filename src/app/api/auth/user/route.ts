import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { UserDecoded } from '@/types/api'
import { NextResponse, NextRequest } from 'next/server'

async function getCookieData(): Promise<string> {
    const cookieData = cookies().get("token")?.value as string
    return new Promise((resolve) =>
        resolve(cookieData)
    )
}
export async function GET(req: NextRequest) {
    const SECRET_KEY = process.env.SECRET_KEY ?? 'secret-key';
    const token = req.cookies.get("token")?.value
    try {

        if (!token) {
            return NextResponse.json({ message: 'Token no proporcionado' }, { status: 401 });
        }

        // Verificar y decodificar el token
        const userData = jwt.verify(token, SECRET_KEY)
        return NextResponse.json(userData)
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
    }
}

