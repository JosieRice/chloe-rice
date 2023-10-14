import { SkillBadge } from "./SkillBadge";

export function BuildTools() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Build Tools</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="webpack" title="webpack" />
        <SkillBadge svg="babel" title="Babel" />
        <SkillBadge
          src="/depIcons/module-federation.png"
          title="Module Federation"
        />
      </div>
    </div>
  );
}
