import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative rounded-xl bg-slate-900 p-6 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
            {/* Glow effect on hover */}
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-xl"></span>

            {/* Content sits above the glow */}
            <div className="relative z-10">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{project.stack}</p>
                <p className="text-slate-300 mt-3 text-sm">
                    {project.description}
                </p>

                <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block mt-4 text-blue-500 hover:underline"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
}
