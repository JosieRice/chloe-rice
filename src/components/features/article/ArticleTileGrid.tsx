"use client";

import { ArticleTile } from "@/components/features/article/ArticleTile";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ArticleTileGridProps extends HTMLProps<HTMLDivElement> {
    articles?: Array<any | null>;
}

export const ArticleTileGrid = ({ articles, className, ...props }: ArticleTileGridProps) => {
    return articles && articles.length > 0 ? (
        <div className={twMerge("grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12", className)} {...props}>
            {articles.map((article, index) => {
                return article ? <ArticleTile article={article} key={index} /> : null;
            })}
        </div>
    ) : null;
};
