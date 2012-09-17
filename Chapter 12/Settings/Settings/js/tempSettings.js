(function () {
    'use strict';

    var settings = Windows.Storage.ApplicationData.current.localSettings;
    var isUp, isDown, isBackward;
    var directionsContainer;

    function init() {
        //Initialize the container
        directionsContainer = localSettings.createContainer("directions", Windows.Storage.ApplicationDataCreateDisposition.Always);
        directionsContainer.values['isUp'] = false;
        directionsContainer.values['isDown'] = false;
        directionsContainer.values['isBackward'] = false;
    }
    function deleteContainer(){
        settings.deleteContainer("directions");
    }
    var getIsUp = function () {
        if (!isUp) {
            if (settings.containers.hasKey("directions"))
            {
                isUp = directionsContainer.values['isUp'];
            }
        }
        return isUp;
    }
    var setIsUp = function (newValue) {
        if (isUp != newValue) {
            isUp = newValue;
            if (settings.containers.hasKey("directions")) {
                directionsContainer.values['isUp'] = isUp;
            }
        }
    }
    var getIsDown = function () {
        if (!isDown) {
            if (settings.containers.hasKey("directions")) {
                isDown = directionsContainer.values['isDown'];
            }
        }
        return isUp;
    }
    var setIsDown = function (newValue) {
        if (isDown != newValue) {
            isDown = newValue;
            if (settings.containers.hasKey("directions")) {
                directionsContainer.values['isDown'] = isDown;
            }
        }
    }
    var getIsBackward = function () {
        if (!isBackward) {
            if (settings.containers.hasKey("directions"))
            {
                isBackward = directionsContainer.values['isBackward'];
            }
        }
        return isUp;
    }
    var setIsBackward = function (newValue) {
        if (isBackward != newValue) {
            isBackward = newValue;
            if (settings.containers.hasKey("directions")) {
                directionsContainer.values['isBackward'] = isBackward;
            }
        }
    }
    WinJS.Namespace.defineWithParent(MyApp, 'TempSettings', {
        init: init,
        getIsUp: getIsUp,
        setIsUp: setIsUp,
        getIsDown: getIsDown,
        setIsDown: setIsDown,
        getIsBackward: getIsBackward,
        setIsBackward: setIsBackward
    });

});