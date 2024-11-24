/**
 * Non-optimized solution.
 * Iterate through the data and sorts all values ​​to calculate the median.
 */
const solution1 = (expenses) => {
  //   const allExpenses2 = expenses.forEach(month => {
  //     if (month) {

  //     }
  //   });

  let allExpenses = [];

  for (const month in expenses) {
    if (expenses.hasOwnProperty(month)) {
      let firstSunday = new Date(`${month}`);
      let day = firstSunday.getDay();
      let daysToNextSun = day !== 0 ? 7 - day : 0;
      firstSunday.setDate(firstSunday.getDate() + daysToNextSun);

      for (const day in expenses[month]) {
        if (expenses[month].hasOwnProperty(day)) {
          const date = new Date(`${month}-${day}`);

          // console.log("date", date);
          //   console.log("date.getDate()", date.getDate());
          //   console.log("firstSunday.getDate()", firstSunday.getDate());

          // console.log("date.getDay()", date.getDay());

          // 1. zdobyć pierwszy tydzień danego miesiaca
          // zobaczyc co to jest date - czy to jest dzen czy miesiac
          // 2. zrobić pętle for przez pierwszy tydzien z break gdy dzień osiagnie day === 0
          // 3. wykonać czynność dla dni do 0 włącznie

          // testy:
          // [4,5,6,0] - 8.24
          // [0] - 9.24
          // [2,3,4,5,6,0] - 10.24
          // [5,6,0] - 11.24

          if (date.getDate() <= firstSunday.getDate()) {
            const categories = expenses[month][day];
            for (const category in categories) {
              if (categories.hasOwnProperty(category)) {
                allExpenses = allExpenses.concat(categories[category]);
              }
            }
          }
        }
      }
    }
  }

  if (allExpenses.length === 0) {
    return null;
  }

  allExpenses.sort((a, b) => a - b);
  const mid = Math.floor(allExpenses.length / 2);
  return allExpenses.length % 2 === 0
    ? (allExpenses[mid - 1] + allExpenses[mid]) / 2
    : allExpenses[mid];
};

const solution2 = (expenses) => {
  let allExpenses = [];

  for (const month in expenses) {
    if (expenses.hasOwnProperty(month)) {
      for (const day in expenses[month]) {
        if (expenses[month].hasOwnProperty(day)) {
          const date = new Date(`${month}-${day}`);
          if (date.getDate() <= 7 && date.getDay() === 0) {
            const categories = expenses[month][day];
            for (const category in categories) {
              if (categories.hasOwnProperty(category)) {
                allExpenses = allExpenses.concat(categories[category]);
              }
            }
          }
        }
      }
    }
  }

  if (allExpenses.length === 0) {
    return null;
  }

  function quickSelect(arr, k) {
    if (arr.length <= 1) {
      return arr[0];
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const lows = arr.filter((el) => el < pivot);
    const highs = arr.filter((el) => el > pivot);
    const pivots = arr.filter((el) => el === pivot);

    if (k < lows.length) {
      return quickSelect(lows, k);
    } else if (k < lows.length + pivots.length) {
      return pivots[0];
    } else {
      return quickSelect(highs, k - lows.length - pivots.length);
    }
  }

  const n = allExpenses.length;
  if (n % 2 === 1) {
    return quickSelect(allExpenses, Math.floor(n / 2));
  } else {
    const left = quickSelect(allExpenses, n / 2 - 1);
    const right = quickSelect(allExpenses, n / 2);
    return (left + right) / 2;
  }
};

// Handlers to run solutions
function runSolution1() {
  const result = solution1(expensesMore);
  document.getElementById(
    "result"
  ).textContent = `Solution 1 Result: ${result}`;
}

function runSolution2() {
  const result = solution2(expenses);
  document.getElementById(
    "result"
  ).textContent = `Solution 2 Result: ${result}`;
}

function firstSunday(month, year) {
  let tempDate = new Date();
  tempDate.setHours(0, 0, 0, 0);
  tempDate.setMonth(month);
  tempDate.setYear(year);
  tempDate.setDate(1);

  console.log("tempDate", tempDate);

  let day = tempDate.getDay();
  let toNextSun = day !== 0 ? 7 - day : 0;

  console.log("toNextSun", toNextSun);

  tempDate.setDate(tempDate.getDate() + toNextSun);

  console.log(tempDate.toDateString());
}

const check = () => {
  firstSunday(10, 2024);
};

module.exports = { solution1, solution2 };
