"use strict";
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Shortcut
    main.nodes.about.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.aboutBlock);
        helpers.toggleActive(e.target);
        main.nodes.aboutBlock.goTo();
    });
    main.nodes.bannerBtn.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.aboutBlock);
        helpers.toggleActive(e.target);
        main.nodes.aboutBlock.goTo();
    });
    main.nodes.news.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.newsBlock);
        helpers.toggleActive(e.target);
        main.nodes.newsBlock.goTo();
    });
    // main.nodes.navAdvantages.addEventListener('click', function(e) {
    //     helpers.divVisibility(main.nodes.advantagesBlock);
    //     helpers.toggleActive(e.target);
    //     main.nodes.aboutBlock.goTo();
    // });
    main.nodes.navServices.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.services);
        helpers.toggleActive(e.target);
        main.nodes.services.goTo();
    });
    main.nodes.navCourses.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.courses);
        helpers.toggleActive(e.target);
        main.nodes.courses.goTo();
    });
    // main.nodes.navDiplomas.addEventListener('click', function(e) {
    //     helpers.divVisibility(main.nodes.diplomasBlock);
    //     helpers.toggleActive(e.target);
    //     main.nodes.services.goTo();
    // });
    // main.nodes.navTeam.addEventListener('click', function(e) {
    //     helpers.divVisibility(main.nodes.teamBlock);
    //     helpers.toggleActive(e.target);
    //     main.nodes.services.goTo();
    // });
    main.nodes.navCarriers.addEventListener('click', function(e) {
        helpers.divVisibility(main.nodes.carriersBlock);
        helpers.toggleActive(e.target);
        main.nodes.carriersBlock.goTo();
    });
    main.nodes.contact.addEventListener('click', function(e) {
        helpers.divVisibility();
        helpers.toggleActive(e.target);
        main.nodes.phoneContact.goTo();
    });
    main.nodes.home.addEventListener('click', function(e) {
        helpers.divVisibility();
        helpers.toggleActive(e.target);
    });
});
