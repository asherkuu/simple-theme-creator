const fs = require("fs");
const prettier = require("prettier");

const getDate = new Date().toISOString();
const ASHPOR_DOMAIN = "https://simple.vscode-theme.com";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

// public/sitemap 내부의 모든 .gz 파일을 불러와 참조하도록 합니다.
(async () => {
  const { globby } = await import("globby");
  const pages = await globby(["../public/sitemap/*.gz"]);

  const sitemapIndex = `
    ${pages
      .map((page) => {
        const path = page.replace("../public/", "");
        return `
          <sitemap>
            <loc>${`${ASHPOR_DOMAIN}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join("")}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync("../public/sitemap.xml", formattedSitemap, "utf8");
})();
