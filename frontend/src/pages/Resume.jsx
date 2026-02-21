export default function Resume() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Resume</h1>

            <p className="text-[var(--text-secondary)]">
                You can download my resume below.
            </p>

            <a
                href="/TammisettiVikram-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white transition-opacity duration-200 hover:opacity-90"
                data-cursor="interactive"
            >
                Download Resume (PDF)
            </a>
        </div>
    );
}
