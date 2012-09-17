// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState === activation.ApplicationExecutionState.suspended) {
                // refresh any data from services or machine status or whatnot
            } else {
                if (args.setPromise) {
                    var currentState = new Object();
                    currentState = args.setPromise.stateObject;
                    //repopulate from state
                } else {
                    //First time run
                };
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        var currentState = new Object();
        currentState.page = 'videoPlayer.htm';
        currentState.video = 'MySummerVacation.wmv';
        currentState.secondsWatched = 385;
        app.sessionState.stateObject = currentState;
        args.setPromise(
            WinJS.xhr(
                {url: myBackendService, data: myDataObject}  
            )
        );
    };

    app.start();
})();
