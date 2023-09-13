import { redirect } from 'next/navigation'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
type Props = {
    children: React.ReactNode
}
function ProtectedRoute({ children }: Props) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (!token) {
        // Redirigir al usuario a la página de inicio de sesión si no está autenticado
        redirect("/")
    }

    return children;
}

export default ProtectedRoute;