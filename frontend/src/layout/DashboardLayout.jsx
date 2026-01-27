import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Sidebar />
            <main className="ml-64 p-8">
                <Outlet />
            </main>
        </div>
    );
}
