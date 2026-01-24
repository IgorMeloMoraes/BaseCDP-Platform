import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

// Query antiga (mantivemos para listar os eventos embaixo da capa)
const EVENTS_QUERY = `*[_type == "event"] | order(dateStart asc) {
  _id,
  title,
  dateStart,
  location,
  coverImage
}`;

interface Event {
  _id: string;
  title: string;
  dateStart: string;
  location: string;
  coverImage: any;
}

export default async function Home() {
  const events = await client.fetch<Event[]>(EVENTS_QUERY);

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      {/* O Header fica fixo em cima de tudo */}
      <Header />

      {/* A Capa Gigante */}
      <Hero />

      {/* Seção de Eventos (Exemplo de como o conteúdo entra embaixo) */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase">
              Próximos Eventos
            </h2>
            <p className="text-zinc-400 mt-1">O que está acontecendo na Base</p>
          </div>
          <a
            href="#"
            className="hidden text-sm font-bold uppercase tracking-wide text-zinc-400 hover:text-white md:block"
          >
            Ver Calendário Completo →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event._id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-900 mb-4">
                {event.coverImage && (
                  <Image
                    src={urlFor(event.coverImage).width(800).url()}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                {/* Data Flutuante */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {new Date(event.dateStart).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase leading-tight group-hover:underline decoration-1 underline-offset-4">
                {event.title}
              </h3>
              <p className="text-zinc-500 text-sm mt-2">{event.location}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
