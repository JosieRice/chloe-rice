import { SkillBadge } from "./SkillBadge";

export function VersionControl() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Version Control</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="git" title="git" />
        <SkillBadge svg="github" title="GitHub" />
        <SkillBadge svg="bitbucket" title="Bitbucket" />
      </div>
    </div>
  );
}
