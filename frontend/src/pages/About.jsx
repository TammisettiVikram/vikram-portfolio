export default function About() {
    return (
        <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl font-bold">About Me</h1>

            <p className="text-slate-300">
                I’m a backend-focused full-stack developer who enjoys building
                scalable APIs, authentication systems, and data-driven applications.
            </p>

            <p className="text-slate-300">
                I primarily work with Flask and Django on the backend, and React on
                the frontend. I care about clean architecture, readable code, and
                production-ready deployments.
            </p>

            <div>
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <ul className="list-disc list-inside text-slate-300">
                    <li>Python, Flask, Django</li>
                    <li>React, Tailwind CSS</li>
                    <li>PostgreSQL</li>
                    <li>Docker, GitHub Actions</li>
                </ul>
            </div>
        </div>
    );
}
