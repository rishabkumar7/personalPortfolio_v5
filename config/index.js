module.exports = {
  //-- SITE SETTINGS -----
  author: "@rishabkumar7",
  siteTitle: "Rishab Kumar | Portfolio",
  siteShortTitle: "Rishab", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "This is the portfolio site for Rishab Kumar.",
  siteUrl: "https://rishabkumar.com/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Rishab Kumar's Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.rishabkumar.com%2Frss.xml",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rishabkumar7/",
    },
    {
      name: "Blog",
      url: "https://blog.rishabkumar.com/",
    },
    {
      name: "Github",
      url:
        "https://github.com/rishabkumar7/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rishabk7",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Features",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
