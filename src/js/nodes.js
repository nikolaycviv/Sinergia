/* global $ */
const nodes = (() => {
    const n = {};
    n.contactForm = document.body.querySelector('#contactFormID');
    n.formGroup = n.contactForm.querySelector('.form-group');
    n.formName = n.formGroup[0];
    n.formEmail = n.formGroup[1];
    n.formMessage = n.formGroup[2];

    n.$bannerBtn = $('#bannerBtn');
    n.$home = $('.navbar-brand');
    n.$navAbout = $('#navAbout');
    n.$navNews = $('#navNews');
    n.$navAdvantages = $('#navAdvantages');
    // n.$navServices = $('#navServices');
    n.$navCourses = $('#navCourses');
    n.$navDiplomas = $('#navDiplomas');
    n.$navTeam = $('#navTeam');
    n.$navCarriers = $('#navCarriers');
    n.$contact = $('#navContact');

    n.$aboutBlock = $('#aboutBlock');
    n.$newsBlock = $('#newsBlock');
    n.$advantagesBlock = $('#advantagesBlock');
    n.$servicesBlock = $('#servicesBlock');
    n.$coursesBlock = $('#coursesBlock');
    n.$diplomasBlock = $('#diplomasBlock');
    n.$teamBlock = $('#teamBlock');
    n.$carriersBlock = $('#carriersBlock');
    n.$phoneContact = $('#phoneContact');

    n.$container = $('div');

    n.$childrenInfoClick = $('#childrenInfoClick');
    // n.$adultsInfoClick = $('#adultsInfoClick');
    n.$vouchersInfoClick = $('#vouchersInfoClick');
    n.$individualLessonsInfoClick = $('#individualLessonsInfoClick');
    n.$distanceLearningInfoClick = $('#distanceLearningInfoClick');
    n.$childrenInfo = $('#childrenInfo');
    // n.$adultsInfo = $('#adultsInfo');
    n.$vouchersInfo = $('#vouchersInfo');
    n.$individualLessonsInfo = $('#individualLessonsInfo');
    n.$distanceLearningInfo = $('#distanceLearningInfo');

    n.navDivs = [n.$navAbout, n.$navNews, n.$navAdvantages, n.$navCourses, n.$navDiplomas, n.$navTeam, n.$navCarriers, n.$contact];
    // n.divs = [n.$aboutBlock, n.$newsBlock, n.$advantagesBlock, n.$servicesBlock, n.$coursesBlock, n.$diplomasBlock, n.$teamBlock, n.$carriersBlock];
    n.divs = [n.$aboutBlock, n.$newsBlock, n.$advantagesBlock, n.$coursesBlock, n.$diplomasBlock, n.$teamBlock, n.$carriersBlock];

    return n;
})();

export {
    nodes
};
