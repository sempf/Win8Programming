// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var mainImage, recognizer;
    var that = {};
    WinJS.strictProcessing();
    function changeOpacity() {
        if (mainImage.getAttribute("style") === "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50)") {
            mainImage.setAttribute(null, "style", "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100)");
        } else {
            mainImage.setAttribute(null, "style", "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50)");
        }
    }
    that.tappedHandler = function (evt) {
        evt.target.changeOpacity();
    };

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().then(function () {
                //Here is where the code goes, for now anyway.
                mainImage = document.getElementById("mainImage");
                recognizer = new Windows.UI.Input.GestureRecognizer();
                recognizer.gestureSettings = Windows.UI.Input.GestureSettings.tap;
                recognizer.addEventListener('tapped', that.tappedHandler);
            }));
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
