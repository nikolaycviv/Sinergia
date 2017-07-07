"use strict";
var helpers = (function() {
    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'fast');
            // return this; // for chaining...
        }
    })(jQuery);

    function divVisibility(divId) {
        var visibleDivId = null,
            divs = [main.nodes.aboutBlock, main.nodes.newsBlock, main.nodes.services, main.nodes.courses];

        if (visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }

        var divId;
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
    }

    return {
        divVisibility: divVisibility,
    }
})();
