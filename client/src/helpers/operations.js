const arithmetic = (operation, num1, num2) => {
  if (operation === 'add') return num1 + num2;
  else if (operation === 'subtract') return num1 - num2;
  else if (operation === 'multiply') return num1 * num2;
  else if (operation === 'divide') return num1 / num2;
};

const percentage = num => {
  return num / 100;
};

module.exports = {
  arithmetic,
  percentage,
};
