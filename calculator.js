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
  if (sum === '0' && operator === '-') {
    sum = operator;
    formula = operator;
  } else if (sum == '0' && operator !== '-') {
    return null;
  } else if (operator === 'x') {
    sum = sum + 'x';
    formula = formula + '*';
  } else if (operator === '÷') {
    sum = sum + '÷';
    formula = formula + '/';
  } else if (operator === ',') {
    sum = sum + ',';
    formula = formula + '.';
  } else {
    sum = sum + operator;
    formula = formula + operator;
  }
  document.getElementById('screen').innerHTML = sum;
};

const operatorSearch = () => {
  const operatorArr = ['-', '+', '/', '*'];
  let lastOperator = 0;
  for (let index = 0; index < operatorArr.length; index++) {
    let search = formula.lastIndexOf(operatorArr[index]);
    if (search >= lastOperator) {
      lastOperator = search;
    }
  }
  return lastOperator;
};

const Percentage = () => {
  if (sum == '0') {
    return null;
  }
  let numIndex = operatorSearch() + 1;
  let percentage = formula.slice(numIndex) / 100;
  formula = formula.slice(0, numIndex) + percentage;
  sum = sum.slice(0, numIndex) + percentage;
  document.getElementById('screen').innerHTML = sum;
};

function negativeNum() {
  if (sum == '0') {
    return null;
  }
  let numIndex = operatorSearch() + 1;
  let endPart = formula.slice(numIndex);
  if (numIndex === 1) {
    formula = '(-' + formula + ')';
    sum = '(-' + sum + ')';
  } else {
    formula = formula.slice(0, numIndex) + '(-' + endPart + ')';
    sum = sum.slice(0, numIndex) + '(-' + endPart + ')';
  }
  document.getElementById('screen').innerHTML = sum;
}

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
