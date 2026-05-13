import { LanguageProvider } from "@/context/LanguageContext";

export default function ArchivedProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
