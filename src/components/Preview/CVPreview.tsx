import React from 'react';
import { CVData } from '../../types/cv.types';
import { PersonalHeader } from './PersonalHeader';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';

interface CVPreviewProps {
  cvData: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const isEmpty = !cvData.personalInfo.name && 
                  cvData.skills.length === 0 && 
                  cvData.experiences.length === 0;

  if (isEmpty) {
    return (
      <div className="w-full h-full bg-white shadow-lg rounded-lg p-8 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-xl font-medium mb-2">Preview do Currículo</h3>
          <p className="text-sm">
            Preencha o formulário ao lado para ver<br />
            seu currículo sendo criado em tempo real
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Container do CV com proporções A4 */}
      <div className="w-full h-full overflow-y-auto">
        <div className="min-h-full p-8 space-y-6">
          
          {/* Cabeçalho com dados pessoais */}
          <PersonalHeader personalInfo={cvData.personalInfo} />
          
          {/* Resumo Profissional - se existir */}
          {cvData.personalInfo.summary && (
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                Resumo Profissional
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed">
                {cvData.personalInfo.summary.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-2">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Seção de Habilidades */}
          {cvData.skills.length > 0 && (
            <SkillsSection skills={cvData.skills} />
          )}

          {/* Seção de Experiências */}
          {cvData.experiences.length > 0 && (
            <ExperienceSection experiences={cvData.experiences} />
          )}

          {/* Indicador se todas as seções estão vazias */}
          {!cvData.personalInfo.summary && 
           cvData.skills.length === 0 && 
           cvData.experiences.length === 0 && 
           cvData.personalInfo.name && (
            <div className="text-center py-8 text-gray-400">
              <p className="text-sm">
                Continue preenchendo o formulário para adicionar mais seções ao seu currículo
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer com informações de layout */}
      <div className="bg-gray-50 px-8 py-3 border-t border-gray-200">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Preview em tempo real</span>
          <span>Layout otimizado para impressão</span>
        </div>
      </div>
    </div>
  );
};