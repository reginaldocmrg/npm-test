System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Math2;
    return {
        setters:[],
        execute: function() {
            Math2 = (function () {
                function Math2() {
                }
                Math2.sum = function (num1, num2) {
                    return num1 + num2;
                };
                Math2.minus = function (num1, num2) {
                    return num1 - num2;
                };
                Math2.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                return Math2;
            }());
            exports_1("Math2", Math2);
        }
    }
});
//# sourceMappingURL=Math2.js.map