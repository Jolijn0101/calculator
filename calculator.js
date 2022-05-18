let sum = '0';
let formula;

const addNumber = (number) => {
  if (sum.length >= 15) {
    return null;
  }

  if (sum === '0') {
    sum = number.toString();
    formula = number.toString();
  } else {
    sum = sum + number.toString();
    formula = formula + number.toString();
  }
  document.getElementById('screen').innerHTML = sum;
};

const addOperator = (operator) => {
  if (sum.length >= 15) {
    return null;
  }

  if (sum === '0') {
    sum = operator;
    formula = operator;
  } else if (operator === 'x') {
    sum = sum + 'x';
    formula = formula + '*';
  } else if (operator === '÷') {
    sum = sum + '÷';
    formula = formula + '/';
  } else {
    sum = sum + operator;
    formula = formula + operator;
  }
  document.getElementById('screen').innerHTML = sum;
};

const negativeNum = () => {};

const Clear = () => {
  sum = '0';
  document.getElementById('screen').innerHTML = sum;
};

const Answer = () => {
  try {
    let answer = eval(formula);
    sum = answer.toString();
    document.getElementById('screen').innerHTML = sum;
  } catch (e) {
    if (e instanceof SyntaxError) {
      document.getElementById('screen').innerHTML = 'Error';
    }
  }
};
