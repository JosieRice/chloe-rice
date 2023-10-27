import { CtfImage } from "@/components/features/contentful/CtfImage";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

interface ArticleAuthorProps {
    article: any;
}

export const ArticleAuthor = ({ article }: ArticleAuthorProps) => {
    const { author } = article;
    const inspectorProps = useContentfulInspectorMode({ entryId: author?.sys.id });

    return (
        <div className="flex items-center">
            <div className="mr-2 overflow-hidden rounded-full border border-blue500" {...inspectorProps({ fieldId: "avatar" })}>
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
            <span className="text-xs leading-none text-gray600" {...inspectorProps({ fieldId: "name" })}>
                {author?.name}
            </span>
        </div>
    );
};
