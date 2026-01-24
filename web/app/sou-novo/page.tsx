import { Header } from "@/components/layout/Header";

export default function SouNovoPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Imagem de Capa da página interna */}
        <img
          src="https://images.unsplash.com/photo-1510915361402-539947461dbb?q=80&w=2000"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter text-center px-4">
            Sua presença transforma
            <br />
            nossa cidade
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-white">
        <h2 className="text-3xl font-bold mb-4">Bem-vindo à família.</h2>
        <p className="text-zinc-400">Página em construção...</p>
      </div>
    </div>
  );
}
