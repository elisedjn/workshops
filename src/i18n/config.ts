export const defaultLocale = "en" as const;
export const locales = ["en", "fr", "pt"] as const;

export type Locale = (typeof locales)[number];
export type RouteKey = "home" | "ericeira" | "santaCruz" | "atHome" | "blog";

export const languageNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  pt: "Português",
};

export const languageLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  pt: "PT",
};
