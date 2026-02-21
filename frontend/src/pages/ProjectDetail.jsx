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
            <p className="text-[var(--text-muted)]">{project.stack}</p>

            {/* Overview */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-[var(--text-secondary)]">
                    {project.description}
                </p>
            </section>

            {/* Key Features */}
            {project.features && (
                <section>
                    <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Tech Stack */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <p className="text-[var(--text-secondary)]">{project.stack}</p>
            </section>

            {/* Links */}
            <section className="flex gap-4 pt-4">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-opacity duration-200 hover:opacity-90"
                        data-cursor="interactive"
                    >
                        Live Demo
                    </a>
                )}

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-[var(--border-color)] px-4 py-2 text-[var(--text-primary)] transition-opacity duration-200 hover:opacity-80"
                        data-cursor="interactive"
                    >
                        View Code
                    </a>
                )}
            </section>
        </div>
    );
}
