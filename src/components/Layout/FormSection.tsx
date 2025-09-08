import React from "react";

interface FormSectionProps {
  formData: {
    nome: string;
    email: string;
    resumo: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const FormSection: React.FC<FormSectionProps> = ({ formData, setFormData }) => {
  return (
    <div className="section-content">
      <h1>Formulário</h1>

      <div className="form-field">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>

      <div className="form-field">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-field">
        <label>Resumo:</label>
        <textarea
          placeholder="Digite um resumo"
          value={formData.resumo}
          onChange={(e) => setFormData({ ...formData, resumo: e.target.value })}
        />
      </div>
    </div>
  );
};

export default FormSection;





