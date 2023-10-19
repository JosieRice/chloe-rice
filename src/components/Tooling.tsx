import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Tooling() {
    return (
        <SkillSection title={"Tooling"}>
            <SkillBadge svg="webpack" title="webpack" />
            <SkillBadge svg="babel" title="Babel" />
            <SkillBadge svg="eslint" title="EsLint" />
            <SkillBadge svg="prettier" title="Prettier" />
            <SkillBadge src="/depIcons/module-federation.png" title="Module Federation" />
        </SkillSection>
    );
}
