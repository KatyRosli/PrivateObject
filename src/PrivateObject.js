const username = Symbol ("username");
const password = Symbol ("password");

const user = {
[username]: "johnted",
[password]: "This.123test",
age: 36,
};

console.log(user.username);