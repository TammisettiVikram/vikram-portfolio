import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500 transition">
            <h3 className="font-semibold">{blog.title}</h3>
            <p className="text-sm text-slate-400 mt-2">
                {blog.excerpt}
            </p>

            <Link
                to={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-blue-500 hover:underline"
            >
                Read →
            </Link>
        </div>
    );
}
