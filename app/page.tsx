import Articles from "@/components/Articles";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import WhatYouGet from "@/components/WhatYouGet";
import WhoAreWe from "@/components/WhoAreWe";

export default function Home() {
  return (
    <main className="max-w-7xl container mx-auto">
      <Hero />
      <WhoAreWe />
      <WhatYouGet />
      <Steps />
      <Articles />
    </main>
  );
}
