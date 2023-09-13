import { useSession, signIn, signOut } from "next-auth/react"

type Props = {

}
export default function LoginBtn(props: Props) {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Logeado como {session.user} <br />
                <button onClick={() => signOut()}>Cerrar sesion</button>
            </>
        )
    }
    return (
        <>
            No has iniciado sesion<br />
            <button onClick={() => signIn()}>Incia Sesion</button>
        </>
    )
}