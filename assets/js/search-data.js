// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-this-website-is-created-hello-world",
          title: 'This website is created! Hello World!',
          description: "",
          section: "News",},{id: "news-excited-to-serve-as-a-course-assistant-for-ece-411-this-spring-2026-semester",
          title: 'Excited to serve as a Course Assistant for ECE 411 this Spring 2026...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-uiuc-with-my-b-s-in-computer-engineering",
          title: 'I graduated from UIUC with my B.S. in Computer Engineering.',
          description: "",
          section: "News",},{id: "news-starting-my-ph-d-at-uiuc-in-the-systems-platform-and-intelligence-lab",
          title: 'Starting my Ph.D. at UIUC in the Systems Platform and Intelligence Lab!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%62%72%6F%6D%33@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/max-bromberg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/max-bromberg", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
