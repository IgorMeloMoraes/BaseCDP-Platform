import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

// GROQ Query - A linguagem de consulta do Sanity (tipo SQL)
const EVENTS_QUERY = `*[_type == "event"] | order(dateStart asc) {
  _id,
  title,
  dateStart,
  location,
  coverImage
}`;

// Definição do Tipo (TypeScript)
interface Event {
  _id: string;
  title: string;
  dateStart: string;
  location: string;
  coverImage: any;
}

export default async function Home() {
  // Fetch dos dados (Server Component - Roda no servidor, super rápido)
  const events = await client.fetch<Event[]>(EVENTS_QUERY);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Integração Next.js + Sanity 🚀
          </h1>
          <p className="text-zinc-400">
            Se você está vendo os cards abaixo, o backend está conectado!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event._id}
                className="border border-zinc-800 rounded-lg p-4 bg-zinc-900 hover:border-zinc-700 transition"
              >
                {event.coverImage && (
                  <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                    {/* Usamos urlFor para gerar o link da imagem */}
                    <Image
                      src={urlFor(event.coverImage).width(500).url()}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p className="text-zinc-400 text-sm mt-1">
                  📅 {new Date(event.dateStart).toLocaleDateString("pt-BR")}
                </p>
                <p className="text-zinc-500 text-sm">📍 {event.location}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-2 text-yellow-500">
              Nenhum evento encontrado. Vá no Studio e crie um evento!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
