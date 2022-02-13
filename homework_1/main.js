console.log("Hello, world! This method output message in console");

console.error("This method output an error message");

console.group();
console.warn("This message is grouped by the method console.group()");
console.log("This message is grouped by the method console.group()");
console.log("This message is grouped by the method console.group()");
console.groupEnd();

const msg = "Method console.count output the number of times call to string msg";

console.count(msg);
console.count(msg);
console.count(msg);
console.count(msg);
console.count(msg);

const body = document.body;
console.log("Method console.dir displays for me properties of object.");
console.dir(body);