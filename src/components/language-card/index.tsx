interface LanguageCardProps {
  language: string;
  level: string;
}

export default function LanguageCard({ language, level }: LanguageCardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-secondary rounded border border-accent border-opacity-20 hover:border-opacity-40 transition-all">
      <h3 className="text-foreground font-semibold">{language}</h3>
      <p className="text-sm text-offtext">{level}</p>
    </div>
  );
}
