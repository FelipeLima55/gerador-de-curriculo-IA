export type SkillLevel = "Basico"| "Intermediário"|"Avançado";


export interface Skill{
    id: number;
    name:string;
    level:SkillLevel;
}


