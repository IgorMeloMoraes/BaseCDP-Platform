export function getYoutubeId(url: string) {
  if (!url) return null;

  // Regex Poderosa: Aceita /live/, /watch?v=, /embed/, youtu.be, etc.
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|live\/)|youtu\.be\/)([^"&?\/\s]{11})/;

  const match = url.match(regExp);
  return match ? match[1] : null;
}

export function getThumbnailUrl(url: string, customImage?: any) {
  // Se tiver imagem personalizada do Sanity, o componente deve usar ela.
  // Mas se não tiver, usamos a do YouTube.

  const id = getYoutubeId(url);

  // Usamos 'hqdefault' em vez de 'maxresdefault' pois é garantido que existe para todos os vídeos
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
