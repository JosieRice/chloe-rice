import { CtfImage } from "@/components/features/contentful/CtfImage";

interface ArticleAuthorProps {
    article: any;
}

export const ArticleAuthor = ({ article }: ArticleAuthorProps) => {
    const { author } = article;

    return (
        <div className="flex items-center">
            <div className="mr-2 overflow-hidden rounded-full border border-blue500">
                {author?.avatar && (
                    <CtfImage
                        nextImageProps={{
                            height: 28,
                            placeholder: undefined,
                            sizes: undefined,
                            width: 28,
                        }}
                        {...author.avatar}
                    />
                )}
            </div>
            <span className="text-xs leading-none text-gray600">{author?.name}</span>
        </div>
    );
};
