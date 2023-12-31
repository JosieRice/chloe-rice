import { ArticleAuthor } from "@/components/features/article/ArticleAuthor";
import { ArticleLabel } from "@/components/features/article/ArticleLabel";
import { CtfImage } from "@/components/features/contentful/CtfImage";
import { FormatDate } from "@/components/shared/FormatDate";
import { twMerge } from "tailwind-merge";

interface ArticleHeroProps {
    article: any;
    isFeatured?: boolean;
    isReversedLayout?: boolean;
}
export const ArticleHero = ({ article, isFeatured, isReversedLayout = false }: ArticleHeroProps) => {
    const { publishedDate, shortDescription, title } = article;

    return (
        <div
            className={twMerge(
                `flex flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg`,
                isReversedLayout ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
        >
            <div className="flex-1 basis-1/2">
                {article.featuredImage && (
                    <CtfImage nextImageProps={{ className: "w-full", priority: true, sizes: undefined }} {...article.featuredImage} />
                )}
            </div>

            <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
                <div className="mb-2 flex flex-wrap items-center">
                    <ArticleAuthor article={article} />
                    {isFeatured && (
                        <ArticleLabel
                            className={twMerge(
                                "ml-auto pl-2 lg:absolute lg:top-8 xl:top-12",
                                isReversedLayout ? "lg:left-6 xl:left-12" : "lg:right-6 xl:right-12"
                            )}
                        >
                            Featured
                        </ArticleLabel>
                    )}
                    <div className={twMerge("ml-auto hidden pl-2 text-xs text-gray600", isReversedLayout ? "lg:block" : "")}>
                        <FormatDate date={publishedDate} />
                    </div>
                </div>
                <h1>{title}</h1>
                {shortDescription && <p className="mt-2">{shortDescription}</p>}
                <div className={twMerge("mt-2 text-xs text-gray600", isReversedLayout ? "lg:hidden" : "")}>
                    <FormatDate date={publishedDate} />
                </div>
            </div>
        </div>
    );
};
