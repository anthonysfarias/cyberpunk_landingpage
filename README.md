# 🚀 Cyberpunk Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![SOLID Principles](https://img.shields.io/badge/Architecture-SOLID-gold?style=for-the-badge&logo=typescript)](https://en.wikipedia.org/wiki/SOLID)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> Uma landing page moderna e interativa com tema cyberpunk, desenvolvida seguindo os **princípios SOLID** para apresentar portfólio profissional com animações avançadas, arquitetura limpa e design futurista.

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [🚀 Instalação](#-instalação)
- [💻 Uso](#-uso)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎨 Componentes](#-componentes)
- [🏗️ Arquitetura SOLID](#️-arquitetura-solid)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

## 🎯 Sobre o Projeto

Este projeto é uma landing page pessoal com tema cyberpunk, desenvolvida para showcasing de habilidades técnicas e projetos. A aplicação combina design moderno, animações fluidas e uma experiência de usuário imersiva, inspirada na estética cyberpunk.

### 🎮 Características Principais

- **Design Cyberpunk**: Interface futurista com neon, gradientes e efeitos visuais
- **Arquitetura SOLID**: Código limpo seguindo princípios de design profissional
- **Animações Avançadas**: Transições suaves, efeitos de glitch e animações coordenadas
- **Responsivo**: Adaptável a todos os dispositivos e tamanhos de tela
- **Performance**: Otimizado com Next.js 15 e Turbopack
- **Acessibilidade**: Seguindo boas práticas de UX/UI

## ✨ Funcionalidades

### 🎪 Seções Interativas

- **🏠 Hero**: Apresentação principal com animações de digitação
- **👨‍💻 About**: Seção sobre com código animado e intersection observer
- **⚡ Stack**: Showcase de tecnologias com tabs interativas
- **📅 Timeline**: Linha do tempo profissional com animações escalonadas
- **💼 Portfolio**: Galeria de projetos com paginação e filtros
- **📞 Contact**: Formulário funcional com links sociais

### 🎨 Efeitos Visuais

- **Animações Cyberpunk**: Glitch, typewriter, flicker effects
- **Navbar Interativo**: Hover effects e animações de entrada
- **Scroll Suave**: Navegação automática entre seções
- **Loading States**: Feedback visual durante transições
- **Responsive Design**: Layout adaptativo para mobile/desktop

### 🔧 Funcionalidades Técnicas

- **TypeScript**: Tipagem estática para maior confiabilidade
- **Component Architecture**: Componentes reutilizáveis e modulares
- **Custom Hooks**: Lógica compartilhada (pagination, intersection observer)
- **Data Abstraction**: Separação entre dados e apresentação
- **Performance Optimization**: Lazy loading e otimizações de bundle

## 🛠️ Tecnologias

### Frontend Core
- **[Next.js 15.5.5](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Superset tipado do JavaScript

### Styling & UI
- **[Tailwind CSS 4.1.14](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **CSS Animations** - Animações customizadas com keyframes

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Linter para qualidade de código
- **[PostCSS 8.5.6](https://postcss.org/)** - Processador CSS
- **[Turbopack](https://turbo.build/pack)** - Bundler de alta performance

## 🚀 Instalação

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm**, **yarn**, **pnpm** ou **bun**

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/anthonysfarias/cyberpunk_landingpage.git
cd cyberpunk_landingpage
```

2. **Instale as dependências**
```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

3. **Execute o servidor de desenvolvimento**
```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev

# bun
bun dev
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 💻 Uso

### Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

### Personalização

#### 🎨 Cores e Tema
```css
/* src/app/globals.css */
:root {
  --primary-purple: #8b5cf6;
  --primary-pink: #ec4899;
  --primary-cyan: #06b6d4;
}
```

#### 📊 Dados do Portfolio
```typescript
// src/data/projects.ts
export const projects: IProject[] = [
  {
    id: 1,
    title: "Seu Projeto",
    description: "Descrição do projeto",
    technologies: ["React", "TypeScript"],
    // ...
  }
];
```

#### 📅 Timeline Profissional
```typescript
// src/data/timeline.ts
export const timelineItems: ITimelineItem[] = [
  {
    id: 1,
    year: "2024",
    title: "Sua Experiência",
    company: "Sua Empresa",
    // ...
  }
];
```

## 📁 Estrutura do Projeto

```
cyberpunk_landingpage/
├── 📁 public/                 # Arquivos estáticos
├── 📁 src/
│   ├── 📁 app/               # App Router (Next.js 13+)
│   │   ├── 📁 components/    # Componentes de página
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Stack.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Contact.tsx
│   │   ├── globals.css       # Estilos globais e animações
│   │   ├── layout.tsx        # Layout raiz
│   │   └── page.tsx          # Página principal
│   ├── 📁 components/        # Componentes reutilizáveis
│   │   └── 📁 ui/           # Componentes de UI
│   │       ├── Button.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── TimelineItem.tsx
│   │       ├── TechTabs.tsx
│   │       ├── Pagination.tsx
│   │       └── SocialLinks.tsx
│   ├── 📁 data/             # Dados estáticos
│   │   ├── projects.ts
│   │   ├── timeline.ts
│   │   ├── technologies.ts
│   │   └── socialMedia.ts
│   ├── 📁 hooks/            # Custom Hooks
│   │   ├── useIntersectionObserver.ts
│   │   ├── usePagination.ts
│   │   └── useTypingAnimation.ts
│   └── 📁 types/            # Definições TypeScript
│       └── index.ts
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.ts
└── 📄 README.md
```

## 🎨 Componentes

### 🧩 Componentes Principais

| Componente | Descrição | Funcionalidades |
|------------|-----------|-----------------|
| `Hero` | Seção principal | Animação de digitação, gradientes |
| `About` | Sobre profissional | Intersection observer, código animado |
| `Stack` | Tecnologias | Tabs interativas, ícones dinâmicos |
| `Timeline` | Experiência | Animações escalonadas, efeitos cyberpunk |
| `Portfolio` | Projetos | Paginação, filtros, scroll automático |
| `Contact` | Contato | Formulário, links sociais |

### 🔧 Componentes UI

- **Button**: Botão reutilizável com variantes
- **ProjectCard**: Card de projeto com hover effects
- **TimelineItem**: Item da timeline com animações
- **TechTabs**: Navegação por abas de tecnologias
- **Pagination**: Paginação com scroll automático
- **SocialLinks**: Links para redes sociais

### 🎪 Custom Hooks

- **useIntersectionObserver**: Detecta elementos na viewport
- **usePagination**: Lógica de paginação reutilizável
- **useTypingAnimation**: Efeito de digitação animada
- **useAnimationController**: Controle avançado de animações

## 🏗️ Arquitetura SOLID

Este projeto foi desenvolvido seguindo **rigorosamente os princípios SOLID**, garantindo código limpo, manutenível e extensível:

### 🔹 **SRP (Single Responsibility Principle)**
Cada classe e componente possui uma única responsabilidade bem definida:

- **`ScrollService`**: Gerencia exclusivamente operações de scroll
- **`ValidationService`**: Responsável apenas por validação de formulários  
- **`ProjectService`**: Gerencia dados e operações relacionadas a projetos
- **`StatusService`**: Configura e gerencia status de projetos
- **Componentes UI**: Cada um com responsabilidade específica de renderização

### 🔹 **OCP (Open/Closed Principle)**
Sistema aberto para extensão, fechado para modificação:

```typescript
// Extensível para novos tipos de status sem modificar código existente
export class LiveStatusFactory extends StatusFactory {
  createStatusConfig(): IStatusConfig { /* ... */ }
}

// Novas regras de validação podem ser adicionadas facilmente
export class CustomValidationRule implements IValidationRule<string> {
  validate(value: string): boolean { /* ... */ }
}
```

### 🔹 **LSP (Liskov Substitution Principle)**
Implementações são completamente substituíveis:

- Qualquer `IProjectService` pode substituir `ProjectService`
- Factories seguem contratos abstratos
- Componentes respeitam interfaces definidas

### 🔹 **ISP (Interface Segregation Principle)**
Interfaces específicas e focadas:

```typescript
// Interfaces segregadas por responsabilidade
interface IButtonBaseProps { /* propriedades básicas */ }
interface IButtonInteractionProps { /* lógica de interação */ }  
interface IButtonStyleProps { /* configurações visuais */ }

// Interface completa composta pelas específicas
interface IButtonProps extends IButtonBaseProps, IButtonInteractionProps, IButtonStyleProps {}
```

### 🔹 **DIP (Dependency Inversion Principle)**
Dependência de abstrações, não de implementações:

```typescript
// Portfolio depende da abstração, não da implementação
const projectService: IProjectService = ProjectServiceFactory.getInstance();

// ScrollService fornece interface abstrata
const scrollService: IScrollService = ScrollService;
```

### 🎯 **Benefícios da Arquitetura SOLID**

- **🧪 Testabilidade**: Componentes isolados e facilmente testáveis
- **🔧 Manutenibilidade**: Mudanças localizadas sem efeitos colaterais
- **📈 Escalabilidade**: Fácil adição de novas funcionalidades
- **🔄 Reutilização**: Código modular e reutilizável
- **🐛 Debugging**: Problemas isolados e fáceis de identificar

### 📁 **Estrutura SOLID**

```
src/
├── services/           # Serviços de negócio (SRP)
│   ├── projectService.ts
│   ├── scrollService.ts
│   └── validationService.ts
├── factories/          # Factory patterns (OCP)
│   └── statusFactory.ts
├── hooks/             # Custom hooks (SRP)
│   └── useAnimationController.ts
└── types/             # Interfaces segregadas (ISP)
    └── index.ts
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abra um Pull Request**

### 📋 Guidelines

- Use **TypeScript** para tipagem
- Siga os padrões do **ESLint**
- Mantenha **componentes pequenos** e reutilizáveis
- Adicione **animações suaves** quando apropriado
- Teste em **diferentes dispositivos**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Anthony Farias**
- 🌐 Website: [anthonysfarias.dev](https://anthonysfarias.dev)
- 💼 LinkedIn: [@anthonysfarias](https://linkedin.com/in/anthonysfarias)
- 📧 Email: akileslive.farias10@gmail.com
- 🐱 GitHub: [@anthonysfarias](https://github.com/anthonysfarias)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Feito com 💜 e muito ☕ por [Anthony Farias](https://github.com/anthonysfarias)

</div>
