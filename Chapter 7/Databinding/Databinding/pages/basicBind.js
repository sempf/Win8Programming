// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var testing = { testvalue: 7 }
    var testingSource = WinJS.Binding.as(testing);
    WinJS.UI.Pages.define("/pages/basicBind.html", {
        ready: function (element, options) {
            var incrementButton = document.getElementById("increment");
            increment.addEventListener("click", incrementValue);
            var placeToPutText = document.getElementById("PlaceToPutText");
            placeToPutText.addEventListener("change", updateData);
            WinJS.Binding.processAll(placeToPutText, testingSource);
        }
    });
    function incrementValue() {
        testingSource.testvalue++;
    }
    function updateData() {
        var placeToPutText = document.getElementById("PlaceToPutText");
        testingSource.testvalue = placeToPutText.value;
    }
})();
