import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { VersionControl } from "@/components/VersionControl";
import { WorkTracking } from "@/components/WorkTracking";

export default function Home() {
  return (
    <main>
      <Hero />
      <Languages />
      <VersionControl />
      <WorkTracking />
      <Skills />
    </main>
  );
}
