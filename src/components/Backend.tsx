import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Backend() {
    return (
        <SkillSection title={"Backend"}>
            <SkillBadge svg="nodejs" title="NodeJs" />
        </SkillSection>
    );
}
