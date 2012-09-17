// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        document.getElementById("slider").addEventListener('change', sliderChanged, false);
    }
    function sliderChanged() {
        document.getElementById("percentComplete").innerHTML = document.getElementById("slider").value;
    }
    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Slider.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
