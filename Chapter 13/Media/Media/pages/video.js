// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/video.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var oMediaCapture;
            var profile;
            var captureInitSettings;
            var deviceList = new Array();
            var recordState = false;
            var storageFile;



            function errorHandler(e) {
                sdkSample.displayStatus(e.message + ", Error Code: " + e.code.toString(16));
            }



            // Begin initialization.
            function initialization() {
                document.getElementById("message").innerHTML = "Initialization started.";
                enumerateCameras();
            }


            // Identify available cameras.
            function enumerateCameras() {
                var deviceInfo = Windows.Devices.Enumeration.DeviceInformation;
                deviceInfo.findAllAsync(Windows.Devices.Enumeration.DeviceClass.videoCapture).then(function (devices) {
                    // Add the devices to deviceList
                    if (devices.length > 0) {

                        for (var i = 0; i < devices.length; i++) {
                            deviceList.push(devices[i]);
                        }

                        initCaptureSettings();
                        initMediaCapture();
                        document.getElementById("message").innerHTML = "Initialization complete.";

                    } else {
                        sdkSample.displayError("No camera device is found ");
                    }
                }, errorHandler);
            }


            // Initialize the MediaCaptureInitialzationSettings.
            function initCaptureSettings() {
                captureInitSettings = null;
                captureInitSettings = new Windows.Media.Capture.MediaCaptureInitializationSettings();
                captureInitSettings.audioDeviceId = "";
                captureInitSettings.videoDeviceId = "";
                captureInitSettings.streamingCaptureMode = Windows.Media.Capture.StreamingCaptureMode.audioAndVideo;
                captureInitSettings.photoCaptureSource = Windows.Media.Capture.PhotoCaptureSource.videoPreview;
                captureInitSettings.realTimeModeEnabled = true;
                if (deviceList.length > 0)
                    captureInitSettings.videoDeviceId = deviceList[0].id;
            }


            // Create a profile.
            function createProfile() {
                profile = Windows.Media.MediaProperties.MediaEncodingProfile.createMp4(
                    Windows.Media.MediaProperties.VideoEncodingQuality.qvga);
            }

            // Create and initialze the MediaCapture object.
            function initMediaCapture() {
                oMediaCapture = null;
                oMediaCapture = new Windows.Media.Capture.MediaCapture();
                oMediaCapture.initializeAsync(captureInitSettings).then(function (result) {
                    createProfile();
                }, errorHandler);
            }


            // Start the video capture.
            function startMediaCaptureSession() {
                Windows.Storage.KnownFolders.videosLibrary.createFileAsync("cameraCapture.mp4", Windows.Storage.CreationCollisionOption.generateUniqueName).then(function (newFile) {
                    storageFile = newFile;
                    oMediaCapture.startRecordToStorageFileAsync(profile, storageFile).then(function (result) {

                    }, errorHandler);
                });
            }

            // Stop the video capture.
            function stopMediaCaptureSession() {
                oMediaCapture.stopRecordAsync().then(function (result) {

                }, errorHandler);
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
