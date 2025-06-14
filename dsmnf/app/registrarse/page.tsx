import Link from "next/link"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 min-h-[80vh]">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2">
            <span>Trap and Sport</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Desde que me registré en Trap and Sport, he descubierto productos increíbles que han mejorado mi
              experiencia tanto en deportes como en música.&rdquo;
            </p>
            <footer className="text-sm">Ana Martínez</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Crear una cuenta</h1>
            <p className="text-sm text-muted-foreground">Ingresa tus datos para crear una cuenta</p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/iniciar-sesion" className="underline underline-offset-4 hover:text-primary">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
