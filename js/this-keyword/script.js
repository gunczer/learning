// "use strict";

function foo() {
    console.log(this.bar); // stict mode undefined, non strict mode bar1
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo();   // "bar1"
o2.foo(); // "bar2"
o3.foo(); // "bar3"
