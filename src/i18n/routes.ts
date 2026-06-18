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
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${cleanPath}`;
}
