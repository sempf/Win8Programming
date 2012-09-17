﻿//// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
//// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
//// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//// PARTICULAR PURPOSE.
////
//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/html/swipeReveal.html", {
        ready: function (element, options) {
            revealTarget.addEventListener("MSPointerDown", mouseDown, false);
            revealTarget.addEventListener("MSPointerMove", mouseMove, false);
            revealTarget.addEventListener("MSPointerUp", mouseUp, false);

            // Set up GestureRecognizer to detect holds and cross slides
            gr = new Windows.UI.Input.GestureRecognizer();
            gr.gestureSettings = Windows.UI.Input.GestureSettings.hold |
            Windows.UI.Input.GestureSettings.holdWithMouse;

            gr.addEventListener("holding", onHolding);
        }
    });

    var gr;

    function mouseDown(e) {
        // Get the current PointerPoint
        var pp = e.currentPoint;

        // Feed PointerPoint to GestureRecognizer
        gr.processDownEvent(pp);

        // Make sure all events from now on for this contact id
        // are captured to the element it was invoked on
        e.currentTarget.msSetPointerCapture(e.pointerId);

        // Stops IE from stealing the rest of the pointer events from the app
        // and handling them itself (to do things like panning and zooming)
        e.msTouchAction = "none";
    }

    function mouseMove(e) {
        // Get intermediate PointerPoints
        var pps = e.intermediatePoints;

        // Feed GestureRecognizer
        gr.processMoveEvents(pps);
    }

    function mouseUp(e) {
        // Get current PointerPoint
        var pp = e.currentPoint;

        // Feed GestureRecognizer
        gr.processUpEvent(pp);
    }

    function onHolding(e) {
        if (e.holdingState === Windows.UI.Input.HoldingState.started) {
            swipeReveal(revealTarget);
        }
    }

    function swipeReveal(element) {
        // Use swipeReveal animation to move the item down then move back up.
        WinJS.UI.Animation.swipeReveal(element, { top: "15px", left: "0px" })
            .done(function () { WinJS.UI.Animation.swipeReveal(element, { top: "0px", left: "0px" }); });
    }
})();