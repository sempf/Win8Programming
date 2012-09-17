﻿(function () {
    "use strict";
    var backgroundTaskInstance = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current,cancel = false;

    function onCanceled(cancelSender, cancelReason) {
        cancel = true;
    }

    backgroundTaskInstance.addEventListener("canceled", onCanceled);

    function doWork() {
        var key = null, settings = Windows.Storage.ApplicationData.current.localSettings, primeHolder = "";
            primeFlag = true;
                primeFlag = false;
            }
                if ((number % Test) == 0) {
                    primeFlag = false;
                }
            }
                primeHolder = primeListHolder + number + " ";
        }
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