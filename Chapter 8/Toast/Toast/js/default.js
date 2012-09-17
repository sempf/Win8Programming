// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                //Schedule a Notification

                var template = Windows.UI.Notifications.ToastTemplateType.toastImageAndText01;
                var toastXml = Windows.UI.Notifications.ToastNotificationManager.getTemplateContent(template);

                var toastTextElements = toastXml.getElementsByTagName("text");
                toastTextElements[0].appendChild(toastXml.createTextNode("There is a new message from a Dummy."));

                var toastImageElements = toastXml.getElementsByTagName("image");
                toastImageElements[0].setAttribute("src", "ms-appx:///images/logo.png");

                var currentTime = new Date();
                var startTime = new Date(currentTime.getTime() + 1000);

                var recurringToast = new Windows.UI.Notifications.ScheduledToastNotification(toastXml, startTime, 60 * 1000, 5);
                recurringToast.id = "Dummy_Note";

                var toastNotifier = Windows.UI.Notifications.ToastNotificationManager.createToastNotifier();
                var setting = toastNotifier.setting;
                if (setting == Windows.UI.Notifications.NotificationSetting.enabled) {
                    toastNotifier.addToSchedule(recurringToast);
                }
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

    app.start();
})();
