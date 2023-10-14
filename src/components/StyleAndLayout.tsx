import { SkillBadge } from "./SkillBadge";

export function StyleAndLayout() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Style and Layout</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <SkillBadge svg="html" title="HTML5" />
        <SkillBadge svg="css" title="CSS3" />
        <SkillBadge svg="mui" title="Material UI" />
        <SkillBadge svg="styledComponents" title="Styled Components" />
        <SkillBadge svg="tailwindcss" title="Tailwind Css" />
        <SkillBadge svg="sass" title="Sass preprocesor" />
        <SkillBadge svg="less" title="LESS preprocesor" />
      </div>
    </div>
  );
}
