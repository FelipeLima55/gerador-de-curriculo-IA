// Tipos para dados pessoais
export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
}

// Tipos para habilidades
export interface Skill {
    id: string;
    name: string;
    level: 'Básico' | 'Intermediário' | 'Avançado';
}

// Tipos para experiências
export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    isCurrentJob: boolean;
    description: string;
}

//Tipo principal do CV
export interface CVData {
    personalInfo: PersonalInfo;
    skills: Skill[];
    experiences: Experience[]
}

//Estados iniciais
export const initialPersonalInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    summary: ''
};

export const initialCVData: CVData = {
    personalInfo: initialPersonalInfo,
    skills: [],
    experiences: []
};

// Tipos para validação
export interface ValidationError {
    field: string;
    message: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError
}