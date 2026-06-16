import type { Locale, RouteKey } from "./config";

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: "/",
    fr: "/fr/",
    pt: "/pt/",
  },
  ericeira: {
    en: "/ericeira/",
    fr: "/fr/ericeira/",
    pt: "/pt/ericeira/",
  },
  santaCruz: {
    en: "/santa-cruz/",
    fr: "/fr/santa-cruz/",
    pt: "/pt/santa-cruz/",
  },
  atHome: {
    en: "/at-home/",
    fr: "/fr/ateliers-a-domicile/",
    pt: "/pt/workshops-em-casa/",
  },
  blog: {
    en: "/blog/",
    fr: "/fr/blog/",
    pt: "/pt/blog/",
  },
};

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${base}${cleanPath}`;
}
