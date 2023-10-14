import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Mobile() {
  return (
    <SkillSection title={"Mobile"}>
      <SkillBadge svg="react" title="React Native" />
      <SkillBadge svg="eas" title="Expo EAS" />
    </SkillSection>
  );
}
