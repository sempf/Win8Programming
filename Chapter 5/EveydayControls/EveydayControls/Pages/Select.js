// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {
        var selectControl = document.getElementById("Controls");
        var newOption = document.createElement("OPTION");
        newOption.text = "Date Picker";
        newOption.value = "6";
        selectControl.add(newOption);

        var itemsDiv = document.getElementById("Items");
        for (var item in selectControl.all) {
            if (selectControl[item].innerText) {
                itemsDiv.innerHTML += selectControl[item].innerText + "<br />";
            }
        }
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Select.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
