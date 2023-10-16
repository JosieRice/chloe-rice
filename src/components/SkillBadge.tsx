import { SVG, iconDictionary } from "@/utils/iconDictionary";
import Image from "next/image";
/* most images from https://www.stickpng.com/ */

interface CommonProps {
    title: string;
}

interface PropsForImage extends CommonProps {
    src: string;
    svg?: never;
}

interface PropsForSVG extends CommonProps {
    src?: never;
    svg: SVG;
}

type Props = PropsForImage | PropsForSVG;

export function SkillBadge({ src, svg, title }: Props) {
    return (
        <div className="tooltip" data-tip={title}>
            {src && <Image alt={title} height={80} src={src} width={80} />}
            {svg && iconDictionary[svg]}
        </div>
    );
}
