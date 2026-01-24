import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import {
  RecentReleasesSection,
  Release,
} from "@/components/sections/RecentReleasesSection";

// Query para buscar os eventos
const EVENTS_QUERY = `*[_type == "event"] | order(dateStart asc) {
  _id,
  title,
  dateStart,
  location,
  coverImage
}`;

// 2. Query de Banners (Ordenado pelo mais recente)
const BANNERS_QUERY = `*[_type == "carousel" && isActive == true] | order(_createdAt desc) {
  _id,
  title,
  image,
  link
}`;

// 2. SUPER QUERY DE LANÇAMENTOS (Automação)
// Busca em TUDO, ordena por data mista, pega os 3 primeiros
const RELEASES_QUERY = `*[_type in ["event", "sermon", "music", "article"]] | order(coalesce(publishedAt, dateStart, releaseDate) desc)[0...3] {
  _id,
  _type,
  title,
  "subtitle": coalesce(description, artist, preacher, location, excerpt),
  "date": coalesce(publishedAt, dateStart, releaseDate),
  "image": coalesce(coverImage, thumbnail, image),
  "slug": slug.current,
  "destinationUrl": coalesce(link, youtubeUrl, spotifyUrl)
}`;

interface Event {
  _id: string;
  title: string;
  dateStart: string;
  location: string;
  coverImage: any;
}

// Interface do Banner
interface Banner {
  _id: string;
  title: string;
  image: any;
  link?: string;
}

export default async function Home() {
  // Fetch em paralelo (mais rápido)
  const [events, banners, releases] = await Promise.all([
    client.fetch<Event[]>(EVENTS_QUERY),
    client.fetch<Banner[]>(BANNERS_QUERY),
    client.fetch<Release[]>(RELEASES_QUERY),
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-blue-600 selection:text-white">
      {/* 1. O Header fica fixo no topo */}
      <Header />

      {/* 2. Seção Hero (Capa com Vídeo Escuro) */}
      <Hero />

      {/* 3. NOVA SEÇÃO: Bem-vindo (Fundo Branco) */}
      {/* Ela entra exatamente aqui, "imprensada" entre o Hero e os Eventos */}
      <WelcomeSection />

      {/* NOVA SEÇÃO: Carrossel de Destaques (Fundo Escuro) */}
      {/* Decidimos colocar aqui para quebrar o ritmo entre o Welcome branco e os Eventos */}
      <CarouselSection banners={banners} />

      {/* NOVA SEÇÃO: Construção (Fundo Preto) */}
      {/* Ela entra logo abaixo do carrossel */}
      <ConstructionSection />

      {/* Bloco Claro: Lançamentos Recentes (Substituindo a antiga lista de eventos simples) */}
      {/* Esta seção agora mostra Eventos, Músicas e Artigos misturados inteligentemente */}
      <RecentReleasesSection items={releases} />

      {/* 4. Seção de Eventos (Volta para o Fundo Preto do Main) */}
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
