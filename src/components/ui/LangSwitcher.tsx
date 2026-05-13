"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export const LangSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold tracking-widest"
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map(({ code, label }, idx) => (
        <span key={code} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={`transition-colors ${
              locale === code
                ? "text-foreground cursor-default"
                : "text-offtext hover:text-foreground cursor-pointer"
            }`}
          >
            {label}
          </button>
          {idx < LOCALES.length - 1 && (
            <span className="text-offtext opacity-40 select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
};
