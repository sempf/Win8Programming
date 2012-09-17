(function () {
    'use strict';

    var settings = Windows.Storage.ApplicationData.current.localSettings;
    var theAnswer;

    var getTheAnswer = function () {
        if (!theAnswer) {
            theAnswer = settings.values['theAnswer'];
        }
       return theAnswer;
    }

    var setTheAnswer = function (newValue) {
        if (theAnswer != newValue) {
            theAnswer = newValue;
            settings.values['theAnswer'] = theAnswer;
        }
    }

    WinJS.Namespace.defineWithParent(MyApp, 'Settings', {
        getTheAnswer: getTheAnswer,
        setTheAnswer: setTheAnswer
    });

});