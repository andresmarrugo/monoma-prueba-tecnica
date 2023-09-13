import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersData from '@/lib/auth/users.json'
import { cookies } from 'next/headers'
import { User } from '@/types/api'

const SECRET_KEY = process.env.SECRET_KEY ?? "secret-key";

export async function POST(req: Request, res: Response) {
    const { username, password } = await req.json()

    // Buscar el usuairo
    const user = usersData.users.find((u: User) => u.username === username);

    if (!user) {
        return Response.json({ message: 'Usuario o contraseña iconrrecta' }, { status: 401 });
    }

    // verifica la contraseña almacenada
    if (!password) return
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return Response.json({ message: 'Usuario o contraseña iconrrecta' }, { status: 401 });
    }

    // token JWT
    const token = jwt.sign({ userId: user.id, email: user.email, name: user.name }, SECRET_KEY, {
        expiresIn: '12h',
    });

    cookies().set('token', token, { secure: true })

    return Response.json({ token }, { status: 200 });
};