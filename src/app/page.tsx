import { Backend } from "@/components/Backend";
import { BuildTools } from "@/components/BuildTools";
import { Design } from "@/components/Design";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Libraries } from "@/components/Libraries";
import { Mobile } from "@/components/Mobile";
import { StyleAndLayout } from "@/components/StyleAndLayout";
import { Testing } from "@/components/Testing";
import { VersionControl } from "@/components/VersionControl";
import { WorkTracking } from "@/components/WorkTracking";

export default function Home() {
    return (
        <main>
            <Hero />
            <Languages />
            <StyleAndLayout />
            <Libraries />
            <BuildTools />
            <Testing />
            <VersionControl />
            <Mobile />
            <Design />
            <Backend />
            <WorkTracking />
        </main>
    );
}
