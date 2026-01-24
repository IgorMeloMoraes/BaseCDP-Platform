import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ConstructionSection() {
  return (
    // MUDANÇA 1: bg-white e text-zinc-950 (Tema Claro)
    <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2 bg-white text-zinc-950">
      {/* LADO ESQUERDO: Colagem de Imagens (Grid) */}
      <div className="grid h-[50vh] w-full grid-cols-2 grid-rows-2 gap-1 p-1 md:h-auto">
        {/* Imagem 1 */}
        <div className="relative h-full w-full overflow-hidden bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000&auto=format&fit=crop"
            alt="Construção 1"
            fill
            className="object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
          />
        </div>
        {/* Imagem 2 */}
        <div className="relative h-full w-full overflow-hidden bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-cd11965d11e2?q=80&w=1000&auto=format&fit=crop"
            alt="Construção 2"
            fill
            className="object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
          />
        </div>
        {/* Imagem 3 */}
        <div className="relative h-full w-full overflow-hidden bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
            alt="Construção 3"
            fill
            className="object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
          />
        </div>
        {/* Imagem 4 */}
        <div className="relative h-full w-full overflow-hidden bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
            alt="Construção 4"
            fill
            className="object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
          />
        </div>
      </div>

      {/* LADO DIREITO: Texto e Conteúdo */}
      <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24 relative">
        <div className="space-y-6 z-10">
          {/* MUDANÇA 2: Título Preto */}
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-black md:text-5xl lg:text-6xl">
            Construindo
            <br />
            Sua Casa
          </h2>

          {/* MUDANÇA 3: Texto Cinza Escuro para contraste */}
          <p className="max-w-md text-lg font-medium leading-relaxed text-zinc-600">
            Estamos expandindo nossa capacidade para que a presença Dele possa
            transformar ainda mais vidas por meio da oração e da adoração. Há
            quatorze anos, a Base CDP começou com uma pequena reunião que se
            transformou em uma vibrante comunidade local.
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-blue-700 px-10 py-8 text-base font-bold uppercase tracking-widest text-white hover:bg-blue-800 shadow-xl"
            >
              <Link href="/construindo">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
