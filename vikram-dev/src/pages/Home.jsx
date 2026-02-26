import { useEffect, useMemo, useRef, useState } from "react";
import BlogCard from "../components/cards/BlogCard";
import ProjectCard from "../components/cards/ProjectCard";
import StatCard from "../components/cards/StatCard";
import SkillsMarquee from "../components/skills/skillsMarquee";
import Reveal from "../components/ui/Reveal";
import ScrambleText from "../components/ui/ScrambleText";
import { blogs } from "../data/blogs";
import { projects } from "../data/projects";
import useTheme from "../hooks/useTheme";

const terminalCommands = [
    {
        key: "deploy",
        label: "deploy --status",
        output: "Build pipeline healthy. API latency baseline: 83ms. Canary release in progress.",
    },
    {
        key: "logs",
        label: "tail logs --service auth",
        output: "JWT issuer active. 0 auth failures in the past hour. Refresh token rotation stable.",
    },
    {
        key: "monitor",
        label: "monitor ping --region all",
        output: "US-EAST 99.98%, EU-WEST 99.94%, AP-SOUTH 99.91%. No degraded endpoints.",
    },
];

export default function Home() {
    const { theme } = useTheme();
    const heroRef = useRef(null);
    const orbRef = useRef(null);
    const terminalRef = useRef(null);
    const [activeCommand, setActiveCommand] = useState(terminalCommands[0]);
    const [typedOutput, setTypedOutput] = useState("");

    const modeCopy = useMemo(() => {
        if (theme === "dark") {
            return {
                intro: "Dark mode keeps high-contrast focus for system depth work.",
                phrases: ["Design Systems Scalability", "Secure Secrets Management", "Stream Events Distribution", "Deploy Smooth Integration"],
            };
        }
        return {
            intro: "Light mode keeps architecture notes crisp for planning and reviews.",
            phrases: ["Shipping full-stack features", "Designing clean APIs", "Platform Design Resilience", "Software System Integrity"],
        };
    }, [theme]);

    const handleHeroMove = (e) => {
        const hero = heroRef.current;
        const orb = orbRef.current;
        const terminal = terminalRef.current;
        if (!hero || !orb || !terminal) return;

        const rect = hero.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        orb.style.transform = `translate3d(${px * 26}px, ${py * 26}px, 0)`;
        terminal.style.transform = `translate3d(${px * 14}px, ${py * 14}px, 0) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
    };

    const resetHero = () => {
        if (orbRef.current) orbRef.current.style.transform = "translate3d(0,0,0)";
        if (terminalRef.current) terminalRef.current.style.transform = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
    };

    useEffect(() => {
        let frameId;
        let index = 0;
        const fullText = activeCommand.output;

        const write = () => {
            setTypedOutput(fullText.slice(0, index));
            index += 1;
            if (index <= fullText.length) {
                frameId = window.setTimeout(write, 14);
            }
        };

        setTypedOutput("");
        write();

        return () => window.clearTimeout(frameId);
    }, [activeCommand]);

    return (
        <div className="space-y-12">
            <Reveal
                as="section"
                className="hero-shell relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-elevated)] p-8 backdrop-blur"
            >
                <div
                    ref={heroRef}
                    className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr]"
                    onPointerMove={handleHeroMove}
                    onPointerLeave={resetHero}
                >
                    <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-500">Backend Systems Engineer</p>
                        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                            <ScrambleText phrases={modeCopy.phrases} />
                        </h1>
                        <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                            Backend-focused full-stack developer using Flask, Django, React, PostgreSQL, and Docker.
                        </p>
                        <p className="mt-2 text-sm text-[var(--text-muted)]">{modeCopy.intro}</p>
                    </div>

                    <div
                        ref={terminalRef}
                        className="terminal-panel relative z-10 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-muted)] p-4"
                    >
                        <p className="mb-3 text-xs text-[var(--text-muted)]">$ interactive terminal</p>
                        <div className="mb-3 flex flex-wrap gap-2">
                            {terminalCommands.map((command) => (
                                <button
                                    key={command.key}
                                    onClick={() => {
                                        setActiveCommand(command);
                                        setTypedOutput(command.output);
                                    }}
                                    className={`rounded-full px-3 py-1 text-xs transition-opacity duration-200 ${
                                        activeCommand.key === command.key
                                            ? "bg-blue-500 text-white opacity-100"
                                            : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] opacity-85 hover:opacity-100"
                                    }`}
                                    data-cursor="interactive"
                                >
                                    {command.label}
                                </button>
                            ))}
                        </div>

                        <div className="rounded-xl bg-black/80 p-3 font-mono text-xs text-emerald-400">
                            <p>&gt; {activeCommand.label}</p>
                            <p className="mt-2 text-emerald-300">{typedOutput}</p>
                        </div>
                    </div>

                    <span
                        ref={orbRef}
                        className="hero-orb pointer-events-none touch-none absolute right-4 top-2 h-28 w-28 md:h-40 md:w-40 rounded-full"
                    />
                </div>
            </Reveal>

            <Reveal as="section">
                <h2 className="mb-4 text-xl font-semibold">Technical Skills</h2>
                <SkillsMarquee />
            </Reveal>

            <Reveal as="section" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Projects Built" value="5" />
                <StatCard label="Backend APIs" value="12+" />
                <StatCard label="Auth Systems" value="3" />
                <StatCard label="Tech Stack" value="Flask, Django" />
            </Reveal>

            <Reveal as="section">
                <h2 className="mb-4 text-xl font-semibold">Featured Projects</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((p, idx) => (
                        <ProjectCard key={p.slug} project={p} index={idx} />
                    ))}
                </div>
            </Reveal>

            <Reveal as="section">
                <h2 className="mb-4 text-xl font-semibold">Latest Blogs</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {blogs.map((b) => (
                        <BlogCard key={b.slug} blog={b} />
                    ))}
                </div>
            </Reveal>
        </div>
    );
}
