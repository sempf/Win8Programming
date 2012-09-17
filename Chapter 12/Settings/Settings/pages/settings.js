// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/settings.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            
            //var isUpToggle = document.getElementById('isUpToggle');
            //isUpToggle.checked = MyApp.TempSettings.getIsUp();
            //isUpToggle.addEventListener('onClick', function () {
            //    MyApp.TempSettings.setIsUp(isUpToggle.checked);
            //});
            var isDownToggle = document.getElementById('isDownToggle');
            isDownToggle.checked = MyApp.TempSettings.getIsDown();
            isDownToggle.addEventListener('onClick', function () {
                MyApp.TempSettings.setIsDown(isDownToggle.checked);
            });
            var isBackwardToggle = document.getElementById('isBackwardToggle');
            isBackwardToggle.checked = MyApp.TempSettings.getIsToggle();
            isBackwardToggle.addEventListener('onClick', function () {
                MyApp.TempSettings.setIsBackward(isBackwardToggle.checked);
            });
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />
            /// <param name="viewState" value="Windows.UI.ViewManagement.ApplicationViewState" />
            /// <param name="lastViewState" value="Windows.UI.ViewManagement.ApplicationViewState" />

            // TODO: Respond to changes in viewState.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        }
    });
    WinJS.UI.Pages.define("/pages/settings.html", {});
})();
