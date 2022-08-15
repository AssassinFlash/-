// interface 和 type 类似，但不完全一样
var sayHi = function (message) {
    console.log(message);
};
var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: "dell",
    sex: "male",
    say: function () {
        return "hello";
    }
};
getPersonName(person); // 弱校验，只需满足有name即可
// getPersonName({name: 'dell', sex: 'male'}) // 对字面量类型是强校验，必须完全符合Person类型，否则报错
setPersonName(person, "jzh");
// 用类去应用接口，表示类必须具有接口的所有属性，否则报错
var User = /** @class */ (function () {
    function User() {
        this.name = "123";
    }
    User.prototype.say = function () {
        return "hello";
    };
    return User;
}());
