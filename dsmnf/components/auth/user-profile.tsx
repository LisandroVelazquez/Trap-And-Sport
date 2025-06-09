"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { logoutUser } from "@/lib/auth-actions"
import { useToast } from "@/hooks/use-toast"

interface UserProfileProps {
  user: {
    id: string
    name: string
    email: string
  }
}

export function UserProfile({ user }: UserProfileProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)

    try {
      await logoutUser()
      // La redirección se maneja en la acción del servidor
    } catch (error) {
      toast({
        title: "Error al cerrar sesión",
        description: "Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      })
      setIsLoggingOut(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
        <CardDescription>Detalles de tu cuenta</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Nombre</div>
          <div>{user.name}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Correo electrónico</div>
          <div>{user.email}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">ID de usuario</div>
          <div>{user.id}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => router.push("/editar-perfil")}>
          Editar perfil
        </Button>
        <Button variant="destructive" onClick={handleLogout} disabled={isLoggingOut}>
          {isLoggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
        </Button>
      </CardFooter>
    </Card>
  )
}
