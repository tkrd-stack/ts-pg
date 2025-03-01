// base
var isString;
var age;
var fullName;
var bigNumber;
var uniqueValue;
var notDefined;
var empty;
// sepcific
var a = 100;
console.log(a * 3);
a.toFixed(2);
var b = 100;
console.log(b * 3); // error
b.toFixed(2); // error
var value;
value = 100;
value = 'Hello';
var value2;
value2 = true;
// array
var list1 = [1, 2, 3];
var list = ['a', 'b', 'c'];
//readonly
var numbers = [1, 2, 3, 4, 5];
numbers[3] = 1;
var strings = ['hello', 'hi'];
strings[0] = 'good';
// tuple
var tuple;
tuple = ['hello', 100];
tuple = [100, 'hello'];
tuple = ['hello', 100, true];
//object
var obj;
var obj2;
obj = { name5: 'hayashi', age5: 54 };
obj2 = { name6: 'takashi', age6: 13 };
// index signature
var obj4;
obj4 = { key1: 1, key2: 2 };
console.log(obj4['key1']);
var obj5;
// shorthand property names
var name1 = 'hakase';
var age1 = 12;
var obj6 = {
    name1: name1,
    age1: age1,
};
console.log(obj);
// option property
var obj3;
obj3 = { name: 'nami' };
obj3 = { name: 'tesra' };
// optional chain
function getLength(obj) {
    var _a;
    return (_a = obj.a) === null || _a === void 0 ? void 0 : _a.length;
}
getLength({ a: 'hello' });
// map
var map;
map = new Map();
map.set('name', 'jj');
map.set('age', 23);
console.log(map);
var people = new Map();
people.set('string', 234);
// set
var set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
// enum
var week;
(function (week) {
    week[week["Sunday"] = 0] = "Sunday";
    week[week["Monday"] = 1] = "Monday";
    week[week["Tuesday"] = 2] = "Tuesday";
    week[week["Wednesday"] = 3] = "Wednesday";
    week[week["Thursday"] = 4] = "Thursday";
    week[week["Friday"] = 5] = "Friday";
    week[week["Saturday"] = 6] = "Saturday";
})(week || (week = {}));
var weekJp;
(function (weekJp) {
    weekJp["Sunday"] = "\u65E5\u66DC\u65E5";
    weekJp["Monday"] = "\u6708\u66DC\u65E5";
    weekJp["Tuesday"] = "\u706B\u66DC\u65E5";
    weekJp["Wednesday"] = "\u6C34\u66DC\u65E5";
    weekJp["Thursday"] = "\u6728\u66DC\u65E5";
    weekJp["Friday"] = "\u91D1\u66DC\u65E5";
    weekJp["Saturday"] = "\u571F\u66DC\u65E5";
})(weekJp || (weekJp = {}));
var weekEn;
(function (weekEn) {
    weekEn[weekEn["Sunday"] = 0] = "Sunday";
    weekEn[weekEn["Monday"] = 3] = "Monday";
    weekEn[weekEn["Tuesday"] = 4] = "Tuesday";
    weekEn[weekEn["Wednesday"] = 5] = "Wednesday";
    weekEn[weekEn["Thursday"] = 6] = "Thursday";
    weekEn[weekEn["Friday"] = 7] = "Friday";
    weekEn[weekEn["Saturday"] = 8] = "Saturday";
})(weekEn || (weekEn = {}));
console.log(week.Sunday);
console.log(weekJp.Sunday);
console.log(weekEn.Sunday);
console.log(weekEn.Monday);
