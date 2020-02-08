const sidebarArray = require("hardocs/src/buildSidebar");



// configure these modules if you
module.exports = {
    // extend: '@vuepress/theme-default',
    title: "Open Hardware Leaders",
    base: "/" + process.env.REPOSITORY + "/",
    dest: "dist",
    //description : "use for meta descriptitrueon",
    logo: '/assets/img/logo.png',
    config: (md) => {
        md.options.linkify = sidebarArray;
    },
    theme: 'theme-default',
    themeConfig: {
        nav: [
            { text: 'Program', link: '/Program/01_introduction.md' },
        ],
        sidebar: sidebarArray,

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'https://github.com/Open-Hardware-Leaders/ohlwebsite',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Repository',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'https://github.com/Open-Hardware-Leaders/ohlwebsite',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    }
};

//check for sidebar
console.log(sidebarArray);
