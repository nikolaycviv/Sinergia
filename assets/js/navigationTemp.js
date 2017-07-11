"use strict";
/* global main, helpers */
document.addEventListener('DOMContentLoaded', () => {
    // navigation shortcut
    helpers.navigationListener(main.nodes.navAbout, main.nodes.aboutBlock);
    helpers.navigationListener(main.nodes.bannerBtn, main.nodes.aboutBlock);
    helpers.navigationListener(main.nodes.navNews, main.nodes.newsBlock);
    helpers.navigationListener(main.nodes.navCarriers, main.nodes.carriersBlock);
    helpers.navigationListener(main.nodes.contact, main.nodes.phoneContact);
    helpers.navigationListener(main.nodes.home);
});
