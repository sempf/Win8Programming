(function () {
    "use strict";
    var backgroundTaskInstance = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current,cancel = false;

    function onCanceled(cancelSender, cancelReason) {
        cancel = true;
    }

    backgroundTaskInstance.addEventListener("canceled", onCanceled);

    function doWork() {
        var key = null, settings = Windows.Storage.ApplicationData.current.localSettings, primeHolder = "";        //Here is where our code goes that does the actual work        for (number = 1; number <= 1000; number++) {
            primeFlag = true;            maxTest = number / 2;            if ((number != 2) && ((number % 2) == 0)) {
                primeFlag = false;
            }            Test = 3;            while ((Test <= maxTest) && (primeFlag == true)) {
                if ((number % Test) == 0) {
                    primeFlag = false;
                }                Test = Test + 2;
            }            if (primeFlag == true) {
                primeHolder = primeListHolder + number + " ";            }
        }        //Now we just do a little housekeeping        key = backgroundTaskInstance.task.taskId.toString();
        settings.values[key] = "Succeeded";
        //Always call close when done
        close();
    }

    if (!cancel) {
        doWork();
    } else {
        // Let the app know we are cancelled.
        key = backgroundTaskInstance.task.taskId.toString();
        settings.values[key] = "Canceled";
        //Always call close when done
        close();
    }

})();