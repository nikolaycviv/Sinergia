var helpers = (function() {
    var navigationShortcutHelper = function(node, selector) {
        node.addEventListener("click", function() {
            selector.scrollIntoView();
            window.scrollBy(0, -50);
        });
    };
    function navigationShortcut(array) {
        for (let [key, value] of array) {
            helpers.navigationShortcutHelper(key, value);
        }
    }
    var toggleVisibility = function(divsArray) { // to do
        for (let i = 0, len = divsArray.length; i < len; i++) {
            if (this.target == divsArray[i]) { // check
                if (divsArray[i].classList.contains('show')) {
                    divsArray[i].classList.remove('show');
                    divsArray[i].classList.add('hide');
                }
                else {
                    divsArray[i].classList.remove('hide');
                    divsArray[i].classList.add('show');
                }
            }
        }
    }
    return {
        navigationShortcut: navigationShortcut,
        navigationShortcutHelper: navigationShortcutHelper,
        toggleVisibility: toggleVisibility
    }
})();
