import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // corrected import
import useTheme from "../hooks/useTheme";

const links = [
    { label: "Dashboard", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
];

const navItem =
    "relative flex items-center px-4 py-3 rounded-lg text-slate-300 hover:text-white transition";
const active =
    "bg-blue-500/10 text-white";

export default function Sidebar() {
    const { theme, setTheme } = useTheme();

    return (
        <aside className="
        fixed left-0 top-0 h-full w-64
        bg-slate-900 text-slate-100
        dark:bg-slate-950
        border-r border-slate-800"
        >
            {/* Brand */}
            <div className="p-6 text-2xl font-bold text-blue-500">
                Vikram.dev
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-1 flex-1">
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? active : ""}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* Active indicator */}
                                {isActive && (
                                    <span
                                        className="absolute left-0 top-0 h-full w-1
                                        bg-blue-500
                                        rounded-r
                                        shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                                    />
                                )}
                                <span className="ml-2">{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Theme Toggle */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="m-4 flex items-center gap-2 px-4 py-2
                    rounded-lg bg-slate-800/50 hover:bg-slate-700
                    transition"
            >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                <span className="text-sm">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
            </button>
        </aside>
    );
}
