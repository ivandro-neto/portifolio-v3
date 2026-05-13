"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export const LangSwitcher = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-background/80 px-1.5 py-1 text-sm font-semibold tracking-wider shadow-lg backdrop-blur-md sm:gap-2 sm:px-2 sm:py-1.5"
      role="group"
      aria-label={t.ui.langSwitcherLabel}
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active ? "true" : "false"}
            className={`rounded-full px-3 py-1 transition-all sm:px-4 sm:py-1.5 ${
              active
                ? "bg-foreground text-background shadow-sm"
                : "text-offtext hover:text-foreground"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
