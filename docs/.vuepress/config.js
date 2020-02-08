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
        sidebar: sidebarArray
    }
};

//check for sidebar
console.log(sidebarArray);
