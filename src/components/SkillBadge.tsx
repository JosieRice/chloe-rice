import Image from "next/image";
/* most images from https://www.stickpng.com/ */

interface Props {
  src: string;
  title: string;
}

export function SkillBadge({ src, title }: Props) {
  return (
    <div className="tooltip" data-tip={title}>
      <Image alt={title} src={src} width={80} height={80} />
    </div>
  );
}
