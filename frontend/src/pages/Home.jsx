import StatCard from "../components/cards/StatCard";
import ProjectCard from "../components/cards/ProjectCard";
import BlogCard from "../components/cards/BlogCard";
import { projects } from "../data/projects";
import { blogs } from "../data/blogs";

export default function Home() {
    return (
        <div className="space-y-12">

            {/* Hero */}
            <section className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-slate-900 p-8 border border-slate-800">
                <h1 className="text-4xl font-bold mb-3">
                    Building scalable backend systems
                </h1>
                <p className="text-slate-300 max-w-2xl">
                    Backend-focused full-stack developer using Flask, Django,
                    React, PostgreSQL, and Docker.
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard label="Projects Built" value="5" />
                <StatCard label="Backend APIs" value="12+" />
                <StatCard label="Auth Systems" value="3" />
                <StatCard label="Tech Stack" value="Flask, Django" />
            </section>

            {/* Projects */}
            <section>
                <h2 className="text-xl font-semibold mb-4">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            </section>

            {/* Blogs */}
            <section>
                <h2 className="text-xl font-semibold mb-4">
                    Latest Blogs
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((b) => (
                        <BlogCard key={b.slug} blog={b} />
                    ))}
                </div>
            </section>

        </div>
    );
}
