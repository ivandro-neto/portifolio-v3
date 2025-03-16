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
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        console.log(rect.top, rect.bottom);
        console.log("WINDOWS : " + window.innerHeight / 2);
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
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
              tel: "+244949359054",
              mail: "ivandro.neto@outlook.com",
              web: "ivandroneto.com",
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
      a.download = "IvandroNeto_Resume.pdf";
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
      const startYear = parseInt(startStr);
      const endYear = parseInt(endStr);
      return { start: startYear, end: endYear };
    }
    // Se for apenas um ano, usa o mesmo valor para início e fim
    const year = parseInt(period);
    return { start: year, end: year };
  };
  return (
    <main className="flex flex-col lg:flex-row w-screen lg:p-8 p-4 xl:px-24 xl:justify-center">
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
              <h2 className="text-lg lg:text-xl font-semibold capitalize">
                Software Engineer
              </h2>
              <p className="text-sm lg:text-base">
                Experienced software engineer dedicated to crafting engaging
                digital experiences that drive impact and elevate user
                satisfaction.
              </p>
            </div>
            {/* Nav */}
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {["about", "experience", "projects"].map((section) => (
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
            <div className="flex w-full p-4"></div>
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
              I’m Ivandro Neto, a dedicated software engineer committed to
              building scalable, high-performance solutions that drive
              innovation in every project I undertake. Currently, I serve as a
              Senior Backend Engineer at{" "}
              <a
                className="text-zinc-200"
                href="https://www.ucall.co.ao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ucall
              </a>
              , where I focus on enhancing system performance and implementing
              cutting-edge features.
            </p>

            <p className="text-sm lg:text-base">
              With a solid foundation in both front-end and back-end
              development, I thrive on transforming complex challenges into
              elegant digital products. My technical expertise spans modern
              technologies and methodologies that empower businesses to achieve
              sustainable growth.
            </p>

            <p className="text-sm lg:text-base">
              At Ucall, my role involves architecting resilient APIs, resolving
              critical performance bottlenecks, and collaborating closely with
              cross-functional teams to align technical strategies with business
              objectives. I take pride in delivering solutions that are robust,
              scalable, and secure.
            </p>

            <p className="text-sm lg:text-base">
              In addition to my responsibilities at Ucall, I work as a freelance
              developer for{" "}
              <a
                className="text-zinc-200"
                href="https://www.risingsystems.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RisingSystems
              </a>
              . This opportunity allows me to engage with a diverse array of
              projects, delivering tailored software solutions that meet each
              client’s unique needs.
            </p>

            <p className="text-sm lg:text-base">
              I am passionate about continuous learning and always stay
              up-to-date with emerging technologies. This commitment to
              innovation ensures that my solutions remain future-proof and in
              line with industry best practices.
            </p>

            <p className="text-sm lg:text-base">
              Collaboration is at the heart of my work ethos. I believe that
              effective communication and teamwork are essential for overcoming
              challenges and delivering projects that exceed expectations.
            </p>

            <p className="text-sm lg:text-base">
              Outside of work, I find inspiration in activities such as chess,
              photography, and reading, and I cherish quality time with family
              and friends. These passions fuel my creativity and help me
              approach every challenge with fresh perspectives and enthusiasm.
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
            .map((exp, index) => (
              <ExperienceCard
                key={index}
                period={exp.period}
                role={exp.role}
                seniority={exp.seniority}
                company={exp.company}
                description={exp.description}
              >
                <div className="flex gap-2 flex-wrap">
                  {exp.skills.map((skill, idx) => (
                    <Box key={idx} content={skill} />
                  ))}
                </div>
              </ExperienceCard>
            ))}
          {/* 
          <a
            href="/api/download-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            View full résumé
          </a> */}
          <a onClick={handleDownloadPDF}>View full résumé</a>
        </section>

        {/* Projetos */}
        <section
          id="projects"
          className="text-offtext grid grid-cols-1 gap-4 w-full"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Projects
          </h2>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              link={project.liveLink}
              image={project.imgURL}
              title={project.title}
              description={project.description}
            >
              <div className="flex gap-2 flex-wrap">
                {project.techs.map((tech, idx) => (
                  <Box key={idx} content={tech} />
                ))}
              </div>
            </ProjectCard>
          ))}

          <a href="archived-projects" className=" hover:underline">
            View full archive projects
          </a>
        </section>
        <div className="footer text-xs text-offtext opacity-40 text-center mt-0">
          <p>© 2025 Ivandro Neto. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
};

export default memo(Page);
