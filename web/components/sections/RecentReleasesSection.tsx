import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { getThumbnailUrl } from "@/lib/youtube"; // <--- 1. Importe isso
import { ArrowRight, PlayCircle, Mic, FileText, Calendar } from "lucide-react";

export interface Release {
  _id: string;
  _type: "event" | "sermon" | "music" | "article";
  title: string;
  subtitle?: string;
  date: string;
  image: any;
  destinationUrl?: string;
  slug?: string;
}

interface RecentReleasesProps {
  items: Release[];
}

export function RecentReleasesSection({ items }: RecentReleasesProps) {
  if (!items || items.length === 0) return null;

  const getLink = (item: Release) => {
    if (item._type === "sermon" || item._type === "music") {
      return item.destinationUrl || "#";
    }
    if (item._type === "article") return `/artigos/${item.slug}`;
    if (item._type === "event") return `/eventos/${item.slug}`;
    return "#";
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "music":
        return <PlayCircle className="w-4 h-4" />;
      case "sermon":
        return <PlayCircle className="w-4 h-4" />; // Adicionei Sermon aqui
      case "podcast":
        return <Mic className="w-4 h-4" />;
      case "article":
        return <FileText className="w-4 h-4" />;
      case "event":
        return <Calendar className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      music: "Música",
      sermon: "Pregação",
      article: "Artigo",
      event: "Evento",
    };
    return labels[type] || "Lançamento";
  };

  return (
    <section className="w-full bg-white py-20 text-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Lançamentos Recentes
          </h2>
          <p className="text-zinc-600 text-lg font-medium">
            Ministramos ao Senhor de manhã, ao meio-dia e à noite. Nossos
            projetos são um reflexo do que fazemos como casa de oração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            // LÓGICA INTELIGENTE DE IMAGEM:
            // 1. Tenta imagem do Sanity
            // 2. Se não tiver e for vídeo/música, tenta thumb do YouTube
            // 3. Se não tiver nada, fica cinza
            let imageUrl = null;
            if (item.image) {
              imageUrl = urlFor(item.image).width(800).height(450).url();
            } else if (item.destinationUrl) {
              imageUrl = getThumbnailUrl(item.destinationUrl);
            }

            return (
              <Link
                key={item._id}
                href={getLink(item)}
                target={item.destinationUrl ? "_blank" : "_self"}
                className="group block"
              >
                <div className="relative aspect-video w-full overflow-hidden mb-6 bg-zinc-200">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    // Fallback se não tiver imagem nenhuma
                    <div className="flex h-full items-center justify-center text-zinc-400">
                      <span className="text-xs font-bold uppercase">
                        Sem imagem
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    {getIcon(item._type)}
                    {getTypeLabel(item._type)}
                  </div>
                </div>

                <div className="space-y-2 pr-4">
                  <h3 className="text-xl font-bold uppercase leading-tight group-hover:underline decoration-2 underline-offset-4">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-zinc-500 font-medium uppercase tracking-wide border-t border-zinc-200 pt-3 mt-4">
                    <span className="truncate pr-2">
                      {item.subtitle || "Base CDP"}
                    </span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-zinc-900 shrink-0" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
