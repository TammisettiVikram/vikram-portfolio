import { NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import useMagnetic from "../hooks/useMagnetic";

const links = [
    { label: "Dashboard", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
];

const navItem =
    "relative nav-magnetic-item flex items-center px-4 py-3 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200";
const active =
    "bg-blue-500/12 text-[var(--text-primary)]";

function MagneticNavLink({ to, label }) {
    const magnetic = useMagnetic(20);

    return (
        <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) => `${navItem} ${isActive ? active : ""}`}
        >
            {({ isActive }) => (
                <span
                    ref={magnetic.ref}
                    onPointerMove={magnetic.onMouseMove}
                    onPointerLeave={magnetic.onMouseLeave}
                    className="flex w-full items-center"
                >
                    {isActive && (
                        <span
                            className="absolute left-0 top-0 h-full w-1 rounded-r bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.8)]"
                        />
                    )}
                    <span className="ml-2">{label}</span>
                </span>
            )}
        </NavLink>
    );
}

export default function Sidebar({ isOpen = false, onClose = () => {} }) {
    const { theme, toggleTheme } = useTheme();
    const themeMagnetic = useMagnetic(14);

    return (
        <aside
            className={`fixed left-0 top-0 h-full w-64
            border-r border-[var(--border-color)]
            bg-[var(--surface-elevated)]/90 text-[var(--text-primary)]
            backdrop-blur-xl transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-50`}
            aria-hidden={!isOpen && typeof window !== "undefined" && window.innerWidth < 768}
        >
            <button
                onClick={onClose}
                className="md:hidden absolute right-3 top-3 p-2 text-[var(--text-muted)]"
                aria-label="Close menu"
            >
                <FaTimes />
            </button>
            {/* Brand */}
            <div className="p-6">
                <p className="text-2xl font-black tracking-tight text-blue-500">
                    Vikram.dev
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {theme === "dark" ? "Night Build Active" : "Day Build Active"}
                </p>
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-1 flex-1 overflow-y-auto pt-6">
                {links.map(({ to, label }) => (
                    <MagneticNavLink key={to} to={to} label={label} />
                ))}
            </nav>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                ref={themeMagnetic.ref}
                onMouseMove={themeMagnetic.onMouseMove}
                onMouseLeave={themeMagnetic.onMouseLeave}
                data-cursor="interactive"
                className="m-4 flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface-muted)] px-4 py-2 text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                <span className="text-sm">
                    {theme === "dark" ? "Switch To Light" : "Switch To Dark"}
                </span>
            </button>
        </aside>
    );
}
