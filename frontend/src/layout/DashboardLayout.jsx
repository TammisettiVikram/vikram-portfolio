import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
            {/* Mobile hamburger */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="fixed top-4 left-4 z-40 md:hidden p-2 rounded-md bg-[var(--surface-elevated)]/80"
                aria-label="Open menu"
            >
                <FaBars />
            </button>

            {/* Overlay when sidebar open on mobile */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-30 bg-black/40 md:hidden" />}

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="p-4 md:p-10 ml-0 md:ml-64">
                <Outlet />
            </main>
        </div>
    );
}
