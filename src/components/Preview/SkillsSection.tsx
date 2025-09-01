import React from "react";
import type{ Skill } from "../../types/cv.types";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Habilidades</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;