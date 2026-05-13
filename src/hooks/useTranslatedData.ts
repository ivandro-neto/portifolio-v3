import { useLanguage } from "@/context/LanguageContext";
import { experienceTranslations } from "@/i18n/experienceTranslations";
import { projectsTranslations } from "@/i18n/projectsTranslations";

export const useTranslatedData = () => {
  const { locale } = useLanguage();

  const experiences = experienceTranslations[locale].experiences;
  const experiencesResumed = experienceTranslations[locale].experiencesResumed;
  const projects = projectsTranslations[locale];

  return {
    experiences,
    experiencesResumed,
    projects,
  };
};
