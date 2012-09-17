// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();
    var inkManager = new Windows.UI.Input.Inking.InkManager();
    function getPointerDeviceType(pId) {
        var pointerDeviceType;
        var pointerPoint = Windows.UI.Input.PointerPoint.getCurrentPoint(pId);
        switch (pointerPoint.pointerDevice.pointerDeviceType) {
            case Windows.Devices.Input.PointerDeviceType.touch:
                pointerDeviceType = "Touch";
                break;

            case Windows.Devices.Input.PointerDeviceType.pen:
                pointerDeviceType = "Pen";
                break;

            case Windows.Devices.Input.PointerDeviceType.mouse:
                pointerDeviceType = "Mouse";
                break;
            default:
                pointerDeviceType = "Undefined";
        }
        deviceMessage.innerText = pointerDeviceType;
        return pointerDeviceType;
    }
    function onPointerDown(evt) {
        pointerDeviceType = getPointerDeviceType(evt.pointerId);
        if ((pointerDeviceType === "Pen") || ((pointerDeviceType === "Mouse") && (evt.button === 1))) {
            if (pointerId === -1) {
                var current = evt.currentPoint;
                inkContext.beginPath();
                inkContext.lineWidth = strokeWidth;
                inkContext.strokeStyle = strokeColor;
                inkContext.moveTo(current.position.x, current.position.y);
                inkManager.processPointerDown(current);
                pointerId = evt.pointerId;
            }
        }
    }
    function onPointerMove(evt) {
        pointerDeviceType = getPointerDeviceType(evt.pointerId);
        if ((pointerDeviceType === "Pen") || ((pointerDeviceType === "Mouse") && (evt.button === 1))) {
            if (evt.pointerId === pointerId) {
                var current = evt.currentPoint;
                inkContext.lineTo(current.rawPosition.x, current.rawPosition.y);
                inkContext.stroke();
                inkManager.processPointerUpdate(current);
            }
        }
    }
    function onPointerUp(evt) {
        pointerDeviceType = getPointerDeviceType(evt.pointerId);
        if ((pointerDeviceType === "Pen") || ((pointerDeviceType === "Mouse") && (evt.button === 0))) {
            if (evt.pointerId === pointerId) {
                inkManager.processPointerUp(evt.currentPoint);
                inkContext.closePath();
                renderAllStrokes();
                pointerId = -1;
            }
        }
    }

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                inkCanvas = document.getElementById("Canvas");
                inkContext = inkCanvas.getContext("2d");
                inkCanvas.addEventListener("MSPointerDown", onPointerDown, false);
                inkCanvas.addEventListener("MSPointerMove", onPointerMove, false);
                inkCanvas.addEventListener("MSPointerUp", onPointerUp, false);
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
