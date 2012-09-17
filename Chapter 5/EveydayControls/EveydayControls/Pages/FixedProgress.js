// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        var bar = document.getElementById("fixedProgress");
        var transfer = XmlHttpRequest({ url: "http://archive.org/download/groks509/groks122811.wav" })
        transfer.addEventListener("progress", updateProgress, false);
    }
    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/FixedProgress.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
