(function () {
    'use strict';

    WinJS.Namespace.define("Food.Vegtables", {
        Apple: WinJS.Class.define(
            //Constructor
            function (name) {
                this.name = name;
            },
            //Instance Members
            {
                color: "",
                flavor: ""
            },
            //Static Members
            {
                yummy: true
            }
        ),
        Bananna: WinJS.Class.define(
            //Constructor
            function (name) {
                this.name = name;
            },
            //Instance Members
            {
                color: "",
                flavor: ""
            },
            //Static Members
            {
                yummy: false
            }
        )
    });
})();