import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 text-slate-100">
            {/* Brand */}
            <div className="p-6 text-2xl font-bold text-blue-500">
                Vikram.dev
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `
    group relative block rounded-lg px-4 py-2 transition-all duration-300
    ${isActive
                                ? "bg-blue-500 text-white"
                                : "text-slate-300 hover:text-white"
                            }
    hover:translate-x-1
    `
                        }
                    >
                        {/* Glow */}
                        <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-md"></span>

                        {/* Text */}
                        <span className="relative z-10">{item.name}</span>
                    </NavLink>

                ))}
            </nav>

        </aside>
    );
}
