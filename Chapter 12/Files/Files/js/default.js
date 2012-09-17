// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();
    var tasksFile;
    var todayArray = [
{
    task: "Batten down the hatches with much love and affection",
    complete: false,
},
{
    task: "Remember the Alamo",
    complete: false,
},
{
    task: "Drink beer",
    complete: false,
}
    ];
    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

                Windows.Storage.FileIO.readTextAsync(sampleFile).then(function (contents) {
                    todayArray = JSON.parse(contents)
                });
            } 
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        Windows.Storage.KnownFolders.documentsLibrary.createFileAsync("POINTtodo.tasks",
            Windows.Storage.CreationCollisionOption.replaceExisting).done(function (file) {
                tasksFile = file;
            });
        Windows.Storage.FileIO.writeTextAsync(tasksFile, JSON.stringify(todayArray)).done();
    };

    app.start();
})();
