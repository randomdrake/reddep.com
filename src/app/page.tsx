import { Hero } from "@/components/sections/Hero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Services } from "@/components/sections/Services";
import { Values } from "@/components/sections/Values";
import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <MissionVision />
      <Services />
      <Values />
      <About />
      <Booking />
      <Contact />
    </main>
  );
}
