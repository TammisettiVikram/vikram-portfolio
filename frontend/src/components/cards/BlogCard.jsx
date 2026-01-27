import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <div className="group relative rounded-xl bg-slate-900 p-6 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
            {/* Glow effect on hover */}
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-xl"></span>

            {/* Content sits above the glow */}
            <div className="relative z-10">
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
        </div>
    );
}
/*rree*/