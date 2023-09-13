import Header from '@/components/header'
import ProtectedRoute from '@/components/protectedRoute'

export default function DasboardLayout({
    children
}: {
    children: React.ReactNode,
    test: React.ReactNode

}) {
    return (<ProtectedRoute>
        <Header />
        {children}
    </ProtectedRoute>)
}
