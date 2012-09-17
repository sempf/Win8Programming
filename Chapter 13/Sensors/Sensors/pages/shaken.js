// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var checkingShake, accelerometer;
    function itshook()
    {
        var field = document.getElementById("isitshaken");
        field.innerHTML="It shook!";
    }
    function getThePosition() {
        var position = accelerometer.getCurrentReading();
        if (position) {
            var x = reading.accelerationX.toFixed(2);
            var y = reading.accelerationY.toFixed(2);
            var z = reading.accelerationZ.toFixed(2);
    }
    WinJS.UI.Pages.define("/pages/shaken.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            accelerometer = Windows.Devices.Sensors.Accelerometer.getDefault();
            accelerometer.onreadingchanged = itshook;
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />
            /// <param name="viewState" value="Windows.UI.ViewManagement.ApplicationViewState" />
            /// <param name="lastViewState" value="Windows.UI.ViewManagement.ApplicationViewState" />

            // TODO: Respond to changes in viewState.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        }
    });
})();
