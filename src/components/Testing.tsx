import { SkillBadge } from "./SkillBadge";

export function Testing() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Testing</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="jest" title="Jest" />
        <SkillBadge
          src="/depIcons/testing-library.png"
          title="Testing Library"
        />
      </div>
    </div>
  );
}
