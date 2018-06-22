/* global jQuery */
import { nodes } from './nodes';
const helpers = (() => {
    (($) => {
        $.fn.goTo = function goTo() {
            $('html, body').animate({
                scrollTop: `${$(this).offset().top}px`
            }, 'fast');
            // return this; // for chaining...
        };
    })(jQuery);

    /**
     * @param  {object} visibleDivId = {}
     * @param  {object} div = {}
     * @returns {void}
     */
    function toggleElementVisibility(visibleDivId, div) {
        visibleDivId === div ? div.show() : div.hide();
    }

    /**
     * @param  {number} el -> element to toggle visible or not
     * @returns {void}
     */
    function toggleSingleElementVisibility(el) {
        el.is(':visible') ? el.hide() : el.show();
    }

    /**
     * @param  {number} divId = null // *null or current divId to be visible*
     * @param  {array} divs = nodes.divs // *each to be visible or not*
     * @returns {void}
     */
    function divVisibility(divId, divs) {
        divs.map((div) => {
            divId === null ? div.show() : toggleElementVisibility(divId, div);
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
            node.id === arrayNode[0].id ? arrayNode.addClass('navActive') : arrayNode.removeClass('navActive');
            return true;
        });
    }

    /**
     * @param  {object} nodeClick = *clicked node*
     * @param  {object} nodeAffect = *affected node*
     * @returns {void}
     */
    function navigationListener(nodeClick, nodeAffect) {
        nodeClick.on('click', (e) => {
            if (nodeClick[0].classList.contains('navbar-brand')) {
                nodeAffect = null;
            }
            divVisibility(nodeAffect, nodes.divs);
            toggleActive(e.target, nodes.navDivs);
            nodeAffect ? nodeAffect.goTo() : nodeClick.goTo();
        });
    }

    /**
     * gets the info (toggles - shows/hides - additional div) about the selected education
     * @param  {object} nodeClick = *clicked node*
     * @param  {object} nodeAffect = *affected node*
     * @returns {void}
     */
    function getInfo(nodeClick, nodeAffect) {
        nodeClick.on('click', () => {
            toggleSingleElementVisibility(nodeAffect);
            if (nodeAffect.is(':visible')) {
                nodeAffect.goTo();
            }
        });
    }

    return {
        getInfo,
        navigationListener
    };
})();

export { helpers };

