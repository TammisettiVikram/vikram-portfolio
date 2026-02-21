import AppRoutes from "./app/routes";
import CursorGlow from "./components/ui/CursorGlow";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <CursorGlow />
      <AppRoutes />
    </ThemeProvider>
  );
}
