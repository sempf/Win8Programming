// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/firstpage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var nextPage = document.getElementById("nextPage");
            nextPage.addEventListener("click", transition, false);
            WinJS.UI.Animation.enterPage([[header],[main]], null);
        }
    });
    function transition() {
        WinJS.UI.Animation.exitPage([[header], [main]], null).done(
            function () {
                WinJS.Navigation.navigate("/pages/nextpage.html");
            });
    }
})();
