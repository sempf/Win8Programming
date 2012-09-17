// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        var datePicker = document.getElementById("setTheDate")
        datePicker.datePattern = "{day.integer(2)} ({dayofweek.abbreviated})";
        datePicker.onchange = theDateChanged;

        function theDateChanged(event) {
            // do work
        }
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/DateAndTimePicker.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
