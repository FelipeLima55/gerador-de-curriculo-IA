import React, { useState } from "react";
import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";
import "./index.css";

interface FormData {
  nome: string;
  email: string;
  resumo: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    resumo: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Botão modo noturno */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo Claro" : "Modo Noturno"}
      </button>

      <div className="container">
        <div className="column left-pane">
          <FormSection formData={formData} setFormData={setFormData} />
        </div>
        <div className="column right-pane">
          <PreviewSection formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;








