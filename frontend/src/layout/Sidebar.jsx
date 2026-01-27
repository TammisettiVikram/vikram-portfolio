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
                            `block rounded-lg px-4 py-2 transition ${isActive
                                ? "bg-blue-500 text-white"
                                : "text-slate-300 hover:bg-slate-800"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

        </aside>
    );
}
