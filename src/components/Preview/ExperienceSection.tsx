// src/components/Preview/ExperienceSection.tsx

import React from 'react';
import { Experience } from '../../types/cv.types';

interface Props {
  experiences: Experience[];
}

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
  return (
    <section>
      <h3>Experiência Profissional</h3>
      {experiences.map((exp, index) => (
        <div key={index}>
          <strong>{exp.role}</strong> em <em>{exp.company}</em><br />
          <span>
            {exp.startDate} – {exp.current ? 'Presente' : exp.endDate}
          </span>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;