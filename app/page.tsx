import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl container mx-auto">
      <Hero />
      <h2 className="font-sans">
        We believe in the power of personal development to transform lives. Our
        mission is to provide you with the tools, resources, and support you
        need to unlock your full potential and lead a more fulfilling life.
      </h2>
      <h3 className="font-pacifico">Thrively</h3>
      <h4 className="font-subheadingFont uppercase">Sub heading</h4>
    </main>
  );
}
