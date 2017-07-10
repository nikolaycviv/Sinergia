"use strict";
/* global jQuery, main */
var helpers = (function() {
    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'fast');
            // return this; // for chaining...
        };
    })(jQuery);

    function divVisibility(divId = null, divs = main.nodes.divs) {
        var visibleDivId = null;

        if (visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        for (let i = 0, len = divs.length; i < len; i++) {
            divId = divs[i];
            if (visibleDivId === null) {
                divs.forEach(function(eachDiv) {
                    // eachDiv.classList.add('show');
                    eachDiv.addClass('show');
                });
                return;
            }
            if (visibleDivId === divId) {
                // divId.classList.add('show');
                // divId.classList.remove('hide');
                divId.addClass('show').removeClass('hide');
            } else {
                // divId.classList.remove('show');
                // divId.classList.add('hide');
                divId.removeClass('show').addClass('hide');
            }
        }
    };

    function toggleActive(node, arrayNodes = main.nodes.navDivs) {
        node.classList.add('navActive');
        for (let i = 0, len = arrayNodes.length; i < len; i++) {
            if (node != arrayNodes[i]) {
                arrayNodes[i].classList.remove('navActive');
            }
        }
    };

    function navigationListener(nodeClick, nodeAffect = null) {
        nodeClick.addEventListener('click', function(e) {
            helpers.divVisibility(nodeAffect);
            helpers.toggleActive(e.target);
            nodeAffect.goTo();
        });
    };

    return {
        divVisibility: divVisibility,
        toggleActive: toggleActive,
        navigationListener: navigationListener
    };
})();
