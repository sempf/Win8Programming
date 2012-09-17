// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/backgroundTransfer.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            try {
                Windows.Storage.KnownFolders.musicLibrary.createFileAsync(
                    'sample.mp3',
                    Windows.Storage.CreationCollisionOption.generateUniqueName
                ).done(function (file) {
                    var uri = Windows.Foundation.Uri('http://ia600609.us.archive.org/16/items/tpalmieri2012-06-30.akg481-sbd.flac16/tpalmieri2012-06-30t15.mp3');
                    var downloader = new Windows.Networking.BackgroundTransfer.BackgroundDownloader();

                    // Create a new download operation.
                    download = downloader.createDownload(uri, file);

                    // Start the download and persist the promise to be able to cancel the download.
                    promise = download.startAsync();
                });
            } catch (err) {
                console.log(err);
            }
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
