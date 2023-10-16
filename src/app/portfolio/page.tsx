import { GitHubCard } from "@/components/GitHubCard";
import { getGitHubRepos } from "./actions";

export default async function Portfolio() {
  const repos = await getGitHubRepos();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center">Portfolio</h1>
      <h2 className="text-xl font-bold text-center mt-8 mb-8">
        GitHub at a glance
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {repos?.map((repo: any, i: number) => (
          <GitHubCard
            key={repo.id}
            createdAt={repo.created_at}
            description={repo.description}
            htmlUrl={repo.html_url}
            language={repo.language}
            name={repo.name}
            privateBool={repo.private}
          />
        ))}
      </div>
    </div>
  );
}
