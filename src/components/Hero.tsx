"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0E0E]">
      {/* Video que se ajusta al ancho sin recortar */}
      <div className="relative mx-auto w-full max-w-[1920px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-auto"
          style={{ maxHeight: "100vh" }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Gradiente inferior sutil */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent" />
    </section>
  );
}
