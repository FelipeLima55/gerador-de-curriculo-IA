// src/utils/validation.ts
export function validateExperienceDates(startDate: string, endDate?: string, isCurrent?: boolean): boolean {
  if (!startDate) return false;

 
  if (!isCurrent && (!endDate || new Date(startDate) > new Date(endDate))) {
    return false;
  }

  return true;
}
