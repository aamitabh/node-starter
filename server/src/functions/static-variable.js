// Since JavaScript (or TypeScript) doesn't have function statics
// you can achieve the same thing using various abstractions that
//wrap over a local variable e.g. using a class:
var called = (new /** @class */ (function () {
    function class_1() {
        var _this = this;
        this.count = 0;
        this.called = function () {
            _this.count++;
            console.log("Called : " + _this.count);
        };
    }
    return class_1;
}())).called;
called(); // Called : 1
called(); // Called : 2
