import { CtfRichText } from "@/components/features/contentful/CtfRichText";

interface ArticleContentProps {
    article: any;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
    const { content } = article;

    return <CtfRichText json={content?.json} links={content?.links} />;
};
