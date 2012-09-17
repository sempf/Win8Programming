// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        //Get a reference to the HTML control
        var rate = document.getElementById("rating").winControl;
        //Amazon has a max of 5 stars
        rate.maxRating = 5;
        //The current communuity rating is 3.8
        rate.averageRating = 3.8;
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Ratings.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
