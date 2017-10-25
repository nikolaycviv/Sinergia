/* global jQuery */
import {
    nodes
} from './nodes';
const helpers = (() => {
    (($) => {
        $.fn.goTo = () => {
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
        if (visibleDivId === div) {
            // divId.classList.add('show')
            // divId.classList.remove('hide')
            div.addClass('show').removeClass('hide');
        } else {
            // divId.classList.remove('show')
            // divId.classList.add('hide')
            div.removeClass('show').addClass('hide');
        }
    }

    /**
     * @param  {number} el -> element to toggle visible or not
     * @returns {void}
     */
    function toggleSingleElementVisibility(el) {
        if (el.style.display === '' || el.style.display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    /**
     * @param  {number} divId=null // *null or current divId to be visible*
     * @param  {array} divs=nodes.divs // *each to be visible or not*
     * @returns {void}
     */
    function divVisibility(divId, divs) {
        if (divId !== null) {
            for (let i = 0, len = divs.length; i < len; i += 1) {
                toggleElementVisibility(divId, divs[i]);
            }
        }
    }

    /**
     * @param  {object} node=*selected node*
     * @param  {array} arrayNodes=nodes.navDivs
     * @returns {void}
     */
    function toggleActive(node, arrayNodes = nodes.navDivs) {
        node.classList.add('navActive');
        for (let i = 0, len = arrayNodes.length; i < len; i += 1) {
            if (node !== arrayNodes[i]) {
                arrayNodes[i].classList.remove('navActive');
            }
        }
    }

    /**
     * @param  {object} nodeClick=*clicked node*
     * @param  {object} nodeAffect=*affected node*
     * @returns {void}
     */
    function navigationListener(nodeClick, nodeAffect = null) {
        nodeClick.addEventListener('click', (e) => {
            divVisibility(nodeAffect, nodes.divs);
            toggleActive(e.target);
            if (nodeAffect !== null) {
                nodeAffect.goTo();
            }
        });
    }

    /**
     * @param  {object} nodeClick=*clicked node*
     * @param  {object} nodeAffect=*affected node*
     * @returns {void}
     */
    function getInfo(nodeClick, nodeAffect) {
        nodeClick.addEventListener('click', () => {
            toggleSingleElementVisibility(nodeAffect);
        });
    }

    return {
        getInfo,
        navigationListener
    };
})();

export {
    helpers
};
