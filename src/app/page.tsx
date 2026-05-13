"use client";

import ProjectCard from "@/components/project-card";
import { Box } from "@/components/TechSkillBox";
import ExperienceCard from "@/components/xp-cards";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import {
  techCategories,
} from "@/data/experience";
import Loading from "@/components/loading-screen";
import { contentItems } from "@/data/content";
import ContentCard from "@/components/content-card";
import Script from "next/script";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { LangSwitcher } from "@/components/ui/LangSwitcher";
import { useTranslatedData } from "@/hooks/useTranslatedData";

/* ─────────────────────────────────────────────
   Inner page — has access to LanguageContext
───────────────────────────────────────────── */
const PageInner = () => {
  const { locale, t } = useLanguage();
  const { experiences, experiencesResumed, projects } = useTranslatedData();

  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);

    const techCategoriesArray = Object.entries(techCategories).map(
      ([category, technologies]) => ({
        category,
        technologies: technologies.join(", "),
      }),
    );

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang: locale,
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
          summary: t.cv.summary,
          skills: techCategoriesArray,
          experience: experiencesResumed,
          educations: [
            {
              institution: locale === "pt" ? "ISPTEC" : "ISPTEC",
              degree: locale === "pt" ? t.cv.education.isptec.degree : t.cv.education.isptec.degree,
            },
          ],
          certifications: [
            {
              institution: locale === "pt" ? t.cv.certifications.grupoNuveto.institution : t.cv.certifications.grupoNuveto.institution,
              degree: locale === "pt" ? t.cv.certifications.grupoNuveto.degree : t.cv.certifications.grupoNuveto.degree,
            },
            {
              institution: locale === "pt" ? t.cv.certifications.rocketseat.institution : t.cv.certifications.rocketseat.institution,
              degree: locale === "pt" ? t.cv.certifications.rocketseat.degree : t.cv.certifications.rocketseat.degree,
            },
            {
              institution: locale === "pt" ? t.cv.certifications.udemy.institution : t.cv.certifications.udemy.institution,
              degree: locale === "pt" ? t.cv.certifications.udemy.degree : t.cv.certifications.udemy.degree,
            },
          ],
          projects: projects,
          interests: t.cv.interests,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.details || errorData.error || "Erro ao gerar o PDF",
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download resume:", error);
      alert(
        `Failed to generate resume: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  if (isLoading) return <Loading />;

  const parsePeriod = (period: string) => {
    if (period.includes(" - ")) {
      const [startStr, endStr] = period.split(" - ");
      const startYear = Number.parseInt(startStr);
      const endYear =
        endStr.toLowerCase() === "present"
          ? new Date().getFullYear()
          : Number.parseInt(endStr);
      return { start: startYear, end: endYear };
    }
    const year = Number.parseInt(period);
    return { start: year, end: year };
  };

  const navKeys = [
    { key: "about", label: t.nav.about },
    { key: "experience", label: t.nav.experience },
    { key: "projects", label: t.nav.projects },
    { key: "writing", label: t.nav.writing },
  ];

  return (
    <main className="flex flex-col lg:flex-row min-h-screen lg:p-12 p-6 xl:px-48 xl:justify-center">
      {/* Sidebar / Introdução */}
      <section className="lg:w-[50%] w-full flex flex-col p-6 lg:p-12 justify-between lg:h-[80dvh] h-auto lg:sticky top-8">
        {/* Brief */}
        <div className="flex gap-4 lg:gap-4 items-start lg:items-start">
          <Image
            className="border-r-foreground border-r-2 p-2 lg:w-16"
            src={"/logo.png"}
            width={48}
            height={48}
            alt="Ivandro Neto logo"
          />
          <div className="flex flex-col gap-12 lg:gap-44 h-auto lg:h-[90dvh]">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
                Ivandro Neto
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold capitalize mt-3">
                {t.hero.role}
              </h2>
              <p className="text-sm lg:text-base mt-4 text-offtext max-w-lg">
                {t.hero.tagline}
              </p>
            </div>
            {/* Nav */}
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {navKeys.map(({ key, label }) => (
                  <li key={key} className="uppercase cursor-pointer text-lg">
                    <a
                      href={`#${key}`}
                      className={`nav-link ${
                        activeSection === key || (isTop && key === "about")
                          ? "active"
                          : ""
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Social links + Language switcher */}
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex w-full gap-5 items-center">
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
                      WebkitMaskImage:
                        "url('/linkedin-brands-solid-full.svg')",
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
                      WebkitMaskImage:
                        "url('/x-twitter-brands-solid-full.svg')",
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
                      maskImage:
                        "url('/threads-brands-solid-full (1).svg')",
                      WebkitMaskImage:
                        "url('/threads-brands-solid-full (1).svg')",
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
              {/* Language switcher below social icons */}
              <LangSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="flex flex-col lg:w-[65%] h-auto w-full p-0 lg:p-8 gap-8 items-center overflow-y-auto scroll-smooth min-h-screen bg-background">
        {/* About */}
        <section
          id="about"
          className="text-offtext lg:px-6 p-0 lg:h-fit flex flex-col gap-6 xl:py-4"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            {t.about.heading}
          </h2>
          <section className="flex flex-col gap-6">
            <p className="text-sm lg:text-base">{t.about.p1}</p>
            <p className="text-sm lg:text-base">
              {t.about.p2.split(t.about.p2_ucall_label)[0]}
              <a
                className="text-zinc-200"
                href="https://www.ucall.co.ao"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.about.p2_ucall_label}
              </a>
              {t.about.p2.split(t.about.p2_ucall_label)[1]}
            </p>
            <p className="text-sm lg:text-base">{t.about.p3}</p>
            <p className="text-sm lg:text-base">{t.about.p4}</p>
          </section>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="text-offtext flex flex-col gap-4 w-full h-auto"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            {t.experience.heading}
          </h2>
          {experiences
            .sort((a, b) => {
              const { start: startA, end: endA } = parsePeriod(a.period);
              const { start: startB, end: endB } = parsePeriod(b.period);
              if (endB !== endA) return endB - endA;
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
            disabled={isGeneratingPdf}
            className="hover:underline cursor-pointer text-left disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            {isGeneratingPdf
              ? t.experience.generatingBtn
              : t.experience.resumeBtn}
          </button>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="text-offtext grid grid-cols-1 gap-4 w-full"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            {t.projects.heading}
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
            {t.projects.viewArchive}
          </a>
        </section>

        {/* Writing */}
        <section
          id="writing"
          className="text-offtext grid grid-cols-1 gap-4 w-full"
        >
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            {t.writing.heading}
          </h2>
          {contentItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </section>

        <div className="footer text-xs text-offtext opacity-40 text-center mt-12 mb-4">
          <p>{t.footer.copy}</p>
        </div>
      </section>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </main>
  );
};

/* ─────────────────────────────────────────────
   Root export — wraps with LanguageProvider
───────────────────────────────────────────── */
const Page = () => (
  <LanguageProvider>
    <PageInner />
  </LanguageProvider>
);

export default memo(Page);
