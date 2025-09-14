module.exports = {
  title: "Accessible React UI Kit",
  tagline: "Lightweight, accessible-first React components",
  url: "https://your-ui-kit-docs.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Hermit-commits-code",
  projectName: "accessible-react-ui-kit",
  themeConfig: {
    navbar: {
      title: "Accessible React UI Kit",
      items: [
        { to: "docs/", label: "Docs", position: "left" },
        { to: "docs/components", label: "Components", position: "left" },
        {
          href: "https://github.com/Hermit-commits-code/accessible-react-ui-kit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
  },
};
