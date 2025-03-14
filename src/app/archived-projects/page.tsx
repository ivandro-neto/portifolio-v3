"use client";

import React, { useState, useEffect, memo } from "react";
import ProjectCard from "@/components/project-card";
import { Box } from "@/components/TechSkillBox";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading-screen";
interface Repo {
  id: number; // or string if that's what you expect
  html_url: string;
  owner: {
    avatar_url: string;
  };
  name: string;
  description : string;
  language : string
  // include any other properties you use
}
const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useRouter();
  useEffect(() => {
    async function fetchRepos() {
      try {
        // Substitua <YOUR_USERNAME> pelo seu nome de usuário do GitHub
        const response = await fetch(
          "https://api.github.com/users/ivandro-neto/repos",
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar os repositórios");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-row items-center w-full px-6 py-4 gap-8">
        <button
          className="p-2 bg-accent rounded-md"
          onClick={() => navigate.push("/")}
        >
          {" "}
          {"<- "}go back
        </button>
        <h1 className="text-2xl font-bold">Archived-projects</h1>
      </div>
      <main className="container mx-auto p-4">
        {error && <p>Erro: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              link={repo.html_url}
              image={repo.owner.avatar_url} // Caso tenha imagens personalizadas, substitua aqui
              title={repo.name}
              description={repo.description || "Sem descrição disponível."}
            >
              <Box content={repo.language || "Desconhecido"} />
            </ProjectCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default memo(ProjectsPage);
