(function () {
    function getSettings() {
        var settings = "D";
    }
    WinJS.Namespace.defineWithParent(MyApp, 'Settings', {
        getSettings: getSettings,
    });
})();
//You CANNOT forget the closing ()