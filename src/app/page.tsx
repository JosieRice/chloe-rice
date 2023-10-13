import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { VersionControl } from "@/components/VersionControl";

export default function Home() {
  return (
    <main>
      <Hero />
      <Languages />
      <VersionControl />
      <Skills />
    </main>
  );
}
