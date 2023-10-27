import { ArticleHero } from "@/components/features/article/ArticleHero";
import { ArticleTileGrid } from "@/components/features/article/ArticleTileGrid";
import { Container } from "@/components/shared/Container";
import { getAllBlogPostsForHome, getFeaturedBlogPostForHome } from "@/lib/api-graphql";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contentful basic setup attempt with Next.js and GraphQL",
};

export default async function Blog() {
    const page = await getFeaturedBlogPostForHome();
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
            <h1 className="text-center text-lg">Working out contentful with nextjs - these are not my articles</h1>
            <Container>
                <Link href={`/blog/${page.featuredBlogPost.slug}`}>
                    <ArticleHero article={page.featuredBlogPost} />
                </Link>
            </Container>
            <Container className="my-8  md:mb-10 lg:mb-16">
                <h2 className="mb-4 md:mb-6">Latest Articles</h2>
                <ArticleTileGrid articles={posts} className="md:grid-cols-2 lg:grid-cols-3" />
            </Container>
        </>
    );
}
