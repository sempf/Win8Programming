// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;
    var session;
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var client = new Microsoft.WindowsAzure.MobileServices.MobileServiceClient(
    "https://pointnotepad.azure-mobile.net/",
    "UQumkjaBjjGlgcmvDrrcLKKZtzcudr53");
    var bindingData;
    app.onactivated = function (args) {
        client.getTable("Notes").read().done(function (result) {
            bindingData = new WinJS.Binding.List(result);
            document.getElementById("SampleDataList").itemDataSource = bindingData;
        });
    };
    app.start();
})();
