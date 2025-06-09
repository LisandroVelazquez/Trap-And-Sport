"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Simulación de base de datos de usuarios
const users = [
  {
    id: "1",
    name: "Usuario Demo",
    email: "demo@trapandsport.com",
    password: "password123", // En una aplicación real, esto estaría hasheado
  },
]

// Simulación de sesiones activas
const sessions: Record<string, { userId: string; expires: Date }> = {}

export async function loginUser({
  email,
  password,
  rememberMe,
}: {
  email: string
  password: string
  rememberMe?: boolean
}) {
  // Simular un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Buscar usuario por email
  const user = users.find((u) => u.email === email)

  // Verificar si el usuario existe y la contraseña es correcta
  if (!user || user.password !== password) {
    return { success: false, error: "Correo electrónico o contraseña incorrectos" }
  }

  // Crear una sesión
  const sessionId = Math.random().toString(36).substring(2, 15)
  const expiresIn = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000 // 30 días o 1 día
  const expires = new Date(Date.now() + expiresIn)

  sessions[sessionId] = {
    userId: user.id,
    expires,
  }

  // Establecer cookie de sesión
  cookies().set("session_id", sessionId, {
    expires,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })

  return { success: true, userId: user.id }
}

export async function registerUser({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  // Simular un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Verificar si el correo ya está registrado
  if (users.some((u) => u.email === email)) {
    return { success: false, error: "Este correo electrónico ya está registrado" }
  }

  // Crear nuevo usuario
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    password, // En una aplicación real, esto estaría hasheado
  }

  users.push(newUser)

  return { success: true, userId: newUser.id }
}

export async function logoutUser() {
  // Obtener el ID de sesión actual
  const sessionId = cookies().get("session_id")?.value

  // Si hay una sesión activa, eliminarla
  if (sessionId && sessions[sessionId]) {
    delete sessions[sessionId]
  }

  // Eliminar la cookie de sesión
  cookies().delete("session_id")

  // Redirigir a la página de inicio
  redirect("/")
}

export async function getCurrentUser() {
  // Obtener el ID de sesión actual
  const sessionId = cookies().get("session_id")?.value

  // Verificar si la sesión existe y no ha expirado
  if (!sessionId || !sessions[sessionId] || sessions[sessionId].expires < new Date()) {
    if (sessionId) {
      // Limpiar sesión expirada
      delete sessions[sessionId]
      cookies().delete("session_id")
    }
    return null
  }

  // Obtener el ID de usuario de la sesión
  const userId = sessions[sessionId].userId

  // Buscar el usuario por ID
  const user = users.find((u) => u.id === userId)

  if (!user) {
    // Si el usuario no existe, limpiar la sesión
    delete sessions[sessionId]
    cookies().delete("session_id")
    return null
  }

  // Devolver información del usuario (sin la contraseña)
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/iniciar-sesion")
  }

  return user
}
