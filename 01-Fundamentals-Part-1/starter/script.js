
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


// coding challenge
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
}else {
    console.log(`John's BMI ${BMIJohn} is higher than John's!`);
}



// 手动类型转换和隐式类型转换
const inputYear = "2000";
console.log(Number(inputYear)+18);
console.log(inputYear+18); 

console.log(Number("Marsh")); 

// 隐式类型转换
console.log("I'm " + 23 + " years old!");
console.log("I'm " + "23" + " years old!");
console.log("23" + "22" -3);
console.log("23" - "22" -3);
console.log("23"*"22");



// flase值只有5个 --> 0,"",undefinded,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if(money){
    console.log("Dont't spend it all ;");
}else {
    console.log("You should get a job!");
}

let height = 0;
if(height){
    console.log("YAY! Height is defined!");
}else{
    console.log("Height is undefinded!");
}


23
// 相等运算符
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict) "); // 严格相等
if (age == 18) console.log("You just became an adult :D (loose)"); // 

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log("Cool! 23 is an amazing number!");
}else if(favourite === 7){
    console.log("7 is also a cool number!");
}else {
    console.log("Number is not 23 or 7");
}



const isDriverLicense = true; // A 
const hasGoodVision = false; // B 

console.log(hasGoodVision && isDriverLicense)
console.log(hasGoodVision || isDriverLicense)
console.log(!hasGoodVision)

if (isDriverLicense && hasGoodVision){
    console.log("萨拉可以开车!");

}else {
    console.log("该去学车了!");
}

const isTired = true; // C 
if(hasGoodVision && isDriverLicense && !isTired){
    console.log("你应该休息了!");
}

// ! --> not
// | --> or
// & --> and


// Switch case 语句 
const day = "Monday";

switch(day){
    case "Monday": // if day === "Monday" then
        console.log("Plan course structure");
        console.log("GO to cooding meetups");
        break;
    case "Tuesday": // if day === "Tuesday" then
        console.log("Prepare theory video");
        break;
    case "Wednesday": // if day === "Wednesday" then
    case "Thursday": // if day === "Thursday" then
        console.log("Write code example");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday": // if day === "Saturday" then
    case "Sunday": // if day === "Sunday" then
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}


// 三元运算符
// if / else 不能用在字符串模板里,但是三元运算符可以!!!!!
const age = 13;
age >= 18 ? console.log("我要喝酒"):
console.log("我不能喝酒");