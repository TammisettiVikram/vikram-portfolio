import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen
                bg-slate-50 text-slate-900
                dark:bg-slate-950 dark:text-slate-100
                transition-colors">
            <Sidebar />
            <main className="ml-64 p-8">
                <Outlet />
            </main>
        </div>
    );
}
