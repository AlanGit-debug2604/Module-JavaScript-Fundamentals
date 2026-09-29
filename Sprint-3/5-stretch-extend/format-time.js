// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);
  if (hours >= 24) {
    return `${hours - 24}:${minutes} am +1`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${hours}:${minutes} am`;
}

const currentOutput = formatAs12HourClock("08:01");
const targetOutput = "8:01 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

const currentOutput3 = formatAs12HourClock("25:00");
const targetOutput3 = "1:00 am +1";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
);

console.log(formatAs12HourClock("08:01"));
console.log(formatAs12HourClock("23:55"));
console.log(formatAs12HourClock("25:01"));

//Two patches
//First hour input > 24, current algo is hours - 12 , e.g. 25-12 and print 13:00pm , rather than 1:00am (+1)
//to Define `hoursOfOneDay` = 24
//2 min input
//to Define
