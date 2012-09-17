// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    currentApp = Windows.ApplicationModel.Store.CurrentAppSimulator;
    licenseInformation = currentApp.licenseInformation;
    if (licenseInformation.productLicenses.lookup("motsFeature").isActive) {

        WinJS.UI.Pages.define("/mots.html", {
            ready: function (element, options) {
            },

        });
    }
})();
