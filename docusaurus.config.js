import { themes as prismThemes } from "prism-react-renderer";

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Yuzu documentation",
    tagline: "",
    url: "https://citrus-software.github.io",
    baseUrl: "/yuzu-docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "citrus-software", // Usually your GitHub org/user name.
    projectName: "yuzu-docs", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            sidebarCollapsed: false,
            routeBasePath: "/",
          },
          blog: {
            showReadingTime: true,
            routeBasePath: "/release-notes/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Yuzu",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "user_manual/intro",
              position: "left",
              label: "User manual",
            },
            {
              type: "doc",
              docId: "developer_guide/hello_yuzu",
              position: "left",
              label: "Developer Guide",
            },
            // { to: "/release-notes", label: "Release notes", position: "left" },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} TeamTO.`,
        },
        prism: {
          theme: prismThemes.github,
        },
      }),
  }
);
