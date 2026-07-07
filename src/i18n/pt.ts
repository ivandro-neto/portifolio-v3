import type { Translations } from "./en";

export const pt: Translations = {
  // ---------- NAV ----------
  nav: {
    about: "Sobre",
    experience: "Experiência",
    languages: "Línguas",
    projects: "Projetos",
    writing: "Escrita",
  },

  // ---------- HERO ----------
  hero: {
    role: "Engenheiro de Software Backend",
    tagline:
      "Engenheiro de Software Backend especializado em C# (.NET) e sistemas backend escaláveis. Projeto e construo APIs de alto desempenho e plataformas intensivas em dados que funcionam de forma fiável em escala.",
  },

  // ---------- ABOUT ----------
  about: {
    heading: "Sobre",
    p1: "Engenheiro de Software Backend especializado em C# (.NET) e sistemas backend escaláveis. Projeto e construo APIs de alto desempenho e plataformas intensivas em dados com forte foco em escalabilidade, baixa latência, segurança e tolerância a falhas. Tenho experiência prática com APIs REST e GraphQL, Redis, RabbitMQ, fluxos baseados em mensagens, pipelines de SFTP e armazenamento em cloud, e CI/CD.",
    p2: "Atualmente sou Engenheiro Backend na Ucall — uma operação de contact-center com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia. Aí liderei o backend de uma equipa de 2 pessoas no desenvolvimento de uma plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat. Sou também Co-fundador e Tech Lead da Bytebooster, onde ajudo a projetar e entregar soluções de software escaláveis alinhadas com necessidades reais de negócio.",
    p2_ucall_label: "Ucall",
    p3: "Estou habituado a trabalhar em equipas internacionais e distribuídas, colaborando estreitamente com DevOps e stakeholders de produto. Valorizo código limpo, arquitetura sólida e melhoria contínua. O meu objetivo é entregar soluções que sejam robustas e seguras, mas que também gerem valor tangível para o negócio.",
    p4: "Fora do trabalho, encontro inspiração na ligação com a comunidade tech, na aprendizagem contínua e na exploração de novas tecnologias.",
  },

  // ---------- EXPERIENCE ----------
  experience: {
    heading: "Experiência",
    resumeBtn: "Ver currículo completo",
    resumeBtnAts: "Descarregar currículo compatível com ATS",
    generatingBtn: "A gerar PDF...",
    items: {
      spacium: {
        role: "Desenvolvedor Frontend",
        seniority: "Pleno",
        company: "SPACIUM",
        description:
          "Na SPACIUM, trabalhei como Desenvolvedor Frontend a construir aplicações web escaláveis e de alto desempenho. Projetei interfaces responsivas e intuitivas e colaborei estreitamente com as equipas de design e backend para entregar experiências digitais fluídas. Com Next.js, TypeScript, Tailwind CSS e React, melhorei o desempenho do frontend e contribuí para uma arquitetura de componentes mais limpa e fácil de manter.",
      },
      risingsystems: {
        role: "Desenvolvedor de Software",
        seniority: "Pleno",
        company: "RisingSystems",
        description:
          "Na RisingSystems, construí e mantive soluções de software personalizadas para diversos clientes, com foco no desempenho e fiabilidade das aplicações. Com C#, .NET Core, SQL Server e MongoDB, entreguei funcionalidades robustas, otimizei queries de base de dados e refatorei código legado para reduzir a dívida técnica. Colaborei com equipas multidisciplinares para alinhar a arquitetura do software com objetivos estratégicos de negócio e padrões de alta disponibilidade.",
      },
      freelance: {
        role: "Desenvolvedor Full Stack",
        seniority: "Júnior",
        company: "Freelance",
        description:
          "Como Desenvolvedor Full Stack Freelancer, entreguei aplicações web de ponta a ponta para startups, combinando tecnologias de frontend e backend — React, Node.js, Express.js e PostgreSQL — para entregar soluções à medida. Projetei arquiteturas escaláveis, otimizei o desempenho dos sistemas e construí interfaces responsivas que aumentaram o engajamento dos utilizadores e reforçaram a presença digital dos clientes.",
      },
      ucall: {
        role: "Engenheiro Backend",
        seniority: "Pleno",
        company: "Ucall",
        description:
          "Engenheiro de backend em sistemas de comunicação e contact-center desenvolvidos em C# e .NET. A empresa é um BPO com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia nas suas operações — essa é a escala e o contexto em que trabalho, não o débito de um serviço que construí. Liderei o backend de uma equipa de 2 pessoas no desenvolvimento de uma plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat, com funcionalidades como troca automática de supervisores e assistentes de equipa integrada com um sistema de controlo de assiduidade. Também construí pipelines de média que importam áudios para um servidor SFTP local e enviam as gravações para armazenamento em cloud (Wasabi), além de soluções de IVR self-service. No dia a dia, uso RabbitMQ para fluxos baseados em mensagens, Redis para caminhos críticos de baixa latência e colaboro de perto com DevOps para manter os sistemas estáveis sob carga real.",
      },
      bytebooster: {
        role: "Co-fundador e Tech Lead",
        seniority: "Nível-C",
        company: "Bytebooster",
        description:
          "Co-fundador e Tech Lead a conduzir a estratégia técnica e a arquitetura de software. Projeto e entrego soluções de software escaláveis alinhadas com necessidades reais de negócio, supervisiono o desenvolvimento de produtos personalizados e oriento as decisões de engenharia desde a arquitetura até à entrega.",
      },
    },
    presentLabel: "Atual",
  },

  // ---------- PROJECTS ----------
  projects: {
    heading: "Projetos",
    viewArchive: "Ver todos os projetos arquivados",
    items: {
      entitle: {
        title: "Entitle.",
        description:
          "Um motor de controlo de acesso em tempo real para produtos SaaS. Construído para centralizar a lógica de subscrições, gestão de funcionalidades, regras de rollout e decisões de acesso através de uma arquitetura escalável orientada a eventos. Inclui gestão determinística de estado de subscrições, feature flags, logs de auditoria e uma API de controlo de acesso pensada para programadores.",
        liveMask: "Motor de Controlo de Acesso",
      },
      ulock: {
        title: "Ulock Proxy Service",
        description:
          "Serviço de proxy de alto desempenho desenvolvido em C# para garantir o encaminhamento de pedidos de forma segura e fiável. Focado em comunicação de baixa latência e resiliência em ambientes distribuídos.",
        liveMask: "Serviço de Proxy em C#",
      },
      imoni: {
        title: "Imoni",
        description:
          "Aplicação completa de finanças pessoais construída como Progressive Web App (PWA). Apresenta uma arquitetura offline-first com sincronização de dados robusta, garantindo 100% de funcionalidade sem ligação à internet.",
        liveMask: "PWA de Finanças Offline-first",
      },
    },
  },

  // ---------- WRITING ----------
  writing: {
    heading: "Escrita & Redes",
  },

  // ---------- FOOTER ----------
  footer: {
    copy: "© 2026 Ivandro Neto. Todos os direitos reservados.",
  },

  // ---------- CV DATA ----------
  cv: {
    role: "Engenheiro de Software Backend",
    summary:
      "Engenheiro de Software Backend com mais de 4 anos de experiência na construção de sistemas backend escaláveis em C#/.NET e Node.js. Projeto e mantenho APIs de alto débito e serviços backend intensivos em dados — incluindo uma plataforma de controlo de qualidade de atendimento que liderei e que processa mais de 500 mil interações de áudio e chat, pipelines de média de SFTP para cloud, e IVRs self-service — numa operação de contact-center com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia. Domínio de APIs REST e GraphQL, mensageria com RabbitMQ, cache com Redis, pipelines de SFTP e armazenamento em cloud, e microsserviços. Colaboro de perto com equipas de DevOps e produto para entregar funcionalidades fiáveis, seguras e tolerantes a falhas em produção.",
    interests:
      "Xadrez, Fotografia, Leitura, Tempo de qualidade com Família e Amigos, Mortal Kombat",

    techCategories: {
      languages: "Linguagens de Programação",
      frameworks: "Frameworks e Bibliotecas",
      tools: "Ferramentas e Plataformas",
    },

    educations: [
      {
        institution: "ISPTEC",
        degree: "Engenharia Informática",
      },
    ],

    certifications: [
      {
        institution: "Grupo Nuveto",
        degree: "Administrador Five9 e Sigma",
      },
      {
        institution: "Rocketseat",
        degree: "Fundamentos de .NET",
      },
      {
        institution: "Udemy",
        degree: "Curso Completo de Engenharia de Software",
      },
    ],

    experienceResumed: {
      ucall: {
        role: "Engenheiro Backend",
        seniority: "Pleno",
        company: "Ucall",
        description:
          "Engenheiro de backend num BPO com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia. Liderei o backend de uma equipa de 2 pessoas numa plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat, com troca automática de supervisores e assistentes de equipa integrada com um sistema de controlo de assiduidade. Construí pipelines de média que importam áudios para servidor SFTP local e enviam para cloud (Wasabi), além de soluções de IVR self-service. Stack: C#/.NET, RabbitMQ, Redis, APIs REST e GraphQL.",
      },
      bytebooster: {
        role: "Co-fundador e Tech Lead",
        seniority: "Nível-C",
        company: "Bytebooster",
        description:
          "Co-fundador e Tech Lead a conduzir a estratégia técnica e a arquitetura de software. Projeto e entrego soluções escaláveis e orientadas a valor, alinhadas com necessidades reais de negócio, orientando as decisões de engenharia desde a arquitetura até à entrega.",
      },
      risingsystems: {
        role: "Desenvolvedor de Software",
        seniority: "Pleno",
        company: "RisingSystems",
        description:
          "Construí e mantive soluções de software robustas, otimizando o desempenho das aplicações com C#, .NET Core, SQL Server e MongoDB. Desenvolvi backends escaláveis para sistemas de alto tráfego, melhorando a eficiência da base de dados e o desempenho de queries. Colaborei de forma multidisciplinar para alinhar a arquitetura com os objetivos do negócio, garantindo alta disponibilidade e segurança. Refatorei código legado, reduzindo a dívida técnica e melhorando a manutenibilidade.",
      },
      spacium: {
        role: "Desenvolvedor Frontend",
        seniority: "Pleno",
        company: "SPACIUM",
        description:
          "Construí aplicações frontend responsivas com Next.js, TypeScript, Tailwind CSS e React. Melhorei o desempenho do frontend e integrei APIs de backend em estreita colaboração com as equipas de backend e design, contribuindo para uma arquitetura de componentes mais limpa e fácil de manter.",
      },
      freelance: {
        role: "Desenvolvedor Full Stack",
        seniority: "Júnior",
        company: "Freelance",
        description:
          "Entreguei aplicações web de ponta a ponta para startups com React, Node.js, Express.js e PostgreSQL. Projetei e implementei arquiteturas escaláveis que suportaram o crescimento do negócio e a eficiência operacional. Aumentei o engajamento dos utilizadores através de melhorias de UI/UX responsivas e otimizações de desempenho, entregando soluções à medida e fáceis de manter, alinhadas com as necessidades dos clientes.",
      },
    },

    languages: [
      {
        language: "Português",
        level: "Fluente",
      },
      {
        language: "Inglês",
        level: "C1",
      },
      {
        language: "Alemão",
        level: "Aprendendo",
      },
    ],

    // sidebar labels
    labels: {
      contact: "Contacto",
      email: "Email",
      phone: "Telefone",
      linkedin: "LinkedIn",
      github: "Github",
      blog: "Blog",
      web: "Web",
      summary: "Resumo Profissional",
      education: "Formação",
      certifications: "Certificações",
      skills: "Competências",
      languages: "Línguas",
      interests: "Interesses",
      experience: "Experiência",
      selectedProjects: "Projetos em Destaque",
      tech: "Tecnologias",
    },
  },

  // ---------- ARCHIVE ----------
  archive: {
    heading: "Todos os Projetos",
    backLabel: "Ivandro Neto",
    columns: {
      year: "Ano",
      project: "Projeto",
      madeAt: "Feito em",
      builtWith: "Construído com",
      link: "Link",
    },
    madeAt: {
      personalProject: "Projeto Pessoal",
      personalStudy: "Estudo Pessoal",
      universityProject: "Projeto Universitário",
    },
    descriptions: {
      orderManagement:
        "API Web construída em C# e .NET Core para gerir encomendas e produtos.",
      templify:
        "Plataforma de templates full-stack. A versão web está funcional (modo demo), backend em TypeScript/Node.js.",
      designPatterns:
        "Implementação de vários padrões de design de software demonstrando boas práticas arquiteturais.",
      timeTower:
        "Jogo de puzzle match-3 desenvolvido com a framework MonoGame.",
      xpto: "Modelação de um sistema de gestão de condomínios com foco em princípios de POO e persistência de dados.",
    },
  },

  // ---------- UI ----------
  ui: {
    langSwitcherLabel: "Idioma",
  },
};
