// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var settings = Windows.Storage.ApplicationData.current.localSettings;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        WinJS.Application.onsettings = function (e) {
            e.detail.applicationcommands = {
                "settings": { title: "Settings", href: "/pages/settings.html" },
            };
            WinJS.UI.SettingsFlyout.populateSettings(e);
        };
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                //write a setting
                settings.values["theAnswer"] = 42;
                //read a setting
                var thatSetting = settings.values["theAnswer"];
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
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
    WinJS.Namespace.define("MyApp",{});
    app.start();
})();
