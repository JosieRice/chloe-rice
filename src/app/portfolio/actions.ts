"use server";

export async function getGitHubRepos() {
    const res = await fetch("https://api.github.com/users/josierice/repos?sort=updated&order=desc&page=1&per_page=6", { next: { revalidate: 3600 } });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch github repos");
    }

    return res.json();
}
