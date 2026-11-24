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
    p2: "Atualmente sou Engenheiro Backend na Ucall, uma operação de contact-center com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia. Aí liderei o backend de uma equipa de 2 pessoas no desenvolvimento de uma plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat. Antes disso, fui co-fundador e CTO da Bytebooster, onde construímos a Kilunga, um produto agritech que despertou o interesse de empresas do setor agrícola em Angola e no estrangeiro.",
    p2_ucall_label: "Ucall",
    p3: "Estou habituado a trabalhar em equipas internacionais e distribuídas, colaborando estreitamente com DevOps e stakeholders de produto. Valorizo código limpo, arquitetura sólida e melhoria contínua, e procuro entregar soluções seguras e fiáveis que também gerem valor real para o negócio.",
    p4: "Fora do trabalho, encontro inspiração na ligação com a comunidade tech, na aprendizagem contínua e na exploração de novas tecnologias.",
  },

  // ---------- EXPERIENCE ----------
  experience: {
    heading: "Experiência",
    resumeBtn: "Ver currículo completo",
    resumeBtnAts: "Descarregar currículo compatível com ATS",
    generatingBtn: "A gerar PDF...",
    cvFocusLabel: "Foco do currículo",
    cvFocusDotnet: "C# / .NET",
    cvFocusNode: "Node.js / TypeScript",
    items: {
      spacium: {
        role: "Desenvolvedor Frontend → Líder de Equipa",
        seniority: "Equipa Fundadora",
        company: "SPACIUM",
        description:
          "Função não remunerada na segunda equipa fundadora da SPACIUM, um novo departamento de apoio a empreendedores e startups. Comecei no frontend e no design e mais tarde fui nomeado para liderar toda a equipa. Trabalhei na construção de aplicações web escaláveis e de alto desempenho. Projetei interfaces responsivas e intuitivas e colaborei estreitamente com as equipas de design e backend para manter a experiência do produto consistente do início ao fim. Com Next.js, TypeScript, Tailwind CSS e React, aumentei a pontuação de performance no Lighthouse de 54 para 98 e contribuí para uma arquitetura de componentes mais limpa e fácil de manter.",
      },
      risingsystems: {
        role: "Desenvolvedor de Software",
        seniority: "Freelance",
        company: "RisingSystems (parceria)",
        description:
          "Parceria freelance com outro desenvolvedor sob o nome de trabalho RisingSystems, assumindo projetos de clientes à medida que surgiam. O projeto entregue foi o site institucional da Somobes (Sociedade Moçambicana de Bens e Serviços), um grupo de logística moçambicano, com a apresentação da empresa e dos seus serviços. Construí o site a partir dos assets e requisitos fornecidos pela responsável do projeto do lado do cliente e entreguei-o no final de 2024, transferindo o projeto e a titularidade dos repositórios para o cliente.",
      },
      freelance: {
        role: "Desenvolvedor Full Stack",
        seniority: "Júnior",
        company: "Freelance",
        description:
          "Como Desenvolvedor Full Stack Freelancer, entreguei aplicações web de ponta a ponta para startups, combinando tecnologias de frontend e backend (React, Node.js, Express.js e PostgreSQL) para construir soluções ajustadas às necessidades de cada cliente. Projetei arquiteturas escaláveis, otimizei o desempenho dos sistemas e construí interfaces responsivas que reforçaram a presença digital dos clientes.",
      },
      ucall: {
        role: "Engenheiro Backend",
        seniority: "Pleno",
        company: "Ucall",
        description:
          "Engenheiro de backend em sistemas de comunicação e contact-center desenvolvidos em C# e .NET, num BPO com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia nas suas operações. Liderei o backend de uma equipa de 2 pessoas no desenvolvimento de uma plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat, com funcionalidades como troca automática de supervisores e assistentes de equipa integrada com um sistema de controlo de assiduidade. Também construí pipelines de média que importam áudios para um servidor SFTP local e enviam as gravações para armazenamento em cloud (Wasabi), além de soluções de IVR self-service. No dia a dia, uso RabbitMQ para fluxos baseados em mensagens, Redis para caminhos críticos de baixa latência e colaboro de perto com DevOps para manter os sistemas estáveis sob carga real.",
      },
      wahitech: {
        role: "Desenvolvedor Backend",
        seniority: "Freelance",
        company: "Wahitech",
        description:
          "Desenvolvedor backend numa equipa freelance de duas pessoas (backend + frontend em Vue.js) na construção de uma plataforma de dicionário financeiro por subscrição, onde empresas e particulares consultam termos e conteúdos financeiros. Construí a API em ASP.NET Core (.NET 8) com Clean Architecture, EF Core e SQL Server: Identity com tokens JWT de acesso e de refresh, planos de subscrição com quotas de pesquisa partilhadas entre subcontas, caching em memória com invalidação direcionada, pagamentos e cupões de desconto, tickets de suporte e um pequeno CMS para o site público. Desenvolvi também a integração de email (SMTP com MailKit, compatível com contas Outlook e Google) e as notificações por SMS, o armazenamento de ficheiros compatível com S3 e o deploy em Docker com GitHub Actions.",
      },
      bytebooster: {
        role: "Co-fundador e CTO",
        seniority: "Nível-C",
        company: "Bytebooster",
        description:
          "Co-fundador e CTO de uma startup em fase inicial, iniciada no final de 2022 e registada formalmente em 2023. Liderei a estratégia técnica e a arquitetura de software e construí a Kilunga, um produto agritech que despertou o interesse de empresas do setor agrícola em Angola e no estrangeiro. A empresa não chegou ao primeiro contrato remunerado e os fundadores separaram-se em 2026.",
      },
    },
    presentLabel: "Atual",
  },

  // ---------- PROJECTS ----------
  projects: {
    heading: "Projetos",
    viewArchive: "Ver todos os projetos arquivados",
    items: {
      orus: {
        title: "ORUS",
        description:
          "Produto que fundei e desenvolvo sozinho: uma plataforma self-hosted de fiabilidade de infraestrutura que transforma sinais de servidores e aplicações num único incidente com evidência, identifica a equipa responsável e alerta apenas essa equipa, acompanhando depois a confirmação, a escalada e a recuperação. Um agente em .NET 10 corre em servidores Linux e Windows (cerca de 58 MB de RAM e 1% de CPU), autentica-se com chaves ECDSA P-256 e certificate pinning, e guarda os dados num outbox SQLite limitado, para que uma falha do servidor seja reposta sem lacunas nem duplicados. O servidor ingere métricas em tabelas PostgreSQL particionadas por dia, prevê o esgotamento de disco e mantém um registo de auditoria só de escrita, com login protegido por TOTP obrigatório. Desenhado com 8 registos de decisões de arquitetura e um modelo de ameaças, com releases assinadas, testes de integração em PostgreSQL real e um site comercial bilingue. Em piloto em infraestrutura real.",
        liveMask: "Encaminhamento de Incidentes e Observabilidade",
      },
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
          "Aplicação de finanças pessoais full-stack construída como Progressive Web App (PWA). Apresenta uma arquitetura offline-first com sincronização de dados fiável, garantindo funcionamento completo mesmo sem ligação à internet.",
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
      "Engenheiro de Software Backend com mais de 4 anos de experiência na construção de sistemas backend escaláveis em C#/.NET e Node.js. Projeto e mantenho APIs de alto débito e serviços backend intensivos em dados numa operação de contact-center com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia, incluindo uma plataforma de controlo de qualidade de atendimento que liderei e que processa mais de 500 mil interações de áudio e chat, pipelines de média de SFTP para cloud, e IVRs self-service. Domínio de APIs REST e GraphQL, mensageria com RabbitMQ, cache com Redis, pipelines de SFTP e armazenamento em cloud, e microsserviços. Colaboro de perto com equipas de DevOps e produto para entregar funcionalidades fiáveis, seguras e tolerantes a falhas em produção.",
    interests:
      "Xadrez, Fotografia, Leitura, Tempo de qualidade com Família e Amigos, Mortal Kombat",

    // Node.js / TypeScript focus of the generated CV (same experience,
    // different emphasis). See src/data/cv-focus.ts.
    focus: {
      node: {
        role: "Engenheiro de Software Backend (Node.js / TypeScript)",
        summary:
          "Engenheiro de Software Backend com mais de 4 anos de experiência na construção de sistemas backend escaláveis em TypeScript/Node.js e C#/.NET. TypeScript é a linguagem com que trabalho há mais tempo e onde sou mais forte: desenho serviços novos de raiz e acompanho todo o ciclo de desenvolvimento. Construo e mantenho APIs de alto débito e serviços backend intensivos em dados numa operação de contact-center com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia, incluindo uma plataforma de controlo de qualidade de atendimento que liderei e que processa mais de 500 mil interações de áudio e chat, pipelines de média de SFTP para cloud, e IVRs self-service. Domínio de Node.js, NestJS, Express, Prisma, PostgreSQL, Redis, RabbitMQ, APIs REST e GraphQL, e microsserviços orientados a eventos.",
        experienceDescriptions: {
          ucall:
            "Engenheiro de backend num BPO com mais de 1.000 funcionários que atende mais de 1M de chamadas por dia. Liderei o backend de uma equipa de 2 pessoas numa plataforma de controlo de qualidade de atendimento que processa mais de 500 mil interações de áudio e chat, com troca automática de supervisores e assistentes de equipa integrada com um sistema de controlo de assiduidade. Construí pipelines de média que importam áudios para servidor SFTP local e enviam para cloud (Wasabi), além de soluções de IVR self-service. Desenho de raiz a arquitetura dos novos projetos e acompanho todo o seu ciclo de vida, escolhendo entre TypeScript/Node.js e C#/.NET conforme o projeto. Stack: TypeScript, Node.js, C#/.NET, RabbitMQ, Redis, APIs REST e GraphQL.",
          bytebooster:
            "Co-fundador e CTO de uma startup em fase inicial, iniciada no final de 2022 e registada formalmente em 2023. Liderei a estratégia técnica e a arquitetura e construí a Kilunga, um produto agritech em Node.js e TypeScript, que despertou interesse no setor agrícola em Angola e no estrangeiro. A empresa encerrou em 2026, antes do primeiro contrato remunerado.",
        },
      },
    },

    techCategories: {
      languages: "Linguagens de Programação",
      frameworks: "Frameworks e Bibliotecas",
      tools: "Ferramentas e Plataformas",
    },

    educations: [
      {
        institution: "ISPTEC",
        degree: "Engenharia Informática (em curso, 2021 – atual)",
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
      wahitech: {
        role: "Desenvolvedor Backend",
        seniority: "Freelance",
        company: "Wahitech",
        description:
          "Desenvolvedor backend (freelance, mar–set 2025) numa plataforma de dicionário financeiro por subscrição para empresas e particulares. Construí a API em .NET 8 (Clean Architecture, EF Core, SQL Server): autenticação JWT com refresh tokens, planos com quotas partilhadas entre subcontas, caching em memória com invalidação direcionada, pagamentos, integração de email SMTP (Outlook/Google) e SMS, armazenamento compatível com S3, deploy em Docker com GitHub Actions.",
      },
      bytebooster: {
        role: "Co-fundador e CTO",
        seniority: "Nível-C",
        company: "Bytebooster",
        description:
          "Co-fundador e CTO de uma startup em fase inicial, iniciada no final de 2022 e registada formalmente em 2023. Liderei a estratégia técnica e a arquitetura e construí a Kilunga, um produto agritech que despertou interesse no setor agrícola em Angola e no estrangeiro. A empresa encerrou em 2026, antes do primeiro contrato remunerado.",
      },
      risingsystems: {
        role: "Desenvolvedor de Software",
        seniority: "Freelance",
        company: "RisingSystems (parceria)",
        description:
          "Parceria freelance com outro desenvolvedor. Construí e entreguei o site institucional da Somobes (Sociedade Moçambicana de Bens e Serviços), um grupo de logística moçambicano, a partir dos assets e requisitos do cliente, com transferência do projeto e da titularidade dos repositórios (2024).",
      },
      spacium: {
        role: "Desenvolvedor Frontend → Líder de Equipa",
        seniority: "Equipa Fundadora",
        company: "SPACIUM",
        description:
          "Função não remunerada na segunda equipa fundadora do departamento de apoio a startups da SPACIUM; mais tarde liderei toda a equipa. Construí aplicações frontend responsivas com Next.js, TypeScript, Tailwind CSS e React. Aumentei a pontuação de performance no Lighthouse de 54 para 98 e integrei APIs de backend em estreita colaboração com as equipas de backend e design, contribuindo para uma arquitetura de componentes mais limpa e fácil de manter.",
      },
      freelance: {
        role: "Desenvolvedor Full Stack",
        seniority: "Júnior",
        company: "Freelance",
        description:
          "Entreguei aplicações web de ponta a ponta para startups com React, Node.js, Express.js e PostgreSQL. Projetei e implementei arquiteturas escaláveis que suportaram o crescimento do negócio e a eficiência operacional. Construí interfaces responsivas com atenção ao desempenho, entregando soluções personalizadas e fáceis de manter, alinhadas com as necessidades dos clientes.",
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
      timeTower: "Jogo de puzzle com placar online, desenvolvido em C# com o framework MonoGame (cliente do jogo, servidor do placar em TypeScript e página web) para a cadeira de Engenharia de Software.",
      xpto: "Modelação de um sistema de gestão de condomínios com foco em princípios de POO e persistência de dados.",
    },
  },

  // ---------- UI ----------
  ui: {
    langSwitcherLabel: "Idioma",
  },
};
