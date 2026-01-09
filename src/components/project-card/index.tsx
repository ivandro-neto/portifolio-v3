import Image from "next/image";
import type React from "react";

interface ICardsProps {
  title: string;
  link: string;
  description: string;
  image?: string; // URL da imagem
  children?: React.ReactElement; // Links, métricas, tecnologias, etc.
}

const ProjectCard: React.FC<ICardsProps> = ({
  title,
  description,
  image,
  children,
  link
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center bg-background p-2 rounded-md w-full sm:justify-center flex-col sm:max-w-sm md:max-w-md lg:flex-row lg:max-w-full hover:bg-backgroundlight transition-all">
        {/* Imagem do Projeto */}
        {image && (
          <div className="flex items-center justify-center p-2 w-full h-auto sm:h-auto md:h-auto sm:max-w-sm ">
            <Image
              src={image}
              alt={title}
              className="object-cover rounded-md border-slate-600 border-2"
              priority
              width={450}
              height={450}
            />
          </div>
        )}

        {/* Conteúdo */}
        <div className={`p-4 ${image ? "min-w-[80%] sm:max-w-sm" : "w-full"}`}>
          <h2 className="text-md font-bold text-foreground mb-2">{title}</h2>
          <p className="text-offtext text-xs mb-4 font-normal">{description}</p>
          <div>{children}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
