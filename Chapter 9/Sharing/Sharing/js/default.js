(function () {
    "use strict";

    var app = WinJS.Application;

    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView(); 
            dataTransferManager.addEventListener("datarequested", function (e) {
                e.request.data.properties.title = "Windows 8 Programming for Dummies.";
                e.request.data.setText("I'm reading the chapter on contracts, expecially sharing. This is my share example!");
            });
            WinJS.UI.processAll();
        }
    };

    app.start();
})();
