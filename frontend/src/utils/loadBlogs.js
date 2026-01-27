import fm from "front-matter";

// Vite glob import (raw markdown)
const blogFiles = import.meta.glob("/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export function getAllBlogs() {
    return Object.entries(blogFiles).map(([path, rawContent]) => {
        const parsed = fm(rawContent);

        const slug = path
            .split("/")
            .pop()
            .replace(".md", "");

        return {
            slug,
            ...parsed.attributes,
            content: parsed.body,
        };
    });
}

export function getBlogBySlug(slug) {
    const entry = Object.entries(blogFiles).find(([path]) =>
        path.endsWith(`${slug}.md`)
    );

    if (!entry) return null;

    const parsed = fm(entry[1]);

    return {
        slug,
        ...parsed.attributes,
        content: parsed.body,
    };
}
