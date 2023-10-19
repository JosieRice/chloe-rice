import { getPost } from "@/lib/api-graphql";
import { draftMode } from "next/headers";

import PostLayout from "./post-layout";

export default async function Post({ params }: { params: { slug: string } }) {
    const { isEnabled } = draftMode();

    const { post } = await getPost(params.slug, isEnabled);

    if (!post) {
        return <h1>Post &quot;{params.slug}&quot; not found</h1>;
    }

    return <PostLayout post={post} />;
}
