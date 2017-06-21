// All images taken from PEXELS.COM - free stock images
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    // Navigation bar buttons
    var sinergia = (function() {
        var nodes = {}
        var getNodes = (function() {
            nodes.navigation = document.body.querySelector("#navigation");
            nodes.about = nodes.navigation.querySelector("#navAbout");
            nodes.services = nodes.navigation.querySelector("#navServices");
            nodes.courses = nodes.navigation.querySelector("#navCourses");
            nodes.contact = nodes.navigation.querySelector("#navContact");
            nodes.formName = document.body.querySelector("#formName");
            nodes.formEmail = document.body.querySelector("#formEmail");
            nodes.formMessage = document.body.querySelector("#formMessage");
            nodes.aboutRow = document.body.querySelector("#aboutRow");
            nodes.serviceRow = document.body.querySelector("#servicesRow");
            nodes.coursesInfo = document.body.querySelector("#coursesInfo");
            nodes.phoneContact = document.body.querySelector("#phoneContact");
            nodes.aboutRow = document.body.querySelector("#aboutRow");
            nodes.bannerBtn = document.body.querySelector("#bannerBtn");
        })();

        var callback = function() {
            selector.scrollIntoView();
            window.scrollBy(0, -50);
        };

        var test = function(node, selector) {
            node.addEventListener("click", function() {
                selector.scrollIntoView();
                window.scrollBy(0, -50);
            })
        };
        test(nodes.about, nodes.aboutRow);
        test(nodes.services, nodes.serviceRow);
        test(nodes.courses, nodes.coursesInfo);
        test(nodes.contact, nodes.phoneContact);
        // Learn more jumbotron button jump to about div
        test(nodes.bannerBtn, nodes.aboutRow);

        // Clear input on click in the form
        nodes.formName.addEventListener("cluck", function() {
            nodes.formName.value = "";
        });
        nodes.formEmail.addEventListener("cluck", function() {
            nodes.formEmail.value = "";
        });
        nodes.formMessage.addEventListener("cluck", function() {
            nodes.formMessage.value = "";
        });
    })();
});
