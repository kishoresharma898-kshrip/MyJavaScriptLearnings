//JSON(JavaScript Object Notation) used to get party data.
//Consider the below JavaScript traditional object.
const jsObj = {
    software: "node.js",
    version: "24.11.0"
};
console.log(jsObj); //{ software: 'node.js', version: '24.11.0' }
console.log(jsObj.software); //node.js
console.log(jsObj["version"]); //24.11.0

//Converts js original/traditional object to JSON stringified object(i.e., JSON String).
const jsObjJSONified = JSON.stringify(jsObj); 

//In other words it converts whatever the js object into a string. And the items/characters are accessed using access braces("like this -> []"). See below from examples.
//An array of items or any other JS Data Structures can be stringified. See the below example.
const arr = [1, 2, 3];
console.log(arr); //[1, 2, 3]
const arrJSONified = JSON.stringify(arr);
console.log(arrJSONified); //"[1, 2, 3]"

console.log(jsObjJSONified); //'{"software":"node.js","version":"24.11.0"}'
console.log(jsObjJSONified["software"]); //undefined

//Uncomment the below line to Observe the error thrown
//console.log(jsObjJSONified[software]); //ReferenceError: software is not defined

console.log(jsObjJSONified.software); //undefined
console.log(jsObjJSONified["version"]); //undefined
console.log(jsObjJSONified.version); //undefined

//Accessing JSON string characters jsObjJSONified
console.log(jsObjJSONified[0]); //{
console.log(jsObjJSONified[1]); //"
console.log(jsObjJSONified[2]); //s

//Converts JSON stringified object(i.e., JSON string) into original/traditional js object
const jsObjComeBack = JSON.parse(jsObjJSONified); //JSON string needs to be passed into parse() method.
console.log(jsObjComeBack); //{ software: 'node.js', version: '24.11.0' }
console.log(jsObjComeBack["software"]); //node.js
console.log(jsObjComeBack.version); //24.11.0

//Note: You can do this in the other way like declaring a JSON object(string) as '{"software":"node.js","version":"24.11.0"}' and convert it into traditional js object using the built-in JSON's parse() method.
/*Limitations:
1. While a plain js oject can hold functions(methods), JSON strings cannot hold the methods.
2. Valid JSON doesn't allow the use of JavaScript comments.
3. When you stringify a js object containing a method(s), that/those method(s) will be excluded from the stringify operation.*/