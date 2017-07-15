/* global $ */
module.exports = (function () {
  const nodes = (function () {
    const n = {};
    n.navigation = document.body.querySelector('#navigation');
    n.bannerBtn = document.getElementById('bannerBtn');
    n.navAbout = n.navigation.querySelector('#navAbout');
    n.navNews = n.navigation.querySelector('#navNews');
    n.navAdvantages = n.navigation.querySelector('#navAdvantages');
    n.navServices = n.navigation.querySelector('#navServices');
    n.navCourses = n.navigation.querySelector('#navCourses');
    n.navDiplomas = n.navigation.querySelector('#navDiplomas');
    n.navTeam = n.navigation.querySelector('#navTeam');
    n.navCarriers = n.navigation.querySelector('#navCarriers');
    n.contact = n.navigation.querySelector('#navContact');
    n.aboutBlock = $('#aboutBlock');
    n.newsBlock = $('#newsBlock');
    n.advantagesBlock = $('#advantagesBlock');
    n.servicesBlock = $('#servicesBlock');
    n.coursesBlock = $('#coursesBlock');
    n.diplomasBlock = $('#diplomasBlock');
    n.teamBlock = $('#teamBlock');
    n.carriersBlock = $('#carriersBlock');
    n.phoneContact = $('#phoneContact');
    n.home = document.querySelector('.navbar-brand');
    n.container = $('div');
    n.navDivs = [n.navAbout, n.navNews, n.navAdvantages, n.navServices, n.navCourses, n.navDiplomas, n.navTeam, n.navCarriers, n.contact];
    n.divs = [n.aboutBlock, n.newsBlock, n.advantagesBlock, n.servicesBlock, n.coursesBlock, n.diplomasBlock, n.teamBlock, n.carriersBlock];
    // only while deeloping
    n.navDivsTemp = [n.navAbout, n.navNews, n.navCarriers, n.contact];
    n.divsTemp = [n.aboutBlock, n.newsBlock, n.carriersBlock];
    return n;
  })();

  return {
    nodes: nodes
  };
})();
