import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import AppRoutes from "./app/routes";
import CursorGlow from "./components/ui/CursorGlow";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
                <Route path="projects" element={<Projects />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}
export default function App() {
    return (
        <>
            <CursorGlow />
            <AppRoutes />
        </>
    );
}