const IMAGE_FIELDS = `
    __typename
    sys {
        id
    }
    title
    description
    width
    height
    url
    contentType
`;

const AUTHOR_FIELDS = `
    __typename
    sys {
        id
    }
    name
    avatar {
        ${IMAGE_FIELDS}
    }
`;

const RICH_IMAGE_FIELDS = `
    __typename
    sys {
        id
    }
`;

const REFERENCE_PAGE_BLOG_POST_FIELDS = `
    __typename
    sys {
        id
        spaceId
    }
    slug
    author {
        ${AUTHOR_FIELDS}
    }
    publishedDate
    title
    shortDescription
    featuredImage {
        ${IMAGE_FIELDS}
    }
`;

const PAGE_BLOG_POST_FIELDS = `
    __typename
    sys {
        id
        spaceId
    }
    internalName
    seoFields {
        __typename
        pageTitle
        pageDescription
        canonicalUrl
        nofollow
        noindex
        shareImagesCollection(limit: 3, locale: "en-US") {
          items {
            ${IMAGE_FIELDS}
          }
        }
    }
    slug
    author {
        ${AUTHOR_FIELDS}
    }
    publishedDate
    title
    shortDescription
    featuredImage {
        ${IMAGE_FIELDS}
    }
    content {
        json
        links {
            entries {
                block {
                    ${RICH_IMAGE_FIELDS}
                }
            }
        }
    }
    relatedBlogPostsCollection(limit: 2) {
        items {
            ${REFERENCE_PAGE_BLOG_POST_FIELDS}
        }
    }
    
`;

async function fetchGraphQL(query: string, draftMode = false): Promise<any> {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        body: JSON.stringify({ query }),
        headers: {
            Authorization: `Bearer ${draftMode ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        next: {
            // cache for 1 hours then revalidate
            revalidate: 3600,
        },
    }).then((response) => response.json());
}

function extractBlogPost(fetchResponse: any): any | undefined {
    return fetchResponse?.data?.pageBlogPostCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] | undefined {
    return fetchResponse?.data?.pageBlogPostCollection?.items;
}

function extractLanding(fetchResponse: any): any {
    return fetchResponse?.data?.pageLandingCollection?.items?.[0];
}

function extractComponentRichImage(fetchResponse: any): any {
    return fetchResponse?.data?.componentRichImage;
}

export async function getAllBlogPostsForHome(): Promise<any[] | undefined> {
    const entries = await fetchGraphQL(
        `query {
            pageBlogPostCollection(limit: 6, locale: "en-US") {
                items {
                    ${PAGE_BLOG_POST_FIELDS}
                }
            }
        }`
    );

    return extractPostEntries(entries);
}

export async function getComponentRichImage(id: string) {
    const entry = await fetchGraphQL(
        `query {
            componentRichImage (id: "${id}") {
                fullWidth
                caption
                image {
                    url
                    width
                    height
                    title
                  }
            }
        }`
    );

    return extractComponentRichImage(entry);
}

export async function getBlogPost(slug: string): Promise<any> {
    const entry = await fetchGraphQL(
        `query {
            pageBlogPostCollection(where: { slug: "${slug}" }, locale: "en-US") {
                items {
                    ${PAGE_BLOG_POST_FIELDS}
                }
            }
        }`
    );

    return extractBlogPost(entry);
}

export async function getLanding() {
    const entry = await fetchGraphQL(
        `query {
            pageLandingCollection(preview: true, limit: 1, locale: "en-US") {
                items {
                    __typename
                    sys {
                        id
                        spaceId
                    }
                    internalName
                    featuredBlogPost {
                        __typename
                        sys {
                            id
                            spaceId
                        }
                        slug
                        author {
                            ${AUTHOR_FIELDS}
                        }
                        publishedDate
                        title
                        shortDescription
                        featuredImage {
                            ${IMAGE_FIELDS}
                        }
                    }
                }
            }
        }`,
        true
    );

    return extractLanding(entry);
}
