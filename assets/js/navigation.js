"use strict";
var main = (function() {
    // Navigation bar buttons
    var nodes = (function() {
        var n = {};
        n.navigation = document.body.querySelector("#navigation");
        n.about = n.navigation.querySelector("#navAbout");
        n.navServices = n.navigation.querySelector("#navServices");
        n.navCourses = n.navigation.querySelector("#navCourses");
        n.contact = n.navigation.querySelector("#navContact");
        // n.aboutRow = document.body.querySelector("#aboutRow");
        // n.serviceRow = document.body.querySelector("#servicesRow");
        // n.coursesInfo = document.body.querySelector("#coursesInfo");
        // n.phoneContact = document.body.querySelector("#phoneContact");
        // n.services = document.body.querySelector("#services");
        n.aboutRow = $("#aboutRow");
        n.serviceRow = $("#servicesRow");
        n.courses = $("#courses");
        // n.coursesInfo = $("#coursesInfo");
        n.phoneContact = $("#phoneContact");
        n.services = $("#services");
        n.home = document.querySelector('.navbar-brand');
        // n.container = document.body.querySelectorAll("div");
        n.container = $('div');
        return n;
    })();

    return {
        nodes: nodes
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // Navigation Shortcut
    main.nodes.about.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.aboutRow);
        main.nodes.aboutRow.goTo();
    });
    main.nodes.navServices.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.services);
        main.nodes.services.goTo();
    });
    main.nodes.navCourses.addEventListener('click', function() {
        helpers.divVisibility(main.nodes.courses);
        main.nodes.courses.goTo();
    });
    main.nodes.contact.addEventListener('click', function() {
        helpers.divVisibility(null);
        main.nodes.phoneContact.goTo();
    });
    main.nodes.home.addEventListener('click', function() {
        helpers.divVisibility(null);
    });
});
