import BackgroundShader from "@/components/BackgroundShader";
import ComoComprar from "@/components/ComoComprar";
import Confianza from "@/components/Confianza";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Hero from "@/components/Hero";
import Productos from "@/components/Productos";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const whatsappHref =
  "https://wa.me/5732398981?text=Hola%20The%20Golden%20Green%2C%20quiero%20separar%20un%20pedido%20para%20recoger%20en%20bodega.";

export default function Home() {
  return (
    <>
      <BackgroundShader />
      <main className="relative z-10 overflow-hidden">
        <Hero whatsappHref={whatsappHref} />
        <Productos />
        <ComoComprar whatsappHref={whatsappHref} />
        <Galeria />
        <Confianza />
        <WhatsAppCTA whatsappHref={whatsappHref} />
      </main>
      <Footer whatsappHref={whatsappHref} />
    </>
  );
}
