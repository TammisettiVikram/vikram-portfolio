import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </div>
    );
}
