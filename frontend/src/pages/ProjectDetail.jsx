import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="space-y-8 max-w-3xl">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-slate-400">{project.stack}</p>

            {/* Overview */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-slate-300">
                    {project.description}
                </p>
            </section>

            {/* Key Features */}
            {project.features && (
                <section>
                    <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Tech Stack */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <p className="text-slate-300">{project.stack}</p>
            </section>

            {/* Links */}
            <section className="flex gap-4 pt-4">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                        Live Demo
                    </a>
                )}

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
                    >
                        View Code
                    </a>
                )}
            </section>
        </div>
    );
}
