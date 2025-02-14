// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2038 - birthYear;
console.log();

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const temperatures = ["error", 3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// /////////////- merge 2 arrays
const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, "error", 9, 13, 17, 555, 14, 9, 5];
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
console.log(amplitudeNew);
