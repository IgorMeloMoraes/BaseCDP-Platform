import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react"; // Ícones do pacote padrão

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* 1. Logo (Esquerda) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white uppercase"
        >
          BASE CDP
        </Link>

        {/* 2. Menu Navegação (Centro - Escondido em mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-200">
          <Link href="#" className="hover:text-white transition-colors">
            SOBRE
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            MINISTÉRIOS
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            ENSINO
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            EVENTOS
          </Link>
        </nav>

        {/* 3. Ações (Direita) */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-200 hover:text-white">
            <Search className="w-5 h-5" />
          </button>

          <div className="hidden md:block w-px h-4 bg-white/20"></div>

          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-zinc-200 hover:text-white text-sm font-medium"
          >
            <User className="w-4 h-4" />
            <span>LOGIN</span>
          </Link>

          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wide text-xs px-6"
          >
            AO VIVO
          </Button>
        </div>
      </div>
    </header>
  );
}
