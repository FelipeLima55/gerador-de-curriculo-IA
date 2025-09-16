// src\components\Form\Experience.tsx

import React, { useState } from 'react';

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

const ExperienceForm: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const handleChange =<K extends keyof Experience>(
  index: number,
  field: K,
  value: Experience[K]
) => {
  const updated = [...experiences];
  // Agora o TypeScript entende a conexão entre o campo e o valor
  // e o erro desaparece, sem precisar do "as any".
  updated[index][field] = value; 
  setExperiences(updated);
};

  const handleRemoveExperience = (index: number) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  return (
    <div>
      <h2>Experiências Profissionais</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-block">
          <input
            type="text"
            placeholder="Empresa"
            value={exp.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
          />
          <input
            type="text"
            placeholder="Cargo"
            value={exp.role}
            onChange={(e) => handleChange(index, 'role', e.target.value)}
          />
          <input
            type="date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
          />
          {!exp.current && (
            <input
              type="date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, 'endDate', e.target.value)}
            />
          )}
          <label>
            <input
              type="checkbox"
              checked={exp.current}
              onChange={(e) => handleChange(index, 'current', e.target.checked)}
            />
            Trabalho atual
          </label>
          <textarea
            placeholder="Descrição das atividades"
            value={exp.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
          <button onClick={() => handleRemoveExperience(index)}>Remover</button>
        </div>
      ))}
      <button onClick={handleAddExperience}>Adicionar Experiência</button>
    </div>
  );
};

export default ExperienceForm;