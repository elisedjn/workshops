import type { Locale } from "./config";
import { localizedRoutes } from "./routes";

type WorkshopLocation = "ericeira" | "santa-cruz" | "at-home";

export function getWorkshopLocationPath(location: WorkshopLocation, lang: Locale): string {
  if (location === "santa-cruz") {
    return localizedRoutes.santaCruz[lang];
  }

  if (location === "at-home") {
    return localizedRoutes.atHome[lang];
  }

  return localizedRoutes.ericeira[lang];
}

export function getWorkshopPath(location: WorkshopLocation, lang: Locale, slug: string): string {
  return `${getWorkshopLocationPath(location, lang)}${slug}/`;
}
