import { ArticleHero } from "@/components/features/article/ArticleHero";
import { ArticleTileGrid } from "@/components/features/article/ArticleTileGrid";
import { Container } from "@/components/shared/Container";
import { getAllBlogPostsForHome, getLanding } from "@/lib/api-graphql";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contentful basic setup attempt with Next.js and GraphQL",
};

export default async function Blog() {
    const landing = await getLanding();
    const posts = await getAllBlogPostsForHome();

    if (!posts || posts.length === 0) {
        return (
            <main>
                <p>No posts found.</p>
            </main>
        );
    }

    return (
        <>
            <Container>
                <Link href={`/blog/${landing.featuredBlogPost.slug}`}>
                    <ArticleHero article={landing.featuredBlogPost} />
                </Link>
            </Container>
            <Container className="my-8">
                <h2 className="text-center text-xl mt-16 mb-4 md:mb-6">Latest articles</h2>
                <ArticleTileGrid articles={posts} className="md:grid-cols-2 lg:grid-cols-3" />
            </Container>
        </>
    );
}
