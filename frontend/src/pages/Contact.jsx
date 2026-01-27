export default function Contact() {
    return (
        <div className="max-w-xl space-y-6">
            <h1 className="text-3xl font-bold">Contact</h1>

            <p className="text-slate-300">
                Feel free to reach out for opportunities, collaborations, or questions.
            </p>

            <ul className="space-y-3 text-slate-300">
                <li>
                    📧 Email:{" "}
                    <a
                        href="mailto:vikramtammisetti@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        vikramtammisetti@gmail.com.com
                    </a>
                </li>
                <li>
                    💼 LinkedIn:{" "}
                    <a
                        href="www.linkedin.com/in/tammisetti-vikram-044275293"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        linkedin.com/in/tammisetti-vikram-044275293
                    </a>
                </li>
                <li>
                    🧑‍💻 GitHub:{" "}
                    <a
                        href="https://github.com/TammisettiVikram"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        github.com/TammisettiVikram
                    </a>
                </li>
            </ul>
        </div>
    );
}
