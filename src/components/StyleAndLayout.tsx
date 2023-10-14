import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function StyleAndLayout() {
  return (
    <SkillSection title="Style and Layout">
      <SkillBadge svg="html" title="HTML5" />
      <SkillBadge svg="css" title="CSS3" />
      <SkillBadge svg="mui" title="Material UI" />
      <SkillBadge svg="styledComponents" title="Styled Components" />
      <SkillBadge svg="tailwindcss" title="Tailwind Css" />
      <SkillBadge svg="sass" title="Sass preprocesor" />
      <SkillBadge svg="less" title="LESS preprocesor" />
      <SkillBadge svg="semanticUI" title="Semantic UI" />
    </SkillSection>
  );
}
