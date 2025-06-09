import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBasketIcon as Basketball, Guitar, ShoppingCart, Search, Heart, Menu } from "lucide-react"
import { UserNav } from "@/components/auth/user-nav"

interface HeaderProps {
  user: {
    id: string
    name: string
    email: string
  } | null
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Basketball className="h-6 w-6 text-rose-500" />
              <Guitar className="h-6 w-6 ml-1 text-amber-500" />
            </div>
            <span className="hidden font-bold sm:inline-block">Trap and Sport</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Deportes
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Música
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Novedades
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Ofertas
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar productos..." className="w-64 pl-8" />
            </div>
          </form>
          <UserNav user={user} />
          <Button variant="ghost" size="icon" className="text-foreground">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favoritos</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">
              3
            </span>
            <span className="sr-only">Carrito</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
