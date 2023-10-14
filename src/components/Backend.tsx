import { SkillBadge } from "./SkillBadge";

export function Backend() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Backend</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="nodejs" title="NodeJs" />
      </div>
    </div>
  );
}
