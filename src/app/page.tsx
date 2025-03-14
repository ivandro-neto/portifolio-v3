'use client'

import ProjectCard from "@/components/project-card";
import { Box } from "@/components/TechSkillBox";
import ExperienceCard from "@/components/xp-cards";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

const page = () => {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= (window.screen.height/3) && rect.bottom >= (window.screen.height/3)) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col lg:flex-row w-screen lg:p-8 p-4 xl:px-24 xl:justify-center">
      {/* Sidebar / Introdução */}
      <section className="lg:w-[50%] w-full flex flex-col p-6 lg:p-12 justify-between lg:h-[80dvh] lg:sticky top-8">
        {/* Brief */}
        <div className="flex gap-4 lg:gap-4 items-center lg:items-start">
          <Image
            className="border-r-foreground border-r-2 p-2"
            src={"/logo.png"}
            width={48}
            height={48}
            alt="Ivandro Neto logo"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
                Ivandro Neto
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold capitalize">
                Software Engineer
              </h2>
              <p className="text-sm lg:text-base">
                I deliver high-impact, scalable software solutions.
              </p>
            </div>
            {/* Nav */}
            <nav className="hidden lg:block">
              <ul className="space-y-2">
                <li className="uppercase cursor-pointer">
                  <a
                    href="#about"
                    className={`nav-link ${activeSection === "about" || window.scrollY <= 0 ? "active" : ""}`}
                  >
                  About
                  </a>
                </li>
                <li className="uppercase cursor-pointer">
                  <a
                    href="#experience"
                    className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
                  >
                  Experience
                  </a>
                </li>
                <li className="uppercase cursor-pointer">
                <a
                    href="#projects"
                    className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                  >
                  Projects
                  </a>
                </li>
              </ul>
            </nav>
            {/* Links */}
            <div className="flex w-full p-4">

            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="flex flex-col lg:w-[65%] h-auto w-full p-0 lg:p-8 gap-8 items-center overflow-y-auto scroll-smooth min-h-screen bg-background ">
        {/* Sobre Mim */}
        <section id="about" className="text-offtext lg:px-6 p-0 lg:h-fit flex flex-col gap-6 xl:py-4">
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            About
          </h2>
          <p className="text-justify text-sm lg:text-base ">
            I’m Ivandro Neto, a software engineer focused on creating scalable,
            high-performance solutions and leading development teams to success.
            Currently at{" "}
            <a
              className="text-zinc-200"
              href="https://spacium.org"
            >
              Spacium
            </a>
            , I lead our development team while partnering closely with small
            startups to elevate their brand presence and refine their codebases
            for scalability. This role has allowed me to strategically shape
            digital products, delivering solutions that empower businesses to
            scale sustainably while maintaining high standards in code quality.
          </p>
          <p className="text-justify text-sm ">
            In addition to my work at{" "}
            <a
              className="text-zinc-200"
              href="https://spacium.org"
            >
              Spacium
            </a>
            , I contribute as a developer at{" "}
            <a
              className="text-zinc-200"
              href="https://spacium.org"
            >
              RisingSystems
            </a>
            , a Portuguese software development provider. Here, I tackle diverse
            projects, developing custom software solutions that meet the unique
            needs of each client. This experience has strengthened my
            adaptability across front-end and back-end development, equipping me
            to handle a wide range of technical challenges.
          </p>
          <p className="">
            Throughout these roles, I combine strategic insight with hands-on
            expertise, focusing on efficiency, robustness, and seamless
            scalability. I approach each project with a commitment to technical
            excellence and client satisfaction, ensuring that the solutions I
            create make a lasting impact.
          </p>
          <p className="">
            Outside of work, I find balance and inspiration through chess,
            photography, reading, and spending time with family and friends.
            These pursuits fuel my creativity and bring fresh perspectives to my
            work, helping me to approach each new challenge with clarity and
            innovation.
          </p>
        </section>

        {/* Experiência */}
        <section id="experience" className="text-offtext flex flex-col gap-4 w-full h-auto">
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Experience
          </h2>
          <ExperienceCard
            period="2023 - 24"
            role="Frontend Developer"
            company="SPACIUM"
            description="In addition to my work at Spacium, I contribute as a developer at RisingSystems, a Portuguese software development provider. Here, I tackle diverse projects, developing custom software solutions that meet the unique needs of each client."
          >
            <div className="flex gap-2 flex-wrap">
              <Box content="Next.JS" />
              <Box content="Next.JS" />
              <Box content="Next.JS" />
            </div>
          </ExperienceCard>

          <a href="">View full resumé</a>
        </section>

        {/* Projetos */}
        <section id="projects" className="text-offtext grid grid-cols-1 gap-4 w-full">
          <h2 className="lg:hidden text-foreground font-semibold sm:block uppercase">
            Projects
          </h2>
          <ProjectCard
            link=""
            image="/Projects/Ecommerce.png"
            title="Ecommerce Website"
            description="I.N. Store é uma loja de moda conceitual feita com HTML, CSS e JavaScript. Inclui funcionalidades como login, carrinho, produtos e mais."
          >
            <Box content="Next.JS" />
          </ProjectCard>
          <ProjectCard
            link=""
            image="/Projects/Ecommerce.png"
            title="Ecommerce Website"
            description="I.N. Store é uma loja de moda conceitual feita com HTML, CSS e JavaScript. Inclui funcionalidades como login, carrinho, produtos e mais."
          >
            <Box content="Next.JS" />
          </ProjectCard>
          <ProjectCard
            link=""
            image="/Projects/EventHubAPI.png"
            title="Portfolio Website"
            description="Um portfólio minimalista e responsivo feito com Next.js e Tailwind."
          >
            <div className="flex space-x-2">
              <Box content="Next.JS" />
            </div>
          </ProjectCard>

          <a href="">View full archive projects</a>
        </section>
      </section>
    </main>
  );
};

export default memo(page);
