export default function About() {
    return (
        <div className="max-w-3xl space-y-6">
            <h1 className="text-2xl font-semibold">About Me</h1>

            <p className="leading-relaxed text-[var(--text-secondary)]">
                I am a backend-focused full-stack developer who enjoys designing scalable APIs,
                authentication systems, and clean data models.
            </p>

            <p className="leading-relaxed text-[var(--text-secondary)]">
                I primarily work with Flask and Django on the backend, PostgreSQL for data storage,
                and React for building simple but effective dashboards and internal tools.
            </p>

            <p className="leading-relaxed text-[var(--text-secondary)]">
                I care about clean architecture, security, and writing code that can grow with
                real-world usage.
            </p>
        </div>
    );
}
