"use client";

import React, { memo } from "react";
import { Box } from "@/components/TechSkillBox";
import { useRouter } from "next/navigation";
import { archivedProjects } from "@/data/archived_projects";

const ProjectsPage = () => {
  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-background text-offtext font-sans selection:bg-foreground selection:text-background">
      <div className="flex flex-row items-center w-full px-8 py-12 lg:px-12 xl:px-48 gap-8">
        <button
          className="text-offtext hover:text-foreground font-bold flex items-center gap-2 transition-colors"
          onClick={() => navigate.push("/")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Ivandro Neto
        </button>
      </div>

      <main className="container mx-auto px-8 lg:px-12 xl:px-48 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-16">All Projects</h1>

        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-offtext">
            <thead className="text-foreground font-bold border-b border-white/5">
              <tr>
                <th scope="col" className="py-4 pr-4">Year</th>
                <th scope="col" className="py-4 pr-4">Project</th>
                <th scope="col" className="hidden lg:table-cell py-4 pr-4">Made at</th>
                <th scope="col" className="hidden lg:table-cell py-4 pr-4">Built with</th>
                <th scope="col" className="hidden sm:table-cell py-4 pr-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {archivedProjects.map((project, index) => (
                <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-slate-800/50 transition-colors group">
                  <td className="py-6 pr-4 align-top text-offtext font-mono text-xs pt-7">{project.year}</td>
                  <td className="py-6 pr-4 align-top font-bold text-foreground text-base">
                     <div className="block sm:hidden mb-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-foreground focus:text-foreground">
                             {project.title}
                        </a>
                     </div>
                     <div className="hidden sm:block">
                        {project.title}
                     </div>
                     <div className="block lg:hidden mt-2 text-offtext/80 text-xs mb-2">{project.madeAt}</div>
                     <div className="flex lg:hidden flex-wrap gap-2 mt-2">
                         {project.builtWith.map(tech => (
                             <span key={tech} className="text-foreground bg-white/10 px-2 py-1 rounded-full text-xs opacity-90">{tech}</span>
                         ))}
                     </div>
                  </td>
                  <td className="hidden lg:table-cell py-6 pr-4 align-top pt-7">{project.madeAt}</td>
                  <td className="hidden lg:table-cell py-6 pr-4 align-top w-[30%]">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.builtWith.map((tech) => (
                        <Box key={tech} content={tech} />
                      ))}
                    </div>
                  </td>
                  <td className="hidden sm:table-cell py-6 pr-4 align-top pt-7">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offtext hover:text-foreground transition-colors flex items-center gap-1 group-hover:text-foreground"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="truncate max-w-[150px]">{new URL(project.link).hostname.replace('www.', '').replace('github.com', 'GitHub')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default memo(ProjectsPage);
