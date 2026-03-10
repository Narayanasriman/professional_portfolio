import { Routes, Route, useLocation } from "react-router-dom";
import OpeningPage from "./Pages/Landing_page";
import { ProfilesPage } from "./Pages/Profiles_page";
import HomePage from "./Pages/Home_page";
import ExperiencePage from "./Pages/Experience";
import Sidebar from "./components/Sidebar";
import ProjectsPage from "./Pages/Projects";
import EducationPage from "./Pages/Education";
import About from "./Pages/About";
export default function App() {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/" || location.pathname === "/profiles";

  return (
    <>
      {!hideSidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/profile" element={<About/>} />
      </Routes>
    </>
  );
}