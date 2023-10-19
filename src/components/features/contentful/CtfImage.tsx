import { ImageFieldsFragment } from "@src/lib/__generated/sdk";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageProps extends Omit<ImageFieldsFragment, "__typename"> {
    nextImageProps?: Omit<NextImageProps, "alt" | "src">;
}

export const CtfImage = ({ height, nextImageProps, title, url, width }: ImageProps) => {
    if (!url || !width || !height) return null;

    const blurURL = new URL(url);
    blurURL.searchParams.set("w", "10");

    return (
        <NextImage
            alt={title || ""}
            blurDataURL={blurURL.toString()}
            height={height}
            placeholder="blur"
            sizes="(max-width: 1200px) 100vw, 50vw"
            src={url}
            width={width}
            {...nextImageProps}
            className={twMerge(nextImageProps?.className, "transition-all")}
        />
    );
};
