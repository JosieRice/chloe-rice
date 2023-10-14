import { SkillBadge } from "./SkillBadge";

export function Libraries() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Libraries</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="react" title="React" />
        <SkillBadge svg="reactQuery" title="React Query" />
        <SkillBadge svg="graphql" title="GraphQL" />
        <SkillBadge src="/depIcons/nextjs.png" title="NextJs" />
        <SkillBadge svg="zustand" title="Zustand" />
        <SkillBadge svg="redux" title="Redux" />
        <SkillBadge svg="googlemapsAPI" title="Google Maps API" />
        <SkillBadge svg="react" title="React Native" />
        <SkillBadge svg="backbone" title="Backbone" />
      </div>
    </div>
  );
}
