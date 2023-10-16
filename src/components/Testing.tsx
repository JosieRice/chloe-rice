import { SkillBadge } from "./SkillBadge";
import { SkillSection } from "./SkillSection";

export function Testing() {
    return (
        <SkillSection title="Testing">
            <SkillBadge svg="jest" title="Jest" />
            <SkillBadge src="/depIcons/testing-library.png" title="Testing Library" />
        </SkillSection>
    );
}
