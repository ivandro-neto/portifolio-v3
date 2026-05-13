"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

export const LangSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-3 py-3 px-4 rounded-lg border border-foreground/20 hover:border-foreground/40 transition-colors"
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-3 py-1.5 rounded-md font-semibold text-sm transition-all ${
            locale === code
              ? "bg-foreground text-background cursor-default"
              : "text-foreground hover:bg-foreground/10 cursor-pointer"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
