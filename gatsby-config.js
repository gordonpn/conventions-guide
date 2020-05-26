module.exports = {
  siteMetadata: {
    title: `Conventions Guide`,
    name: `Gordon Pham-Nguyen`,
    siteUrl: `https://conventions.gordon-pn.com`,
    description: `Personal documentation page for Git and project conventions that I like`,
    social: [
      {
        name: `github`,
        url: `https://github.com/gordonpn`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/Gordonpn`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/Git Conventions", "/Repository Conventions", "Coding Conventions"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
