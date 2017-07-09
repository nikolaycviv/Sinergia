"use strict";
var main = (function() {
    // Navigation bar buttons
    var nodes = (function() {
        var n = {};
        n.navigation = document.body.querySelector("#navigation");
        n.bannerBtn = document.getElementById("bannerBtn");
        n.about = n.navigation.querySelector("#navAbout");
        n.news = n.navigation.querySelector("#navNews");
        n.navAdvantages = n.navigation.querySelector("#navAdvantages");
        n.navServices = n.navigation.querySelector("#navServices");
        n.navCourses = n.navigation.querySelector("#navCourses");
        n.navDiplomas = n.navigation.querySelector("#navDiplomas");
        n.navTeam = n.navigation.querySelector("#navTeam");
        n.navCarriers = n.navigation.querySelector("#navCarriers");
        n.contact = n.navigation.querySelector("#navContact");
        n.aboutBlock = $("#aboutBlock");
        n.newsBlock = $("#newsBlock");
        n.serviceRow = $("#servicesRow");
        n.courses = $("#courses");
        n.carriers = $("#carriers");
        n.phoneContact = $("#phoneContact");
        n.services = $("#services");
        n.home = document.querySelector('.navbar-brand');
        // n.container = document.body.querySelectorAll("div");
        n.container = $('div');
        return n;
    })();

    return {
        nodes: nodes
    };
})();
