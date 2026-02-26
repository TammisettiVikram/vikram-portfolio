import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useMagnetic from "../hooks/useMagnetic";
import Reveal from "../components/ui/Reveal";

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

function ContactIcon({ icon: Icon, href, label }) {
    const magnetic = useMagnetic(12);

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            ref={magnetic.ref}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
            data-cursor="interactive"
            className="group relative flex h-14 w-14 items-center justify-center overflow-visible rounded-xl border border-[var(--border-color)] bg-[var(--surface-elevated)]"
        >
            <span className="pointer-events-none absolute -inset-2 rounded-xl bg-blue-500/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <Icon className="relative z-10 text-xl text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-blue-500" />
        </a>
    );
}

export default function Contact() {
    return (
        <div className="space-y-6">
            <Reveal as="h1" className="text-2xl font-semibold">
                Contact
            </Reveal>

            <Reveal as="div" className="flex gap-6" delay={120}>
                {contacts.map((contact) => (
                    <ContactIcon key={contact.label} {...contact} />
                ))}
            </Reveal>
        </div>
    );
}
