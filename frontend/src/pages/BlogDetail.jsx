import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from "../utils/loadBlogs";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = getBlogBySlug(slug);

    useEffect(() => {
        Prism.highlightAll();
    }, [blog]);

    if (!blog) return <div>Blog not found</div>;

    return (
        <article className="max-w-3xl prose prose-slate dark:prose-invert">
            <h1>{blog.title}</h1>
            <p className="text-sm text-slate-400">
                {new Date(blog.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>

            <ReactMarkdown
                components={{
                    code({ inline, className, children }) {
                        return !inline ? (
                            <pre className={className}>
                                <code className={className}>{children}</code>
                            </pre>
                        ) : (
                            <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {blog.content}
            </ReactMarkdown>
        </article>
    );
}
