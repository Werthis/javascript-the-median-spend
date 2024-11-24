const { solution1, solution2 } = require("./app");

const expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "08": {
      food: [12.5, 18.9],
      fuel: [180],
    },
  },
  "2023-02": {
    "05": {
      food: [15, 25.5, 30],
      fuel: [120, 150],
    },
  },
  "2023-04": {
    "02": {
      food: [15.25, 35.5],
      fuel: [300],
    },
  },
  "2023-05": {
    "07": {
      food: [10.5, 20.75],
      fuel: [60],
    },
  },
  "2023-06": {}, // No expenses in this month
};

describe("Solution 1 and Solution 2", () => {
  test("Solution 1 returns correct median", () => {
    expect(solution1(expenses)).toBe(25.5); // Median of [22.11, 43, 11.72, ..., 25.5, ...]
  });

  test("Solution 2 returns correct median", () => {
    expect(solution2(expenses)).toBe(25.5); // Should match Solution 1
  });

  test("Both solutions return null when no expenses exist", () => {
    const emptyExpenses = {};
    expect(solution1(emptyExpenses)).toBeNull();
    expect(solution2(emptyExpenses)).toBeNull();
  });

  test("Both solutions handle single value correctly", () => {
    const singleValueExpenses = {
      "2023-01": {
        "01": {
          food: [50],
        },
      },
    };
    expect(solution1(singleValueExpenses)).toBe(50);
    expect(solution2(singleValueExpenses)).toBe(50);
  });

  test("Both solutions handle even number of values correctly", () => {
    const evenExpenses = {
      "2023-01": {
        "01": {
          food: [10, 20, 30, 40],
        },
      },
    };
    expect(solution1(evenExpenses)).toBe(25); // Median of [10, 20, 30, 40]
    expect(solution2(evenExpenses)).toBe(25);
  });

  test("Both solutions handle odd number of values correctly", () => {
    const oddExpenses = {
      "2023-01": {
        "01": {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(20); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(20);
  });

  test("Warosci z pozniejszych dni miesiaca", () => {
    const oddExpenses = {
      "2023-01": {
        10: {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(null); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(null);
  });

  test("2024-11-01", () => {
    const oddExpenses = {
      "2024-11": {
        "01": {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(20); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(20);
  });

  test("2024-11-02", () => {
    const oddExpenses = {
      "2024-11": {
        "02": {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(20); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(20);
  });

  test("2024-11-03", () => {
    const oddExpenses = {
      "2024-11": {
        "03": {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(20); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(20);
  });
  
  test("2024-11-04", () => {
    const oddExpenses = {
      "2024-11": {
        "04": {
          food: [10, 20, 30],
        },
      },
    };
    expect(solution1(oddExpenses)).toBe(20); // Median of [10, 20, 30]
    expect(solution2(oddExpenses)).toBe(20);
  });
});
