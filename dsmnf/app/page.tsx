import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[500px] w-full relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Equipamiento Deportivo y Musical"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
              <div className="container">
                <div className="max-w-lg text-white">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Ritmos Trap y Equipamiento Deportivo
                  </h1>
                  <p className="mt-4 text-lg">
                    Descubre accesorios deportivos premium y equipamiento musical para tu pasión.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                      Comprar Deportes
                    </Button>
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                      Comprar Música
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Productos Destacados</h2>
              <Button variant="ghost" className="gap-1">
                Ver todos <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Sports Products */}
              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  <Image src="/placeholder.svg?height=600&width=600" alt="Baloncesto" fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NUEVO
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Deportes</div>
                    <h3 className="font-medium">Balón de Baloncesto Pro</h3>
                    <div className="font-bold">49,99 €</div>
                  </div>
                  <Button className="w-full mt-4">Añadir al Carrito</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Raqueta de Tenis"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Deportes</div>
                    <h3 className="font-medium">Raqueta de Tenis Pro</h3>
                    <div className="font-bold">129,99 €</div>
                  </div>
                  <Button className="w-full mt-4">Añadir al Carrito</Button>
                </CardContent>
              </Card>

              {/* Music Products */}
              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Guitarra Acústica"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OFERTA
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Música</div>
                    <h3 className="font-medium">Guitarra Acústica</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">199,99 €</span>
                      <span className="text-sm text-muted-foreground line-through">249,99 €</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Añadir al Carrito</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  <Image src="/placeholder.svg?height=600&width=600" alt="Auriculares" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Música</div>
                    <h3 className="font-medium">Auriculares de Estudio</h3>
                    <div className="font-bold">159,99 €</div>
                  </div>
                  <Button className="w-full mt-4">Añadir al Carrito</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Comprar por Categoría</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sports Categories */}
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Equipamiento Deportivo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Accesorios Deportivos</h3>
                  <p className="text-white/80 mb-4">Equipamiento para cada atleta y entusiasta</p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">
                      Baloncesto
                    </Button>
                    <Button size="sm" variant="secondary">
                      Tenis
                    </Button>
                    <Button size="sm" variant="secondary">
                      Fútbol
                    </Button>
                    <Button size="sm" variant="secondary">
                      Fitness
                    </Button>
                  </div>
                </div>
              </div>

              {/* Music Categories */}
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Equipamiento Musical"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Equipamiento Musical</h3>
                  <p className="text-white/80 mb-4">Instrumentos y accesorios para músicos</p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">
                      Guitarras
                    </Button>
                    <Button size="sm" variant="secondary">
                      Baterías
                    </Button>
                    <Button size="sm" variant="secondary">
                      Teclados
                    </Button>
                    <Button size="sm" variant="secondary">
                      Accesorios
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-rose-50 dark:bg-rose-950/20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Suscríbete a Nuestro Boletín</h2>
              <p className="text-muted-foreground mb-8">
                Suscríbete para recibir ofertas especiales, sorteos gratuitos y lanzamientos de productos.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input placeholder="Introduce tu email" type="email" className="flex-1" />
                <Button className="bg-rose-500 hover:bg-rose-600">Suscribirse</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
