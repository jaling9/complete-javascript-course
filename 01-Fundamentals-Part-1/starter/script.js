/*
let js = "Amazing JavaScript";
if (js === "Amazing JavaScript")
    alert("JavaScript is fun!")

let js = "Amazing";
console.log(40 + 22);
let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let newV = 26;
let person = "Jonas";
let PI = 3.1415;
const personMarsh = "marshal";
console.log(personMarsh);

let myFirstJob = "researcher";
let myCurrentJob = "dataAnalysis";
let job1 = "researcher";
let job2 = "dataAnalysis
true;
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun)

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof "jonas");

console.log(typeof 23);

JavaScriptIsFun = "Yes!";
console.log(typeof JavaScriptIsFun)
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);

// var 是JavaScript声明的旧方式-->永远不要使用它
// var 是函数作用域的,let是块级作用域.
var age = 44;
age = 11;

let age = 44;
age = 11;

const birthYear = 1991;
birthYear = 1022; // 报错:常量不能修改
const job; // 报错:产量不能
lastName = "jialin"; // python就是这样的,不用声明变量类型
console.log(lastName);



let now = 2022;
const marshAge = now - 1995;
const saraAge = now - 2016;
console.log(marshAge, saraAge);
console.log(marshAge * 20, saraAge / 20, 2 ** 30);

const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 10;
x++; // x = x+1
x--; // x = x-1
x--;
console.log(x);

// 比较运算符
console.log(marshAge > saraAge);
console.log(saraAge >= 18);

const isFullAge = saraAge >= 18;
console.log(isFullAge);
console.log(now - saraAge > now - marshAge);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
console.log(((x + y) / 2) * (1 / 2));


// coding challenge <--
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("BMIMark is " + BMIMark, "BMIJohn is " + BMIJohn);


// 模板文字 // 类似Python的f{}用法
const firstName = "Marsh";
const job = "DataAnalysis";
const birthYear = 1995;
const year = 2022;

const marsh = "I'm " + firstName +",a "+(year-birthYear)+" years old "+ job +"!";
console.log(marsh);

const marshNew = `I'm ${firstName},a ${year-birthYear} years old ${job}! `;
console.log(marshNew);

console.log("String with \n\
multipe \n\
lines");

console.log(`String with 
multipe 
lines`);
*/

// if statement
const age = 17;
const isOldEnough = age >= 18;
const yearsLeft = 18- age;

if(isOldEnough) {
    console.log("Old enough! Sarah can start license 🚗");
}else {
    if (yearsLeft === 1){
        console.log(`Sarah is too young, Wati another ${yearsLeft} years :`);
    }
    console.log(`Sarah is too young, Wati another ${yearsLeft} year :`);
}

const birthYear = 1998;
if (birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);