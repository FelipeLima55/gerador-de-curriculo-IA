# CV Builder AI 🚀

> Gerador de Currículo Inteligente com Preview em Tempo Real

Uma aplicação moderna e intuitiva para criar currículos profissionais com preview instantâneo e melhorias automáticas por inteligência artificial.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Funcionalidades

### ✨ **Interface Split-Screen**
- Layout dividido em duas colunas (50%/50%)
- Formulário de entrada à esquerda
- Preview instantâneo à direita
- Scroll independente em cada seção

### 📝 **Formulário Completo**
- **Dados Pessoais**: Nome, email, telefone, LinkedIn, resumo profissional
- **Habilidades**: Lista dinâmica com níveis de proficiência
- **Experiências**: Histórico profissional completo com validação de datas
- **Validação em tempo real** de todos os campos

### 🤖 **Inteligência Artificial (em breve)**
- Botões "Melhorar" para otimizar textos automaticamente
- Aprimoramento de resumo profissional
- Otimização de descrições de experiências
- Correções gramaticais e de fluência

### ⚡ **Preview em Tempo Real**
- Atualização instantânea ao digitar
- Layout profissional e clean
- Indicação visual para campos vazios
- Design otimizado para impressão

## 🎯 **Rodar o projeto**

```bash
# Clone o repositório
git clone https://github.com/FelipeLima55/gerador-de-curriculo-IA

# Entre no diretório
cd gerador-de-curriculo-IA

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

Acesse `http://localhost:5173` para ver a aplicação em ação!

## 🛠️ **Tecnologias Utilizadas**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 19 | Biblioteca para interfaces de usuário |
| **TypeScript** | 5+ | Superset tipado do JavaScript |
| **Tailwind CSS** | v4 | Framework CSS utilitário |
| **Vite** | 5+ | Build tool e dev server |
| **OpenAI API** | Latest | Integração com inteligência artificial |

## 📁 **Estrutura do Projeto**

```
src/
├── App.tsx                    # Componente principal
├── components/
│   ├── Layout/               # Componentes de layout
│   │   ├── FormSection.tsx   # Seção do formulário
│   │   └── PreviewSection.tsx # Seção de preview
│   ├── Form/                 # Componentes do formulário
│   │   ├── PersonalInfo.tsx  # Dados pessoais
│   │   ├── Skills.tsx        # Habilidades
│   │   ├── Experience.tsx    # Experiências
│   │   └── AIEnhanceButton.tsx # Botão de IA
│   ├── Preview/              # Componentes de preview
│   │   ├── CVPreview.tsx     # Preview principal
│   │   ├── PersonalHeader.tsx # Cabeçalho pessoal
│   │   ├── SkillsSection.tsx # Seção de habilidades
│   │   └── ExperienceSection.tsx # Seção de experiências
│   └── UI/                   # Componentes de interface
│       ├── LoadingSpinner.tsx # Indicador de carregamento
│       ├── ErrorBoundary.tsx # Tratamento de erros
│       └── Toast.tsx         # Notificações
├── services/
│   └── aiService.ts          # Serviços de IA
├── hooks/
│   ├── useCVData.ts         # Hook de dados do CV
│   ├── useAIEnhancement.ts  # Hook de melhorias por IA
│   └── useToast.ts          # Hook de notificações
├── utils/
│   ├── validation.ts        # Validações
│   └── textProcessing.ts    # Processamento de texto
├── types/
│   ├── cv.types.ts         # Tipos do CV
│   └── api.types.ts        # Tipos da API
└── index.css               # Estilos globais
```



## 👥 **Equipe de Desenvolvimento**

| Desenvolvedor | Responsabilidade | Branch |
|---------------|------------------|--------|
| **Sabrina Bochenek** | Layout Split-Screen | `feature/layout-split-screen` |
| **Renata Santos** | Dados Pessoais | `feature/dados-pessoais` |
| **Beatriz Santos** | Gerenciamento de Habilidades | `feature/gerenciamento-habilidades` |
| **Tailane Santos** | Gerenciamento de Experiências | `feature/gerenciamento-experiencias` |
| **Felipe da Silva** | Preview em Tempo Real | `feature/preview-tempo-real` |

## 🤝 **Como Contribuir**

1. **Faça um fork do projeto**
2. **Crie sua branch de feature** (`git checkout -b feature/minha-feature`)
3. **Commit suas mudanças** (`git commit -m 'feat: adiciona nova feature'`)
4. **Push para a branch** (`git push origin feature/minha-feature`)
5. **Abra um Pull Request**

### **Padrão de Commits**
- `feat:` nova funcionalidade
- `fix:` correção de bug  
- `style:` mudanças de estilo
- `refactor:` refatoração de código
- `docs:` atualizações de documentação

## 📋 **Roadmap**

### **Fase 1: Core Features** ✅
- [x] Layout split-screen
- [x] Formulário de dados pessoais
- [x] Gerenciamento de habilidades
- [x] Gerenciamento de experiências
- [x] Preview em tempo real

### **Fase 2: IA Integration** 🚧
- [ ] Integração com OpenAI API
- [ ] Melhoramento de textos
- [ ] Sugestões inteligentes
- [ ] Templates automáticos

### **Fase 3: Advanced Features** 🔄
- [ ] Exportação para PDF
- [ ] Múltiplos templates
- [ ] Temas personalizáveis
- [ ] Salvamento local
- [ ] Histórico de versões

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


<div align="center">
  
**Feito com ❤️ pela equipe CV Builder AI**

[⬆ Voltar ao topo](#cv-builder-ai-)

</div>