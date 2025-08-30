import { useState, useCallback } from 'react';
import { CVData, PersonalInfo, Skill, Experience, initialCVData } from '../types/cv.types';

export const useCVData = () => {
  const [cvData, setCVData] = useState<CVData>(initialCVData);

  // Funções para atualizar dados pessoais
  const updatePersonalInfo = useCallback((personalInfo: Partial<PersonalInfo>) => {
    setCVData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...personalInfo
      }
    }));
  }, []);

  const updatePersonalField = useCallback((field: keyof PersonalInfo, value: string) => {
    setCVData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  }, []);

  // Funções para gerenciar habilidades
  const addSkill = useCallback((skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skill,
      id: `skill-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    setCVData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  }, []);

  const updateSkill = useCallback((id: string, updates: Partial<Omit<Skill, 'id'>>) => {
    setCVData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, ...updates } : skill
      )
    }));
  }, []);

  const removeSkill = useCallback((id: string) => {
    setCVData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  }, []);

  // Funções para gerenciar experiências
  const addExperience = useCallback((experience: Omit<Experience, 'id'>) => {
    const newExperience: Experience = {
      ...experience,
      id: `exp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    setCVData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience]
    }));
  }, []);

  const updateExperience = useCallback((id: string, updates: Partial<Omit<Experience, 'id'>>) => {
    setCVData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, ...updates } : exp
      )
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setCVData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }));
  }, []);

  // Função para resetar todos os dados
  const resetCVData = useCallback(() => {
    setCVData(initialCVData);
  }, []);

  // Função para verificar se o CV tem dados
  const hasData = useCallback(() => {
    return (
      cvData.personalInfo.name.trim() !== '' ||
      cvData.skills.length > 0 ||
      cvData.experiences.length > 0
    );
  }, [cvData]);

  return {
    // Estado
    cvData,
    
    // Dados pessoais
    updatePersonalInfo,
    updatePersonalField,
    
    // Habilidades
    addSkill,
    updateSkill,
    removeSkill,
    
    // Experiências
    addExperience,
    updateExperience,
    removeExperience,
    
    // Utilitários
    resetCVData,
    hasData
  };
};