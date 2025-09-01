import React from 'react';
import { FormSection } from './components/Layout/FormSection';
import { PreviewSection } from './components/Layout/PreviewSection';
import { useCVData } from './hooks/useCVData';
import { ErrorBoundary } from './components/UI/ErrorBoundary';

function App() {
  const {
    cvData,
    updatePersonalField,
    addSkill,
    updateSkill,
    removeSkill,
    addExperience,
    updateExperience,
    removeExperience,
    resetCVData,
    hasData
  } = useCVData();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        {/* Container Principal Split-Screen */}
        <div className="flex h-screen">
          
          {/* Seção Esquerda - Formulário (50%) */}
          <div className="w-1/2 h-full">
            <FormSection
              cvData={cvData}
              updatePersonalField={updatePersonalField}
              addSkill={addSkill}
              updateSkill={updateSkill}
              removeSkill={removeSkill}
              addExperience={addExperience}
              updateExperience={updateExperience}
              removeExperience={removeExperience}
              resetCVData={resetCVData}
            />
          </div>

          {/* Seção Direita - Preview (50%) */}
          <div className="w-1/2 h-full">
            <PreviewSection cvData={cvData} />
          </div>
        </div>

        {/* Footer Global (opcional) */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex items-center gap-2">
            
            {/* Indicador de Status */}
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">
                {hasData() ? 'Dados salvos' : 'Aguardando dados'}
              </span>
            </div>

            {/* Botão de Reset Global (se houver dados) */}
            {hasData() && (
              <button
                onClick={() => {
                  if (window.confirm('Tem certeza que deseja limpar todos os dados?')) {
                    resetCVData();
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                title="Limpar todos os dados"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}

            {/* Botão de Ajuda */}
            <button
              onClick={() => {
                alert('CV Builder AI\n\n' +
                      '1. Preencha seus dados pessoais\n' +
                      '2. Adicione suas habilidades\n' +
                      '3. Inclua suas experiências\n' +
                      '4. Veja o preview em tempo real\n\n' +
                      'Dica: Seus dados são atualizados instantaneamente!');
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
              title="Ajuda e instruções"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;