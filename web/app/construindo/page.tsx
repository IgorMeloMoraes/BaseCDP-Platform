import { Header } from "@/components/layout/Header";

export default function ConstruindoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      {/* Hero da Página Interna */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541976544-2f67263ace34?q=80&w=2000"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Futuro Campus
            <br />
            Base CDP
          </h1>
          <p className="text-xl text-zinc-300">
            Construindo um lugar de descanso para o Senhor
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold uppercase">Projeto de Expansão</h2>
          <p className="text-zinc-400">
            Página de detalhes da construção em desenvolvimento...
          </p>
          <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-zinc-200">
            Contribuir
          </button>
        </div>
      </div>
    </div>
  );
}
