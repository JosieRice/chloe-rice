import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Libraries() {
  return (
    <SkillSection title="Libraries">
      <SkillBadge svg="react" title="React" />
      <SkillBadge svg="reactQuery" title="React Query" />
      <SkillBadge svg="graphql" title="GraphQL" />
      <SkillBadge svg="axios" title="Axios" />
      <SkillBadge src="/depIcons/nextjs.png" title="NextJs" />
      <SkillBadge svg="zustand" title="Zustand" />
      <SkillBadge svg="redux" title="Redux" />
      <SkillBadge svg="eslint" title="EsLint" />
      <SkillBadge svg="prettier" title="Prettier" />
      <SkillBadge svg="googlemapsAPI" title="Google Maps API" />
      <SkillBadge svg="backbone" title="Backbone" />
    </SkillSection>
  );
}
