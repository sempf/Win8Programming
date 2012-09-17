// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.

    var id = function (elementID) {
        return document.getElementById(elementID);
    }

    function ready(element, options) {
        var numbers = [1,2,3,4,5];
        id('numberList').innerHTML = '<ul>';
        for (var x in numbers) {
            id('numberList').innerHTML += '<li>'+x+'</li>';
        }
        id('numberList').innerHTML += '<ul>';
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Div.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
