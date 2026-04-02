import { themes as prismThemes } from "prism-react-renderer";

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Overmind documentation",
    tagline: "",
    url: "https://docs.ovm.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "TeamTO", // Usually your GitHub org/user name.
    projectName: "Overmind", // Usually your repo name.

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
          title: "Overmind",
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
              docId: "tech_docs/tech",
              position: "left",
              label: "Tech doc",
            },
            { to: "/release-notes", label: "Release notes", position: "left" },
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
