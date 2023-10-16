import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    title: string;
}

export function SkillSection({ children, title }: Props) {
    return (
        <div className="flex flex-col mt-8">
            <h1 className="text-5xl font-bold text-center">{title}</h1>
            <div className="flex flex-wrap gap-8 justify-center mt-8 mb-8">{children}</div>
        </div>
    );
}
