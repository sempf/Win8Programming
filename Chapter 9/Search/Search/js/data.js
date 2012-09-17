
(function () {
    "use strict";


    var dataArray = [
    {
        task: "Finish Chapter 1",
        complete: false
    },
    {
        task: "Get milk",
        complete: false
    },
    {
        task: "Check eyebrows",
        complete: false
    },
    {
        task: "Repair TARDIS",
        complete: true
    },
    {
        task: "Punt on 4th and 8",
        complete: false
    },
    {
        task: "Deck the halls with boughs of holly",
        complete: true
    },
    {
        task: "Let the spirit fingers jog my mind",
        complete: false
    }
    ];

    var publicMembers =
        {
            items: dataArray
        };
    WinJS.Namespace.define("SearchSample", publicMembers);

})();