"use client";

import { CtfRichText } from "@/components/features/contentful/CtfRichText";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

interface ArticleContentProps {
    article: any;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
    const { content } = article;
    const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

    return (
        <div {...inspectorProps({ fieldId: "content" })}>
            <CtfRichText json={content?.json} links={content?.links} />
        </div>
    );
};
