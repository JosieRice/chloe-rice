import { ArticleImage } from "@/components/features/article/ArticleImage";
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

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
    switch (entry?.__typename) {
        case "ComponentRichImage":
            return <ArticleImage image={entry} />;
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
    },
});

export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
    const baseOptions = contentfulBaseRichTextOptions({ json, links });

    return <article className="prose prose-sm max-w-none">{documentToReactComponents(json, baseOptions)}</article>;
};
