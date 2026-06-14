import ComoComprar from "@/components/ComoComprar";
import Confianza from "@/components/Confianza";
import Footer from "@/components/Footer";
import Frescura from "@/components/Frescura";
import Galeria from "@/components/Galeria";
import GoldenIntro from "@/components/GoldenIntro";
import Hero from "@/components/Hero";
import Productos from "@/components/Productos";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const whatsappHref =
  "https://wa.me/573242095914?text=Hola%20The%20Golden%20Green%2C%20quiero%20separar%20un%20pedido%20para%20recoger%20en%20bodega.";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <GoldenIntro />
      <Productos />
      <Frescura />
      <ComoComprar />
      <Galeria />
      <Confianza />
      <WhatsAppCTA whatsappHref={whatsappHref} />
      <Footer whatsappHref={whatsappHref} />
    </main>
  );
}
