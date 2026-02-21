import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";
import Reveal from "../components/ui/Reveal";

const bentoClasses = [
    "md:col-span-3 md:row-span-2",
    "md:col-span-3",
    "md:col-span-2",
    "md:col-span-4",
];

export default function Projects() {
    return (
        <div className="space-y-6">
            <Reveal as="header">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="mt-2 text-[var(--text-secondary)]">
                    Dynamic showcase with bento transitions, 3D card tilt, and live reliability signals.
                </p>
            </Reveal>

            <div className="bento-grid grid gap-6 md:grid-cols-6">
                {projects.map((p, idx) => (
                    <Reveal
                        key={p.slug}
                        className={bentoClasses[idx % bentoClasses.length]}
                        delay={idx * 80}
                    >
                        <ProjectCard project={p} index={idx} className="h-full" />
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
