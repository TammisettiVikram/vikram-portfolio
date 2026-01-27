import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-slate-400">{project.stack}</p>

            <section>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-slate-300">
                    {project.description}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-slate-300">
                    <li>Authentication & Authorization</li>
                    <li>REST API design</li>
                    <li>PostgreSQL integration</li>
                    <li>Production-ready deployment</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <p className="text-slate-300">{project.stack}</p>
            </section>
        </div>
    );
}
