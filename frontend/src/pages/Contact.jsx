import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useMagnetic from "../hooks/useMagnetic";

const contacts = [
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/TammisettiVikram",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tammisetti-vikram-044275293/",
    },
    {
        icon: FaEnvelope,
        label: "Email",
        href: "mailto:vikramtammisetti@gmail.com",
    },
];

export default function Contact() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Contact</h1>

            <div className="flex gap-6">
                {contacts.map(({ icon: Icon, href, label }) => {
                    const magnetic = useMagnetic(12);

                    return (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            ref={magnetic.ref}
                            onMouseMove={magnetic.onMouseMove}
                            onMouseLeave={magnetic.onMouseLeave}
                            className="group relative flex h-14 w-14 items-center justify-center
                            rounded-xl bg-slate-900/80 backdrop-blur
                            border border-slate-800/70
                            hover:border-blue-500/50
                            overflow-visible transition-all duration-300"
                        >
                            {/* Ripple */}
                            <span
                                className="absolute inset-0 rounded-xl
                                bg-blue-500/20
                                scale-0 opacity-0
                                group-hover:scale-150 group-hover:opacity-100
                                transition-all duration-500 ease-out
                                pointer-events-none"
                            />

                            {/* glow */}
                            <span
                                className="absolute -inset-2 rounded-xl
                                bg-blue-500/30 blur-xl
                                opacity-0 group-hover:opacity-100
                                transition pointer-events-none"
                            />


                            <Icon
                                className="relative z-10 text-xl
                                text-slate-400
                                group-hover:text-blue-400
                                transition" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
