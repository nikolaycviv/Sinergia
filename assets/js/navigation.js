"use strict";
/* global main, helpers */
document.addEventListener('DOMContentLoaded', () => {
    // navigation shortcut
    helpers.navigationListener(main.nodes.navAbout, main.nodes.aboutBlock);
    helpers.navigationListener(main.nodes.bannerBtn, main.nodes.aboutBlock);
    helpers.navigationListener(main.nodes.navNews, main.nodes.newsBlock);
    helpers.navigationListener(main.nodes.navAdvantages, main.nodes.advantagesBlock);
    helpers.navigationListener(main.nodes.navServices, main.nodes.servicesBlock);
    helpers.navigationListener(main.nodes.navCourses, main.nodes.coursesBlock);
    helpers.navigationListener(main.nodes.navDiplomas, main.nodes.diplomasBlock);
    helpers.navigationListener(main.nodes.navTeam, main.nodes.teamBlock);
    helpers.navigationListener(main.nodes.navCarriers, main.nodes.carriersBlock);
    helpers.navigationListener(main.nodes.contact, main.nodes.phoneContact);
    helpers.navigationListener(main.nodes.home);
});
