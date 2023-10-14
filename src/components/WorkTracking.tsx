import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function WorkTracking() {
  return (
    <SkillSection title="Work Tracking">
      <SkillBadge svg="jira" title="Jira" />
      <SkillBadge svg="asana" title="Asana" />
    </SkillSection>
  );
}
