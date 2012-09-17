// For an introduction to the HTML Fragment template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var dataArray, todayList, dataList;

    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    function ready(element, options) {

        todayList = document.getElementById('todayList');

        dataArray = [
            {
                task: "Finish Chapter 1",
                complete: false
            },
            {
                task: "Get milk",
                complete: false
            },
            {
                task: "Check eyebrows",
                complete: false
            },
            {
                task: "Repair TARDIS",
                complete: true
            },
            {
                task: "Punt on 4th and 8",
                complete: false
            },
            {
                task: "Deck the halls with boughs of holly",
                complete: true
            },
            {
                task: "Let the spirit fingers jog my mind",
                complete: false
            }
        ]
        dataList = new WinJS.Binding.List(dataArray);
    }

    function updateLayout(element, viewState) {
        // TODO: Respond to changes in viewState.
    }

    WinJS.UI.Pages.define("/Pages/Checkbox.html", {
        ready: ready,
        updateLayout: updateLayout,
        dataList: dataList
    });
})();
