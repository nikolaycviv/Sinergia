// All images taken from PEXELS.COM - free stock images
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    // Navigation bar buttons
    (function() {
        var nodes = {};
        (function() {
            nodes.navigation = document.body.querySelector("#navigation");
            nodes.about = nodes.navigation.querySelector("#navAbout");
            nodes.services = nodes.navigation.querySelector("#navServices");
            nodes.courses = nodes.navigation.querySelector("#navCourses");
            nodes.contact = nodes.navigation.querySelector("#navContact");
            nodes.formName = document.body.querySelector("#name");
            nodes.formEmail = document.body.querySelector("#email");
            nodes.formMessage = document.body.querySelector("#message");
            nodes.aboutRow = document.body.querySelector("#aboutRow");
            nodes.serviceRow = document.body.querySelector("#servicesRow");
            nodes.coursesInfo = document.body.querySelector("#coursesInfo");
            nodes.phoneContact = document.body.querySelector("#phoneContact");
            nodes.aboutRow = document.body.querySelector("#aboutRow");
            nodes.bannerBtn = document.body.querySelector("#bannerBtn");
        })();

        var navigationShortcut = function(node, selector) {
            node.addEventListener("click", function() {
                selector.scrollIntoView();
                window.scrollBy(0, -50);
            });
        };
        navigationShortcut(nodes.about, nodes.aboutRow);
        navigationShortcut(nodes.services, nodes.serviceRow);
        navigationShortcut(nodes.courses, nodes.coursesInfo);
        navigationShortcut(nodes.contact, nodes.phoneContact);
        // Learn more jumbotron button jump to about div
        navigationShortcut(nodes.bannerBtn, nodes.aboutRow);

        // Clear input on click in the form
        nodes.formName.addEventListener("click", function() {
            nodes.formName.value = "";
        });
        nodes.formEmail.addEventListener("click", function() {
            nodes.formEmail.value = "";
        });
        nodes.formMessage.addEventListener("click", function() {
            nodes.formMessage.value = "";
        });
    })();
});
