import React from "react";
import type { Skill, SkillLevel } from "../../types/cv.types";
import { validateSkill } from "../../utils/validation";

interface SkillsProps { 
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}

const Skills: React.FC<SkillsProps> = ({ skills, setSkills }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now(),
      name: "",
      Level: "Básico",
    };
    setSkills([...skills, newSkill]);
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const updateSkill = (id: number, field: keyof Skill, value: string) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Habilidades</h2>
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Habilidade"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
            className={`border p-1 rounded w-1/2 ${
              !validateSkill(skill) ? "border-red-500" : ""
            }`}
          />
          <select
            value={skill.level}
            onChange={(e) =>
              updateSkill(skill.id, "level", e.target.value as SkillLevel)
            }
            className="border p-1 rounded"
          >
            <option value="Básico">Básico</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button
            type="button"
            onClick={() => removeSkill(skill.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remover
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Adicionar Habilidade
      </button>
    </div>
  );
};

export default Skills;
