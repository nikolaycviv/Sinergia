import { nodes } from './nodes';
const helpers = (() => {

    // element.scrollIntoView(alignToTop = true);


    /**
     * @param  {object} visibleDivId = {}
     * @param  {object} div = {}
     * @returns {void}
     */
    function toggleElementVisibility(visibleDivId, div) {
        visibleDivId === div ? div.style.display = 'block' : div.style.display = 'none';
    }

    /**
     * @param  {number} el -> element to toggle visible or not
     * @returns {void}
     */
    function toggleSingleElementVisibility(el) {
        matches(el, ':visible') ? el.style.display = 'none' : el.style.display = 'block';
    }

    /**
     * @param  {number} divId = null // *null or current divId to be visible*
     * @param  {array} divs = nodes.divs // *each to be visible or not*
     * @returns {void}
     */
    function divVisibility(divId, divs) {
        divs.map((div) => {
            divId === null ? div.style.display = 'block' : toggleElementVisibility(divId, div);
            return true;
        });
    }

    /**
     * @param  {object} node=*selected node*
     * @param  {array} arrayNodes=nodes.navDivs
     * @returns {void}
     */
    function toggleActive(node, arrayNodes) {
        arrayNodes.map((arrayNode) => {
            node.id === arrayNode.id ? arrayNode.classList.add('navActive') : arrayNode.classList.remove('navActive');
            return true;
        });
    }

    /**
     * @param  {object} nodeClick = *clicked node*
     * @param  {object} nodeAffect = *affected node*
     * @returns {void}
     */
    function navigationListener(nodeClick, nodeAffect) {
        nodeClick.addEventListener('click', (e) => {
            if (nodeClick.classList.contains('navbar-brand')) {
                nodeAffect = null;
            }
            divVisibility(nodeAffect, nodes.divs);
            toggleActive(e.target, nodes.navDivs);
            nodeAffect ? nodeAffect.scrollIntoView(true) : nodeClick.scrollIntoView(true);
        });
    }

    /**
     * @param  {object} el = element (node)
     * @param  {object} selector = css selector
     * @returns {boolean}
     */
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    };

    /**
     * gets the info (toggles - shows/hides - additional div) about the selected education
     * @param  {object} nodeClick = *clicked node*
     * @param  {object} nodeAffect = *affected node*
     * @returns {void}
     */
    function getInfo(nodeClick, nodeAffect) {
        nodeClick.addEventListener('click', () => {
            toggleSingleElementVisibility(nodeAffect);
            if (matches(nodeAffect, ':visible')) {
                nodeAffect.scrollIntoView();
            }
        });
    }

    return {
        getInfo,
        navigationListener
    };
})();

export { helpers };

