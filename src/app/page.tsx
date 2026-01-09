"use client";

import ProjectCard from "@/components/project-card";
import { Box } from "@/components/TechSkillBox";
import ExperienceCard from "@/components/xp-cards";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import {
  experiences,
  experiencesResumed,
  techCategories,
} from "@/data/experience";
import Loading from "@/components/loading-screen";
import { projects } from "@/data/projects";
import { contentItems } from "@/data/content";
import ContentCard from "@/components/content-card";
import Script from "next/script";

const Page = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de delay para o carregamento (2 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 0);

      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially to set correct state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleDownloadPDF = async () => {
    // Converte o objeto techCategories em um array com string única para cada categoria
    const techCategoriesArray = Object.entries(techCategories).map(
      ([category, technologies]) => ({
        category,
        technologies: technologies.join(", "),
      }),
    );

    try {
      // Requisição para gerar o PDF no backend
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Ivandro Neto",
          links: [
            {
              tel: "+244923474934",
              mail: "ivandro.neto@outlook.com",
              web: "ivandroneto.online",
              git: "github.com/ivandro-neto",
              lndk: "linkedin.com/in/ineto818",
            },
          ],
          summary:
            "Experienced software engineer dedicated to crafting engaging digital experiences that drive impact and elevate user satisfaction.",
          skills: techCategoriesArray,
          experience: experiencesResumed,
          educations: [
            {
              institution: "ISPTEC",
              degree: "Computer Engineering",
            },
            {
              institution: "Grupo Nuveto",
              degree: "Five9 Administrator and Sigma",
            },
            {
              institution: "Rocketseat",
              degree: "Fundamentos do .NET",
            },
            {
              institution: "Udemy",
              degree: "Complete Software Engineering Course",
            },
          ],
          projects: projects,
          interests:
            "Chess, Photography, Reading, Quality Time with Family & Friends, Mortal Kombat",
        }),
      });

      if (!response.ok) throw new Error("Erro ao gerar o PDF");

      // Converte a resposta para Blob (arquivo binário)
      const blob = await response.blob();

      // Cria um URL temporário para o Blob e inicia o download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      //a.download = "IvandroNeto_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Se o backend gera um arquivo temporário, deleta-o após 10 segundos
      /*    setTimeout(async () => {
        await fetch("/api/delete-temp", { method: "DELETE" });
      }, 10000); */
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  // Enquanto o carregamento estiver ativo, exibe o componente Loading
  if (isLoading) {
    return <Loading />;
  }

  const parsePeriod = (period: string) => {
    if (period.includes(" - ")) {
      const [startStr, endStr] = period.split(" - ");
      const startYear = Number.parseInt(startStr);
      const endYear = endStr.toLowerCase() === "present" ? new Date().getFullYear() : Number.parseInt(endStr);
      return { start: startYear, end: endYear };
    }
    // Se for apenas um ano, usa o mesmo valor para início e fim
    const year = Number.parseInt(period);
    return { start: year, end: year };
  };
  return (
    <main className="flex flex-col lg:flex-row min-h-screen lg:p-12 p-8 xl:px-48 xl:justify-center">
      {/* Sidebar / Introdução */}
      <section className="lg:w-[50%] w-full flex flex-col p-6 lg:p-12 justify-between lg:h-[80dvh] h-[40dvh] lg:sticky top-8">
        {/* Brief */}
        <div className="flex gap-4 lg:gap-4 items-start lg:items-start">
          <Image
            className="border-r-foreground border-r-2 p-2 lg:w-16"
            src={"/logo.png"}
            width={48}
            height={48}
            alt="Ivandro Neto logo"
          />
          <div className="flex flex-col gap-44 h-[90dvh]">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
                Ivandro Neto
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold capitalize mt-3">
                Backend Software Engineer
              </h2>
              <p className="text-sm lg:text-base mt-4 text-offtext max-w-lg">
                Backend Software Engineer specialized in C# (.NET) and scalable,
                distributed systems. I design and build high-performance APIs
                and backend platforms.
              </p>
            </div>
            {/* Nav */}
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {["about", "experience", "projects", "writing"].map((section) => (
                  <li
                    key={section}
                    className="uppercase cursor-pointer text-lg"
                  >
                    <a
                      href={`#${section}`}
                      className={`nav-link ${
                        activeSection === section ||
                        (isTop && section === "about")
                          ? "active"
                          : ""
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Links */}
            <div className="flex w-full gap-5 mt-8 items-center">
              <a
                href="https://github.com/ivandro-neto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <div
                  className="w-7 h-7 bg-current"
                  style={{
                    maskImage: "url('/github-brands-solid-full.svg')",
                    WebkitMaskImage: "url('/github-brands-solid-full.svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
              <a
                href="https://linkedin.com/in/ineto818"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <div
                  className="w-7 h-7 bg-current"
                  style={{
                    maskImage: "url('/linkedin-brands-solid-full.svg')",
                    WebkitMaskImage: "url('/linkedin-brands-solid-full.svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
              <a
                href="https://x.com/ivneto_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="X (Twitter)"
              >
                <div
                  className="w-7 h-7 bg-current"
                  style={{
                    maskImage: "url('/x-twitter-brands-solid-full.svg')",
                    WebkitMaskImage: "url('/x-twitter-brands-solid-full.svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
              <a
                href="https://www.threads.net/@incode_r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="Threads"
              >
                <div
                  className="w-7 h-7 bg-current"
                  style={{
                    maskImage: "url('/threads-brands-solid-full (1).svg')",
                    WebkitMaskImage: "url('/threads-brands-solid-full (1).svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
              <a
                href="https://hashnode.com/@ineto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="Hashnode"
              >
                <div
                  className="w-6 h-6 bg-current"
                  style={{
                    maskImage: "url('/hashnode.svg')",
                    WebkitMaskImage: "url('/hashnode.svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
              <a
                href="mailto:ivandro.neto@outlook.com"
                className="text-offtext hover:text-foreground transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="flex flex-col lg:w-[65%] h-auto w-full p-0 lg:p-8 gap-8 items-center overflow-y-auto scroll-smooth min-h-screen bg-background ">
        {/* Sobre Mim */}
        <section
          id="about"
          className="text-offtext lg:px-6 p-0 lg:h-fit flex flex-col gap-6 xl:py-4"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            About
          </h2>
          <section className="flex flex-col gap-6">
            <p className="text-sm lg:text-base">
              Backend Software Engineer specialized in C# (.NET) and scalable,
              distributed systems. I design and build high-performance APIs and
              backend platforms with a strong focus on scalability, low latency,
              security, and fault tolerance. I have hands-on experience with
              REST & GraphQL APIs, Redis, RabbitMQ, CI/CD pipelines, and
              cloud-ready architectures.
            </p>

            <p className="text-sm lg:text-base">
              Currently, I work as a Backend Engineer at{" "}
              <a
                className="text-zinc-200"
                href="https://www.ucall.co.ao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ucall
              </a>
              , where I lead backend initiatives focused on system performance
              and reliability. I’m also the Co-founder & CTO of Bytebooster,
              where I help design and deliver scalable software solutions
              aligned with real business needs.
            </p>

            <p className="text-sm lg:text-base">
              I’m comfortable working in international, distributed teams,
              collaborating closely with DevOps and product stakeholders. I
              value clean code, solid architecture, and continuous improvement.
              My goal is to deliver solutions that are not only robust and
              secure but also drive tangible business value.
            </p>

            <p className="text-sm lg:text-base">
              Outside of work, I find inspiration in connecting with the tech
              community, continuous learning, and exploring new technologies.
            </p>
          </section>
        </section>

        {/* Experiência */}
        <section
          id="experience"
          className="text-offtext flex flex-col gap-4 w-full h-auto"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Experience
          </h2>
          {experiences
            .sort((a, b) => {
              const { start: startA, end: endA } = parsePeriod(a.period);
              const { start: startB, end: endB } = parsePeriod(b.period);

              // Ordena pela data de término (decrescente)
              if (endB !== endA) {
                return endB - endA;
              }
              // Se os anos finais forem iguais, ordena pelo ano de início (decrescente)
              return startB - startA;
            })
            .map((exp) => (
              <ExperienceCard
                key={exp.company}
                period={exp.period}
                role={exp.role}
                seniority={exp.seniority}
                company={exp.company}
                description={exp.description}
              >
                <div className="flex gap-2 flex-wrap">
                  {exp.skills.map((skill) => (
                    <Box key={skill} content={skill} />
                  ))}
                </div>
              </ExperienceCard>
            ))}
          
          <button
            onClick={handleDownloadPDF}
            className="hover:underline cursor-pointer text-left"
            type="button"
          >
            View full résumé
          </button>
         {/*  <a
            href={`${window.location.origin}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
          >
            View full résumé
          </a> */}
        </section>

        {/* Projetos */}
        <section
          id="projects"
          className="text-offtext grid grid-cols-1 gap-4 w-full"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Projects
          </h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              link={project.liveLink}
              image={project.imgURL}
              title={project.title}
              description={project.description}
            >
              <div className="flex gap-2 flex-wrap">
                {project.techs.map((tech) => (
                  <Box key={tech} content={tech} />
                ))}
              </div>
            </ProjectCard>
          ))}

          <a
            href="archived-projects"
            className="cursor-pointer hover:underline"
          >
            View full archive projects
          </a>
        </section>

        {/* Social & Blog */}
        <section
          id="writing"
          className="text-offtext grid grid-cols-1 gap-4 w-full"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Writing & Social
          </h2>
          {contentItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </section>

        <div className="footer text-xs text-offtext opacity-40 text-center mt-12 mb-4">
          <p>© 2025 Ivandro Neto. All rights reserved.</p>
        </div>
      </section>
      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
    </main>
  );
};

export default memo(Page);
