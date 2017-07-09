"use strict";
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Shortcut
    main.nodes.about.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.aboutBlock);
        main.nodes.aboutBlock.goTo();
    });
    main.nodes.bannerBtn.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.aboutBlock);
        main.nodes.aboutBlock.goTo();
    });
    main.nodes.news.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.newsBlock);
        main.nodes.newsBlock.goTo();
    });
    // main.nodes.advantages.addEventListener('click', function() {
    //     helpers.divVisibility(main.nodes.aboutBlock);
    //     main.nodes.aboutBlock.goTo();
    // });
    main.nodes.navServices.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.services);
        main.nodes.services.goTo();
    });
    main.nodes.navCourses.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.courses);
        main.nodes.courses.goTo();
    });
    // main.nodes.navDiplomas.addEventListener('click', function() {
    //     helpers.divVisibility(main.nodes.services);
    //     main.nodes.services.goTo();
    // });
    // main.nodes.navTeam.addEventListener('click', function() {
    //     helpers.divVisibility(main.nodes.services);
    //     main.nodes.services.goTo();
    // });
    main.nodes.navCarriers.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.carriers);
        main.nodes.carriers.goTo();
    });
    main.nodes.contact.addEventListener('click', function() {
        helpers.divVisibility(null);
        main.nodes.phoneContact.goTo();
    });
    main.nodes.home.addEventListener('click', function() {
        helpers.divVisibility(null);
    });
});
