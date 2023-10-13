import { SkillBadge } from "./SkillBadge";

export function Languages() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Languages</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge src="/depIcons/javascript.png" title="JavaScript" />
        <SkillBadge src="/depIcons/typescript.png" title="TypeScript" />
      </div>
    </div>
  );
}
