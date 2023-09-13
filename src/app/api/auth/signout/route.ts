import { cookies } from 'next/headers'

export async function GET(req: Request, res: Response) {

    try {
        // Eliminar la cookie de autenticación
        cookies().delete('token')
        return Response.redirect(new URL('/', req.url));
    } catch (error) {
        return Response.json({ message: "Ocurrion un error" }, { status: 405 });
    }
};