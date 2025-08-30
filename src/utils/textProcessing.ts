// Funções para processamento de texto no preview

/**
 * Formata o nome completo para exibição no cabeçalho
 */
export const formatName = (name: string): string => {
  return name.trim().replace(/\s+/g, ' ').toUpperCase();
};

/**
 * Formata o email para exibição
 */
export const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

/**
 * Formata o telefone para exibição
 */
export const formatPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = phone.replace(/\D/g, '');
  
  // Aplica formatação brasileira
  if (numbers.length === 11) {
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (numbers.length === 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return phone; // Retorna original se não conseguir formatar
};

/**
 * Formata a URL do LinkedIn
 */
export const formatLinkedIn = (linkedin: string): string => {
  const trimmed = linkedin.trim();
  
  // Se já é uma URL completa, retorna como está
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  
  // Se começa com linkedin.com, adiciona https://
  if (trimmed.startsWith('linkedin.com') || trimmed.startsWith('www.linkedin.com')) {
    return `https://${trimmed}`;
  }
  
  // Se é apenas o username, constrói a URL completa
  if (trimmed.startsWith('/in/')) {
    return `https://linkedin.com${trimmed}`;
  }
  
  // Se é apenas o username sem /in/
  if (!trimmed.includes('linkedin.com') && trimmed.length > 0) {
    return `https://linkedin.com/in/${trimmed}`;
  }
  
  return trimmed;
};

/**
 * Extrai apenas o nome do usuário do LinkedIn para exibição
 */
export const getLinkedInDisplayName = (linkedin: string): string => {
  const formatted = formatLinkedIn(linkedin);
  const match = formatted.match(/linkedin\.com\/in\/([^/?]+)/);
  return match ? match[1] : linkedin;
};

/**
 * Formata datas para exibição
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return dateString; // Retorna original se não conseguir formatar
  }
};

/**
 * Formata período de experiência
 */
export const formatPeriod = (startDate: string, endDate: string, isCurrentJob: boolean): string => {
  const start = formatDate(startDate);
  const end = isCurrentJob ? 'Atual' : formatDate(endDate);
  
  if (!start) return '';
  return `${start} - ${end}`;
};

/**
 * Calcula duração de uma experiência
 */
export const calculateDuration = (startDate: string, endDate: string, isCurrentJob: boolean): string => {
  if (!startDate) return '';
  
  try {
    const start = new Date(startDate);
    const end = isCurrentJob ? new Date() : new Date(endDate);
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'}`;
    }
    
    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'ano' : 'anos'}`;
    }
    
    return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
  } catch {
    return '';
  }
};

/**
 * Formata o resumo profissional quebrando em parágrafos
 */
export const formatSummary = (summary: string): string[] => {
  return summary
    .split('\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0);
};

/**
 * Formata descrição de experiência quebrando em parágrafos
 */
export const formatDescription = (description: string): string[] => {
  return description
    .split('\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0);
};

/**
 * Trunca texto para exibição com ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Converte nível de habilidade para display
 */
export const formatSkillLevel = (level: string): string => {
  const levels = {
    'Básico': 'Básico',
    'Intermediário': 'Intermediário',
    'Avançado': 'Avançado'
  };
  
  return levels[level as keyof typeof levels] || level;
};

/**
 * Gera placeholder text para campos vazios
 */
export const getPlaceholderText = (field: string): string => {
  const placeholders = {
    name: 'Seu Nome Completo',
    email: 'seu.email@exemplo.com',
    phone: '(11) 99999-9999',
    linkedin: 'seu-linkedin',
    summary: 'Escreva um resumo profissional que destaque suas principais qualificações e objetivos de carreira...',
    company: 'Nome da Empresa',
    position: 'Cargo Ocupado',
    description: 'Descreva suas principais responsabilidades e conquistas nesta posição...',
    skillName: 'Nome da Habilidade'
  };
  
  return placeholders[field as keyof typeof placeholders] || 'Preencha este campo';
};