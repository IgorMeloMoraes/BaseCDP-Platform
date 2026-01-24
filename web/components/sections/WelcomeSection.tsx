import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function WelcomeSection() {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      {/* LADO ESQUERDO: Texto e Conteúdo */}
      <div className="flex flex-col justify-center bg-white px-8 py-20 md:px-16 lg:px-24">
        <div className="space-y-8">
          {/* Título Grande */}
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-black md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-left-8 duration-1000 view-transition-name:heading">
            Base CDP é uma comunidade que se reúne de manhã, tarde e noite para{" "}
            <span className="underline decoration-4 underline-offset-4 decoration-blue-600">
              servir ao Senhor.
            </span>
          </h2>

          {/* Texto Pequeno */}
          <p className="max-w-md text-lg font-medium leading-relaxed text-zinc-600">
            A BASE existe para servir ao Senhor, oferecendo-Lhe gratidão e
            louvor, adorando-O ao concordarmos com quem Ele é e intercedendo
            para que a vontade d'Ele seja feita em nossas vidas, cidade e terra.
          </p>

          {/* Botão de Ação (Azul Vibrante da referência) */}
          <div>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-blue-700 px-10 py-8 text-base font-bold uppercase tracking-widest text-white hover:bg-blue-800 shadow-xl transition-all hover:scale-105"
            >
              <Link href="/sou-novo">Sou Novo(a)</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* LADO DIREITO: Imagem/Vídeo */}
      <div className="relative h-[50vh] w-full md:h-full bg-zinc-100">
        {/* Imagem de Fundo (Placeholder estilo Upperroom) */}
        {/* Você pode trocar por uma foto real do pastor ou do culto depois */}
        <Image
          src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1000&auto=format&fit=crop"
          alt="Líder orando na Base CDP"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />

        {/* Overlay Escuro leve */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Botão de Play (Fake por enquanto, depois podemos abrir um Modal) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="group flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-black text-white">
            <Play className="h-8 w-8 fill-current ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
