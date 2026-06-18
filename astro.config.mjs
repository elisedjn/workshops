import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE ?? "https://workshops.waterlili.eu";
const base = process.env.BASE_PATH ?? "/";

function openMarkdownLinksInNewTab() {
  return (tree) => {
    const visit = (node) => {
      if (node?.type === "element" && node.tagName === "a") {
        node.properties = {
          ...node.properties,
          target: "_blank",
          rel: "noopener noreferrer",
        };
      }

      if (Array.isArray(node?.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [openMarkdownLinksInNewTab],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
