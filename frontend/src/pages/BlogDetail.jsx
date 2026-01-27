import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from "../utils/loadBlogs";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <article className="prose prose-invert max-w-3xl">
            <h1>{blog.title}</h1>
            <p className="text-sm text-slate-400">
                {blog.date
                    ? new Date(blog.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                    : null}
            </p>


            <ReactMarkdown>
                {blog.content}
            </ReactMarkdown>
        </article>
    );
}
