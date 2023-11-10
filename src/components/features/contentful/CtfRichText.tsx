import { ArticleImage } from "@/components/features/article/ArticleImage";
import { getComponentRichImage } from "@/lib/api-graphql";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

export type EmbeddedEntryType = any | null;

export interface ContentfulRichTextInterface {
    json: Document;
    links?:
        | {
              entries: {
                  block: Array<EmbeddedEntryType>;
              };
          }
        | any;
}

export const EmbeddedEntry = async (entry: EmbeddedEntryType) => {
    switch (entry?.__typename) {
        case "ComponentRichImage":
            const componentRichImage = await getComponentRichImage(entry.sys.id);
            return <ArticleImage image={componentRichImage} />;
        default:
            return null;
    }
};

export const contentfulBaseRichTextOptions = ({ links }: ContentfulRichTextInterface): Options => ({
    renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            const entry = links?.entries?.block?.find((item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id);

            if (!entry) return null;

            return <EmbeddedEntry {...entry} />;
        },
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="mb-8 text-lg">{children}</h2>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal">{children}</ol>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-8 text-justify indent-8 text-base">{children}</p>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
    },
});

export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
    const baseOptions = contentfulBaseRichTextOptions({ json, links });

    return <article className="prose prose-sm max-w-none">{documentToReactComponents(json, baseOptions)}</article>;
};
