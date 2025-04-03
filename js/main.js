"use strict";

const navItems = [
    { name: "Home", link: "index.html" },
    { name: "Maps", link: "maps.html" },
    { name: "ScoreSaber", link: "https://scoresaber.com/u/76561198100136966?page=1&sort=top", target: "_blank" },
    { name: "Scripts", link: "https://github.com/jevk/JevkMaps", target: "_blank" },
    { name: "HeckLib", link: "https://github.com/Heck-Library/HeckLib", target: "_blank" },
];

function buildNavbar() {
    const navbar = document.querySelector(".nav-div");
    const ul = document.createElement("ul");

    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = item.link;
        a.textContent = item.name;

        if (item.target) {
            a.target = item.target;
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
}

const footerItems = [
    { link: "https://discord.gg/GgfNCWbUgY", classes: "fa-brands fa-discord size" },
    { link: "https://www.twitch.tv/jevk", classes: "fa-brands fa-twitch size" },
    { link: "https://www.youtube.com/@jevk", classes: "fa-brands fa-youtube size" },
    { link: "https://www.github.com/jevk", classes: "fa-brands fa-github size" },
    { link: "https://beatsaver.com/profile/4284636", classes: "fa-solid fa-square-caret-down size"},
];

function buildFooter() {
    const footer = document.createElement("footer");
    footer.appendChild(document.createElement("br"));
    
    footerItems.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";

        const i = document.createElement("i");
        i.className = item.classes;

        a.appendChild(i);
        footer.appendChild(a);
    });

    footer.appendChild(document.createElement("br"));
    footer.appendChild(document.createElement("br"));

    document.body.appendChild(footer);
}