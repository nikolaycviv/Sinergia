"use strict";
/* global main */
var helpers = (function() {
    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: `${$(this).offset().top}px`
            }, 'fast');
            // return this; // for chaining...
        };
    })(jQuery);

    /**
     * @param  {number} divId=null
     * @param  {array} divs=main.nodes.divs
     * @returns {void}
     */
    function divVisibility(divId = null, divs = main.nodes.divs) {
        var div = '',
            visibleDivId = null;

        if (visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        for (let i = 0, len = divs.length; i < len; i++) {
            div = divs[i];
            if (visibleDivId === null) {
                divs.forEach((eachDiv) => {
                    // eachDiv.classList.add('show');
                    eachDiv.addClass('show');
                });
                return;
            }
            if (visibleDivId === div) {
                // divId.classList.add('show');
                // divId.classList.remove('hide');
                div.addClass('show').removeClass('hide');
            } else {
                // divId.classList.remove('show');
                // divId.classList.add('hide');
                div.removeClass('show').addClass('hide');
            }
        }
    }

    /**
     * @param  {object} node=*selected node*
     * @param  {array} arrayNodes=main.nodes.navDivs
     * @returns {void}
     */
    function toggleActive(node, arrayNodes = main.nodes.navDivs) {
        node.classList.add('navActive');
        for (let i = 0, len = arrayNodes.length; i < len; i++) {
            if (node !== arrayNodes[i]) {
                arrayNodes[i].classList.remove('navActive');
            }
        }
    }

    /**
     * @param  {object} nodeClick=*clicked node*
     * @param  {object} nodeAffect=null
     * @returns {void}
     */
    function navigationListener(nodeClick, nodeAffect = null) {
        nodeClick.addEventListener('click', (e) => {
            helpers.divVisibility(nodeAffect);
            helpers.toggleActive(e.target);
            nodeAffect.goTo();
        });
    }

    return {
        divVisibility: divVisibility,
        navigationListener: navigationListener,
        toggleActive: toggleActive
    };
})();
