"use strict"; // 严格模式适应特殊模块和函数

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can Driver !");

/////////////////////////////////////////
//const interface = "Audio";


// fuction 函数
// 培训班就是填鸭式教育 讲变量就从头到尾讲变量 
// 讲几个小时 容易犯困 讲到后面也有的早忘记了 这个课程挺好 
// 讲变量时候中间穿插了一些语句应用起来 融会贯通 
// 等讲到语句时候语句也有印象
function logger () {
    console.log("My name is jonas!");
}

logger();

function fruitProcessor(apples,orange) {
    console.log(apples,orange);
    const juice = `我们用${apples}和${orange}生产果汁!`;
    console.log(juice)
    return juice;
}


const appleJuice = fruitProcessor("苹果","橘子");
console.log(appleJuice);


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);


///////////////////////////////////////
// Arrow functions箭头函数 =>lambda函数

const calcAge3 = birthYeah => 2037 - birthYeah;
console.log(`2037年我${calcAge3(1995)}岁!`);

const yearsUntilRetirement = birthYeah => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
}    

console.log(`还有${yearsUntilRetirement(1995)}年退休!`);


///////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
  }

console.log(fruitProcessor(2,3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));