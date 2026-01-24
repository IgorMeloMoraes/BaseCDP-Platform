export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 1. Vídeo de Fundo */}
      <div className="absolute inset-0 z-0">
        {/* Coloquei um vídeo de exemplo genérico de adoração/igreja. 
            Depois você troca pelo link do seu vídeo real no Sanity ou local */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-people-raising-hands-at-concert-5259/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay (Sombra para o texto aparecer) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      {/* 2. Conteúdo Centralizado */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-zinc-300 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Bem-vindo à casa
        </h2>

        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] drop-shadow-2xl animate-in fade-in zoom-in duration-1000 delay-200">
          MINISTRANDO
          <br />
          AO SENHOR
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-200 md:text-xl font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          Uma comunidade dedicada à oração, adoração e transformação pela
          presença de Jesus.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition">
            Nossos Horários
          </button>
          <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition">
            Assista Online
          </button>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">
          Role para baixo
        </span>
      </div>
    </section>
  );
}
