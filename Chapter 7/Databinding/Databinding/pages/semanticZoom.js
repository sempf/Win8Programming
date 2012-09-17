// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var data = [
        { 'name': 'Castillo de Rumba', 'address': '334 Main Street', 'category': 'Italian' },
        { 'name': "Bob's Diner", 'address': '12 Town Street', 'category': 'Diner' },
        { 'name': 'Italian Feast', 'address': '503 Rich Street', 'category': 'Italian' },
        { 'name': 'Hamburger Palace', 'address': '44 State Street', 'category': 'American' },
        { 'name': 'Hot Dog Palace', 'address': '45 State Street', 'category': 'American' },
        { 'name': 'Taj Palace', 'address': '1337 Hacker Street', 'category': 'Indian' },
        { 'name': 'Spaghetti Warehouse', 'address': '10 Mound Street', 'category': 'Italian' },
        { 'name': 'Dal Restaurant', 'address': '994 Lambert Street', 'category': 'Indian' },
        { 'name': 'Sandwiches by Joe', 'address': '440 Main Street', 'category': 'Diner' },
        { 'name': 'Bar on Fifth', 'address': '12 Fifth Street', 'category': 'Diner' },
        { 'name': 'The Sub Shop', 'address': '229 E Broad Street', 'category': 'American' },
        { 'name': 'Foor Deng', 'address': '289 Main Street', 'category': 'Indian' },
        { 'name': 'Soups and More', 'address': '26 Columbus Street', 'category': 'American' },
        { 'name': 'Beer Shack', 'address': '12 Norton Street', 'category': 'Diner' },
        { 'name': 'House of Food', 'address': '998 Circle Street', 'category': 'American' },
    ]
    var dataList = new WinJS.Binding.List(data);

    function compareGroups(leftKey, rightKey) {
        return leftKey.charCodeAt(0) - rightKey.charCodeAt(0);
    }

    function getGroupKey(dataItem) {
        return dataItem.category;
    }

    function getGroupData(dataItem) {
        return {
            category: dataItem.category
        };
    }
    var groupedItemsList = dataList.createGrouped(getGroupKey, getGroupData, compareGroups);

    // Create the groups for the ListView from the item data and the grouping functions
    WinJS.UI.Pages.define("/pages/semanticZoom.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
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
