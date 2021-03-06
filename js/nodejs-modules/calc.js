var Calc = function (start) {
    var self = this;

    this.add = function(x) {
        start+=x;
        return self;
    };

    this.multiply = function(x) {
        start *= x;
        return self;
    };

    this.equals = function(callback) {
        callback(start);
        return self;
    }
};

// module.exports = Calc;

module.exports = {
    add: function(x, y) {
        return new Calc(x).add(y || 0);
    },
    multiply: function(x, y) {
        return new Calc(x).multiply(y || 0);
    }
};