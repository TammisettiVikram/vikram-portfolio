export default function Resume() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Resume</h1>

            <p className="text-slate-300">
                You can download my resume below.
            </p>

            <a
                href="/TammisettiVikram-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition"
            >
                Download Resume (PDF)
            </a>
        </div>
    );
}
