import type React from 'react';

interface ICardsProps {
  period: string;
  role: string;
  company: string;
  description: string;
  children: React.ReactElement; // Links, métricas, tecnologias, etc.
}

const ExperienceCard: React.FC<ICardsProps> = ({ period, role, company, description, children }) => {
  return (
    <div className="flex w-full h-auto justify-end items-center p-4 hover:bg-backgroundlight rounded-md transition-all">
      <div className="flex flex-col border-l-2 border-zinc-600 pl-4">
        <span className="text-offtext text-sm font-semibold group-hover:text-zinc-50 xl:text-base">{period}</span>
        <h3 className="text-lg font-semibold group-hover:text-zinc-50 xl:text-xl">
          {role} <span className="text-offtext">• {company}</span>
        </h3>
        <p className="text-offtext text-sm mt-2 px-2 py-1 text-justify group-hover:text-zinc-50 xl:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">{children}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
