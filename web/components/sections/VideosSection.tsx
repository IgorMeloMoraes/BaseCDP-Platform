"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Youtube } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { getYoutubeId, getThumbnailUrl } from "@/lib/youtube";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle, // Manteve
  DialogDescription, // Manteve
} from "@/components/ui/dialog";
// REMOVIDO: import { VisuallyHidden } ...

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface VideoItem {
  _id: string;
  title: string;
  category: "message" | "prayer";
  youtubeUrl: string;
  preacher: string;
  thumbnail: any;
  publishedAt: string;
}

interface VideosSectionProps {
  videos: VideoItem[];
}

export function VideosSection({ videos }: VideosSectionProps) {
  if (!videos || videos.length === 0) return null;

  const prayerVideos = videos.filter((v) => v.category === "prayer");
  const messageVideos = videos.filter((v) => v.category === "message");

  const VideoCard = ({ video }: { video: VideoItem }) => {
    const videoId = getYoutubeId(video.youtubeUrl);
    const thumbSrc = video.thumbnail
      ? urlFor(video.thumbnail).width(600).url()
      : getThumbnailUrl(video.youtubeUrl) || "";

    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-md bg-black/10">
            {thumbSrc && (
              <Image
                src={thumbSrc}
                alt={video.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                <Play className="ml-1 h-5 w-5 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <p className="font-bold uppercase tracking-tight text-sm truncate">
                {video.title}
              </p>
              <p className="text-xs opacity-80">{video.preacher}</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-4xl border-none bg-black p-0 text-white">
          {/* CORREÇÃO AQUI: Usamos a classe sr-only do Tailwind em vez do componente VisuallyHidden */}
          <DialogTitle className="sr-only">{video.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Vídeo de {video.preacher}
          </DialogDescription>

          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <section className="w-full bg-[#E5E0D8] py-20 text-zinc-900">
      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-red-600 mb-4">
            <Youtube className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tighter text-zinc-900">
              YouTube
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Manhã, Meio-Dia e Noite
          </h2>
        </div>

        {/* CARROSSEL 1: SALA DE ORAÇÃO */}
        {prayerVideos.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Sala de Oração Diária
              </h3>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-xs font-bold uppercase hover:underline"
              >
                Ver Mais &gt;
              </Link>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {prayerVideos.map((video) => (
                  <CarouselItem
                    key={video._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <VideoCard video={video} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-black border-none" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white text-black border-none" />
            </Carousel>
          </div>
        )}

        {/* CARROSSEL 2: MENSAGENS PRINCIPAIS */}
        {messageVideos.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Mensagens Principais
              </h3>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-xs font-bold uppercase hover:underline"
              >
                Ver Mais &gt;
              </Link>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {messageVideos.map((video) => (
                  <CarouselItem
                    key={video._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <VideoCard video={video} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-black border-none" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white text-black border-none" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
