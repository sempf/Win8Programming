// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;

    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize 
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension. 
                // Restore application state here.
            }
            WinJS.UI.processAll();
        }
    };

    var ptm = Windows.Media.PlayTo.PlayToManager.getForCurrentView();
    ptm.addEventListener("sourcerequested", sourceRequestHandler, false);

    function sourceRequestHandler(e) {
        try {
            var sr = e.sourceRequest;
            var controller;

            try {
                controller = mediaElement.msPlayToSource;
            } catch (ex) {
                id("messageDiv").innerHTML +=
                "msPlaytoSource failed: " + ex.message + "<br/>";
            }

            sr.setSource(controller);
        } catch (ex) {

            id("messageDiv").innerHTML +=
            "Exception encountered: " + ex.message + "<br/>";
        }
    }

    app.oncheckpoint = function (eventObject) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the 
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // eventObject.setPromise(). 
    };

    app.start();
})();
