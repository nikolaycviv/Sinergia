import {helpers} from './helpers';
import {nodes} from './nodes';

export default (function () {
  document.addEventListener('DOMContentLoaded', () => {
    // navigation shortcut
    helpers.navigationListener(nodes.navAbout, nodes.$aboutBlock);
    helpers.navigationListener(nodes.bannerBtn, nodes.$aboutBlock);
    helpers.navigationListener(nodes.navNews, nodes.$newsBlock);
    helpers.navigationListener(nodes.navCarriers, nodes.$carriersBlock);
    helpers.navigationListener(nodes.contact, nodes.$phoneContact);
    helpers.navigationListener(nodes.home);
  });
})();
