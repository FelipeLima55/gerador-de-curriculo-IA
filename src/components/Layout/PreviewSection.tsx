import React from "react";

interface PreviewSectionProps {
  formData: {
    nome: string;
    email: string;
    resumo: string;
  };
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ formData }) => {
  return (
    <div className="preview-container">
      <div className="preview-header">
        <h1>{formData.nome || "Nome"}</h1>
        <p>{formData.email || "email@exemplo.com"}</p>
      </div>

      <div className="preview-section">
        <h2>Resumo</h2>
        <p>{formData.resumo || "Seu resumo aparecerá aqui."}</p>
      </div>
    </div>
  );
};

export default PreviewSection;




