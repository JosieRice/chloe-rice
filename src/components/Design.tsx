import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Design() {
  return (
    <SkillSection title={"Design"}>
      <SkillBadge svg="photoshop" title="PhotoShop" />
      <SkillBadge svg="figma" title="Figma" />
    </SkillSection>
  );
}
