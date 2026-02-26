import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0, className = "" }) {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    const metrics = useMemo(() => {
        const uptime = (99.1 + ((index * 0.33) % 0.8)).toFixed(2);
        const latency = 70 + index * 11;
        return { uptime, latency };
    }, [index]);

    const onMouseMove = (e) => {
        const el = cardRef.current;
        const glow = glowRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 16;
        const rotateX = (0.5 - py) * 14;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-4px,0)`;
        if (glow) {
            glow.style.opacity = "1";
            glow.style.transform = `translate3d(${(px - 0.5) * 16}px, ${(py - 0.5) * 16}px, 0)`;
        }
    };

    const onMouseLeave = () => {
        const el = cardRef.current;
        const glow = glowRef.current;
        if (!el) return;

        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
        if (glow) {
            glow.style.opacity = "0";
            glow.style.transform = "translate3d(0,0,0)";
        }
    };

    return (
        <article
            className={`group relative ${className}`.trim()}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <div
                ref={cardRef}
                className="project-tilt relative h-full rounded-2xl border border-[var(--border-color)] bg-[var(--surface-elevated)] p-6"
            >
                <span
                    ref={glowRef}
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/15 opacity-0 blur-2xl"
                />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                            <span className="status-pulse" />
                            Live Data
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{metrics.uptime}% uptime</span>
                    </div>

                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{project.stack}</p>
                    <p className="mt-3 text-sm text-[var(--text-secondary)]">{project.description}</p>

                    <div className="mt-5 flex items-center justify-between text-xs text-[var(--text-muted)]">
                        <span>Latency: {metrics.latency}ms</span>
                        <span>{index % 2 === 0 ? "Healthy" : "Stable"}</span>
                    </div>

                    <Link
                        to={`/projects/${project.slug}`}
                        className="mt-4 inline-flex w-fit items-center gap-2 text-blue-500"
                        data-cursor="interactive"
                    >
                        View Details
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                            -&gt;
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
