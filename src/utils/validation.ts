import type { Skill } from "../types/cv.types.ts";

export const validateSkill = (Skill:Skill) : boolean =>{
    return Skill.name.trim().length > 0;
}