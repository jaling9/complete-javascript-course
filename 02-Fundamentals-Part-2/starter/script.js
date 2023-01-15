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

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

回到两支体操队，海豚队和考拉队！ 有一门新的体操学科，其运作方式有所不同。
每队比赛3次，然后计算3次得分的平均值（所以每队一个平均分）。
如果一个团队的平均得分至少是另一个团队的两倍，则该团队才会获胜。 否则，没有团队获胜！

1.创建一个箭头函数'calcAverage'来计算3个分数的平均值
2. 使用函数计算两队的平均值
3. 创建函数“checkWinner”，将每支队伍的平均分作为参数（“avgDolhins”和“avgKoalas”），
  然后根据上述规则将获胜者连同胜利点数记录到控制台。 示例：“考拉获胜（30 比 13）”。
4. 使用“checkWinner”函数确定 DATA 1 和 DATA 2 的获胜者。
5. 这次忽略平局。

测试数据 1：海豚得分 44、23 和 71。考拉得分 65、54 和 49
测试数据 2：海豚得分 85、54 和 41。考拉得分 23、34 和 27

提示：要计算 3 个值的平均值，将它们加在一起并除以 3
提示：要检查数字 A 是否至少是数字 B 的两倍，请检查 A >= 2 * B。将此应用于团队的平均得分😉

祝你好运
*/


const calcAverage = (a,b,c) => (a+b+c)/3;
//console.log(calcAverage(3,4,5));
const averageGymnasticsData1 = calcAverage(44,23,71);
const averageDolphinsData1 = calcAverage(65,54,49);
const averageDolphinsData2 = calcAverage(85,54,41);
const averageGymnasticsData2 = calcAverage(23,34,27);

const checkWinner = function (x,y) {
  const GymnasticsWinner = x > y*2;
  const DolphinsWinner = x < y/2;
  if (GymnasticsWinner) {
      console.log(`考拉获胜🏆(${x}比${y})`);
  }else if (DolphinsWinner) {
    console.log(`海豚获胜🏆(${x}比${y})`);
  }else{
    console.log("没人获胜!");
  };
} 

checkWinner(averageGymnasticsData1,averageDolphinsData1);
checkWinner(averageGymnasticsData2,averageDolphinsData2);



// Test 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

//checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

////////////////////////////////////
/*
史蒂文仍在构建他的小费计算器，使用与以前相同的规则：如果账单价值在 50 到 300 之间，则小费为账单的 15%，如果价值不同，则小费为 20%。

1. 编写一个函数“calcTip”，将任何账单值作为输入并返回相应的小费，根据上述规则计算（如果需要，您可以查看第一个小费计算器挑战中的代码）。 使用您最喜欢的函数类型。 使用 100 的帐单价值测试函数。
2. 现在让我们使用数组！ 因此，创建一个包含以下测试数据的数组“bills”。
3. 创建一个数组“tips”，其中包含每张账单的小费值，根据您之前创建的函数计算得出。
4. 奖励：创建一个包含总值的数组“total”，即账单 + 小费。

测试数据：125、555 和 44

提示：请记住，数组的每个位置都需要一个值，而该值实际上可以是函数的返回值！ 所以你可以调用一个函数作为数组值（所以不要先将提示值存储在单独的变量中，而是在新数组中）😉

祝你好运😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

