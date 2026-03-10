import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import "./App.css";
import { HeroSlideProvider } from "./context/Heroslidecontext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <HeroSlideProvider>
      <App />
      </HeroSlideProvider>
    </BrowserRouter>
  </StrictMode>
);