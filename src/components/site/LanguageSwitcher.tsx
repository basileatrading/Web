import { useLanguage } from "@/i18n";

export function LanguageSwitcher({ compact }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-md border border-border bg-background p-0.5 ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      {(["en", "am"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded px-2.5 py-1.5 font-semibold transition-colors ${
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {code === "en" ? "EN" : "አማ"}
        </button>
      ))}
    </div>
  );
}
