import { ArticleContent } from "@/components/features/article/ArticleContent";
import { ArticleHero } from "@/components/features/article/ArticleHero";
import { ArticleTileGrid } from "@/components/features/article/ArticleTileGrid";
import { Container } from "@/components/shared/Container";
import { getBlogPost } from "@/lib/api-graphql";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    const relatedPosts = post?.relatedBlogPostsCollection?.items;

    if (!post) {
        return <h1>Post &quot;{slug}&quot; not found</h1>;
    }

    return (
        <>
            <Container>
                <ArticleHero article={post} isFeatured={false} isReversedLayout={true} />
            </Container>
            <Container className="mt-8 max-w-4xl">
                <ArticleContent article={post} />
            </Container>
            {relatedPosts.length > 0 && (
                <Container className="mt-8 max-w-5xl">
                    <h2 className="text-center text-xl mt-16 mb-4 md:mb-6">Related articles</h2>
                    <ArticleTileGrid articles={relatedPosts} className="md:grid-cols-2" />
                </Container>
            )}
        </>
    );
}
