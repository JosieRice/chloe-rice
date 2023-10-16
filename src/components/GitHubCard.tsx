import { iconDictionary } from "@/utils/iconDictionary";

interface Props {
    htmlUrl: string;
    privateBool: boolean;
    name: string;
    createdAt: string;
    description: string;
    language: string;
}

export function GitHubCard({ htmlUrl, name, privateBool, createdAt, description, language }: Props) {
    return (
        <a className="card w-96 bg-accent-content shadow-xl border-solid border-2 border-neutral" href={htmlUrl} target="_blank">
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="flex">
                        <h2 className="card-title">{name}</h2>
                        <span className="badge badge-outline ml-2">{privateBool ? "private" : "public"}</span>
                    </div>
                    <div className="tooltip" data-tip={`Created: ${new Date(createdAt).toDateString()}`}>
                        {iconDictionary["calendar"]}
                    </div>
                </div>
                <p>{description}</p>
                <div className="flex items-center">
                    {getLanguageDot(language)}
                    <p>{language}</p>
                </div>
            </div>
        </a>
    );
}

const getLanguageDot = (language: string) => {
    let color;
    if (language.toLowerCase() === "javascript") color = "#f1e05a";
    if (language.toLowerCase() === "typescript") color = "#3178c6";
    if (language.toLowerCase() === "css") color = "#563d7c";

    if (color)
        return (
            <span
                style={{
                    backgroundColor: color,
                    width: "12px",
                    height: "12px",
                    borderRadius: "50px",
                    marginRight: "8px",
                }}
            />
        );
    else return null;
};
