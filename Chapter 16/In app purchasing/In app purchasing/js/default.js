// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                currentApp = Windows.ApplicationModel.Store.CurrentAppSimulator;
                licenseInformation = currentApp.licenseInformation;
                if (licenseInformation.productLicenses.lookup("motsFeature").isActive) {
                    document.getElementById('MOTS').onclick = AccessTheNewFeatureMethod();
                }
                else {
                    document.getElementById('MOTS').onclick = SendThemToTheStore();
                }
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    function SendThemToTheStore() {
        currentApp.requestProductPurchaseAsync("motsFeature").then(
            function () {
                // they bought it, turn it on
                document.getElementById('MOTS').onclick = AccessTheNewFeatureMethod();
            },
            function () {
                // They didn't buy it, feel free to play the sad trombone sound
            });
    }
    app.start();
})();
