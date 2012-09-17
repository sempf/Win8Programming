// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
    Debug.enableFirstChanceException = true;
    var app = WinJS.Application;
    var theButton;
    function updateTile(textNotification) {
        var tileTemplate = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(Windows.UI.Notifications.TileTemplateType.tileWideText01);

        var tileTextAttributes = tileTemplate.getElementsByTagName("text");
        tileTextAttributes[0].appendChild(tileTemplate.createTextNode("Yay for Dummies!"));
        tileTextAttributes[1].appendChild(tileTemplate.createTextNode("Windows"));
        tileTextAttributes[2].appendChild(tileTemplate.createTextNode("App"));
        tileTextAttributes[3].appendChild(tileTemplate.createTextNode("Development"));

        //var tileImageAttributes = tileTemplate.getElementsByTagName("image");
        //tileImageAttributes[0].setAttribute("src", "ms-appx:///images/Logo.png");

        var tileNotification = new Windows.UI.Notifications.TileNotification(tileTemplate);
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    }
    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {

                Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);
                Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().clear();

                theButton = document.getElementById("actionButton")
                theButton.addEventListener("click", function (e) {
                    var today = new Date();
                    updateTile(today);
                });

            } 
            WinJS.UI.processAll().done(function (e) {
                var today = new Date();
                updateTile(today);
            });
        }
    };

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
