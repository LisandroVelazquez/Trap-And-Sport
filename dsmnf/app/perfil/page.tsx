import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentUser } from "@/lib/auth-actions"
import { UserProfile } from "@/components/auth/user-profile"

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/iniciar-sesion")
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <UserProfile user={user} />

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mis Pedidos Recientes</CardTitle>
              <CardDescription>Historial de tus compras más recientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-muted-foreground">No tienes pedidos recientes.</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mis Favoritos</CardTitle>
              <CardDescription>Productos que has marcado como favoritos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-muted-foreground">No tienes productos favoritos.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
