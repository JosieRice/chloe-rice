import { SkillBadge } from "./SkillBadge";

export function VersionControl() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Version Control</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge src="/depIcons/git.png" title="git" />
        <SkillBadge src="/depIcons/github.png" title="GitHub" />
        <SkillBadge title="Bitbucket" />
      </div>
    </div>
  );
}
