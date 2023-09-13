"use client"

type Props = {}

const useIsAuthenticated = (): boolean => {
    const token = localStorage.getItem("token")
    console.log('token :>> ', JSON.stringify(token));
    const auth: boolean = true
    return auth
}

export default useIsAuthenticated