import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function VersionControl() {
  return (
    <SkillSection title="Version Control">
      <SkillBadge svg="git" title="git" />
      <SkillBadge svg="github" title="GitHub" />
      <SkillBadge svg="npm" title="npm" />
      <SkillBadge svg="bitbucket" title="Bitbucket" />
    </SkillSection>
  );
}
