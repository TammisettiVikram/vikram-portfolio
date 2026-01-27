import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition">
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
    );
}
