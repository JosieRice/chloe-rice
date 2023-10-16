import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Languages() {
    return (
        <SkillSection title={"Languages"}>
            <SkillBadge svg="typescript" title="TypeScript" />
            <SkillBadge svg="javascript" title="JavaScript" />
            <SkillBadge svg="sql" title="SQL" />
        </SkillSection>
    );
}
