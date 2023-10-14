import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function BuildTools() {
  return (
    <SkillSection title={"Build Tools"}>
      <SkillBadge svg="webpack" title="webpack" />
      <SkillBadge svg="babel" title="Babel" />
      <SkillBadge
        src="/depIcons/module-federation.png"
        title="Module Federation"
      />
    </SkillSection>
  );
}
