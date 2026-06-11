import { useLanguage } from "@/i18n";

export function LanguageSwitcher({
  compact,
  onDark,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-full border p-0.5 shadow-sm ${
        compact ? "text-xs" : "text-sm"
      } ${
        onDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md"
          : "border-border/60 bg-background/70 backdrop-blur-md"
      }`}
    >
      {(["en", "am"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-3 py-1.5 font-semibold transition-all ${
            locale === code
              ? onDark
                ? "bg-accent text-primary shadow-sm"
                : "bg-primary text-primary-foreground shadow-sm"
              : onDark
                ? "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
          }`}
        >
          {code === "en" ? "EN" : "አማ"}
        </button>
      ))}
    </div>
  );
}
