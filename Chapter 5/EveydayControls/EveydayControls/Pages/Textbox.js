// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var id = function (elementID) {
        return document.getElementById(elementID);
    }
    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        //Setting a textbox
        var firstTextbox = document.getElementById("Text1");
        firstTextbox.value = "Let's type!";
        //Getting from a textbox
        var secondTextbox = document.getElementById("Text2");
        var youTyped = document.getElementById("youTyped");
        var theButton = document.getElementById("Button1");
        theButton.addEventListener('click', function () {
            youTyped.innerHTML = secondTextbox.value;
        });
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Textbox.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
