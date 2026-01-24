import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-24";

// 1. Configuração do Cliente (Usado para buscar dados)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // false = dados frescos (dev), true = cache rápido (prod)
});

// 2. Configuração do Construtor de Imagens
// O Sanity guarda imagens apenas como referência. Isso aqui gera a URL real da foto.
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
