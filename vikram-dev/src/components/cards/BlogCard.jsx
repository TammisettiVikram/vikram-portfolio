import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <article className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface-elevated)] p-6">
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
                <h3 className="font-semibold text-[var(--text-primary)]">{blog.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{blog.excerpt}</p>

                <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-blue-500"
                    data-cursor="interactive"
                >
                    Read
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        -&gt;
                    </span>
                </Link>
            </div>
        </article>
    );
}
