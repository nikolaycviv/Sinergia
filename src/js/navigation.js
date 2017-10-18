import {helpers} from './helpers';
import {nodes} from './nodes';

export default (() => {
    document.addEventListener('DOMContentLoaded', () => {
        // navigation shortcut
        helpers.navigationListener(nodes.navAbout, nodes.$aboutBlock);
        helpers.navigationListener(nodes.bannerBtn, nodes.$aboutBlock);
        helpers.navigationListener(nodes.navNews, nodes.$newsBlock);
        helpers.navigationListener(nodes.navAdvantages, nodes.$advantagesBlock);
        // helpers.navigationListener(nodes.navServices, nodes.$servicesBlock);
        helpers.navigationListener(nodes.navCourses, nodes.$coursesBlock);
        helpers.navigationListener(nodes.navDiplomas, nodes.$diplomasBlock);
        helpers.navigationListener(nodes.navTeam, nodes.$teamBlock);
        helpers.navigationListener(nodes.navCarriers, nodes.$carriersBlock);
        helpers.navigationListener(nodes.contact, nodes.$phoneContact);
        helpers.navigationListener(nodes.home);

        helpers.getInfo(nodes.vouchersInfoClick, nodes.$vouchersInfo);
        helpers.getInfo(nodes.individualLessonsInfoClick, nodes.$individualLessonsInfo);
        helpers.getInfo(nodes.distanceLearningInfoClick, nodes.$distanceLearningInfo);
    });
})();
