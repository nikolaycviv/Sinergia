"use strict";
var main = (function() {
    // Navigation bar buttons
    var nodes = (function() {
        var n = {};
        n.navigation = document.body.querySelector("#navigation");
        n.about = n.navigation.querySelector("#navAbout");
        n.navServices = n.navigation.querySelector("#navServices");
        n.courses = n.navigation.querySelector("#navCourses");
        n.contact = n.navigation.querySelector("#navContact");
        n.aboutRow = document.body.querySelector("#aboutRow");
        n.serviceRow = document.body.querySelector("#servicesRow");
        n.coursesInfo = document.body.querySelector("#coursesInfo");
        n.phoneContact = document.body.querySelector("#phoneContact");
        n.services = document.body.querySelector("#services");
        return n;
    })();

    // Navigation Shortcut
    var navFunctionsArray = new Map([
        [nodes.about, nodes.aboutRow],
        [nodes.navServices, nodes.serviceRow],
        [nodes.courses, nodes.coursesInfo],
        [nodes.contact, nodes.phoneContact]
    ]);

    document.addEventListener('DOMContentLoaded', function() {
        helpers.navigationShortcut(navFunctionsArray);
        var array = [nodes.aboutRow, nodes.services, nodes.coursesInfo];
        nodes.about.addEventListener('click', helpers.toggleVisibility.bind(this, array)); // to do
        nodes.navServices.addEventListener('click', helpers.toggleVisibility(array));  // to do
        nodes.courses.addEventListener('click', helpers.toggleVisibility(array));  // to do
        // nodes.about.addEventListener('click', helpers.toggleVisibility(array));
        // nodes.about.addEventListener('click', function() {
        //     nodes.aboutRow.style.display = 'block';
        //     nodes.services.style.display = 'none';
        //     nodes.coursesInfo.style.display = 'none';
        // });
    });

    return {
        nodes: nodes
    }
})();
