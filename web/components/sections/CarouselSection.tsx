"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { urlFor } from "@/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Banner {
  _id: string;
  title: string;
  image: any;
  link?: string;
}

interface CarouselSectionProps {
  banners: Banner[];
}

export function CarouselSection({ banners }: CarouselSectionProps) {
  // CONFIGURAÇÃO CORRIGIDA:
  // stopOnInteraction: false -> Continua rodando mesmo após clicar nas setas
  // stopOnMouseEnter: true -> Para quando passa o mouse (nativo do plugin)
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  if (!banners || banners.length === 0) return null;

  return (
    <section className="w-full bg-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 border-l-4 border-blue-600 pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
            Destaques da Semana
          </h2>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner._id} className="basis-full">
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                  {banner.image && (
                    <Image
                      src={urlFor(banner.image).width(1920).height(820).url()}
                      alt={banner.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-4 bg-black/50 text-white border-none hover:bg-white hover:text-black" />
            <CarouselNext className="right-4 bg-black/50 text-white border-none hover:bg-white hover:text-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
