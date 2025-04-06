const romanToInt = function (string) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let left = 0;

  for (let right = 1; left < string.length; ) {
    const current = romanValue[string[left]];
    const next = romanValue[string[right]];

    if (
      next &&
      (
        (string[left] === "I" && (string[right] === "V" || string[right] === "X")) ||
        (string[left] === "X" && (string[right] === "L" || string[right] === "C")) ||
        (string[left] === "C" && (string[right] === "D" || string[right] === "M"))
      )
    ) {
      result += next - current;
      left = right + 1;
      right = left + 1;
    } else {
      result += current;
      left++;
      right = left + 1;
    }
  }

  return result;
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
