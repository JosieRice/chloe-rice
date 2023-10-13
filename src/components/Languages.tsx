import { SkillBadge } from "./SkillBadge";

export function Languages() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Languages</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="javascript" title="JavaScript" />
        <SkillBadge svg="typescript" title="TypeScript" />
        <SkillBadge svg="sql" title="SQL" />
      </div>
    </div>
  );
}
