module.exports = {
    title: "Papatto",
    description: "クローゼットアプリ",
    themeConfig: {
        logo: "/image/app_icon_maru.png",
        navbar: [
            // NavbarItem
            {
                text: "HOME",
                link: "/",
            },
            {
                text: "利用規約",
                link: "/terms-of-service/",
            },
            {
                text: "プライバシー",
                link: "/privacy-policy/",
            },
        ],
    },
    base: "/PapattoTeams/",
    dest: "docs",
};
