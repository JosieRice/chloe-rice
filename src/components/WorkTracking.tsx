import { SkillBadge } from "./SkillBadge";

export function WorkTracking() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Work Tracking</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8  mb-16">
        <SkillBadge svg="jira" title="Jira" />
        <SkillBadge svg="asana" title="Asana" />
      </div>
    </div>
  );
}
