let sum = '0';
let formula;

//==adds number to the sum and formula string==
function addNumber(number) {
  //if the sum has only '0' replace for current number else place the number at the end of string
  if (sum === '0') {
    sum = number.toString();
    formula = number.toString();
  } else {
    sum = sum + number.toString();
    formula = formula + number.toString();
  }
  //writes new sum to the screen
  document.getElementById('screen').innerHTML = sum;
}

//==adds operator to the sum and formula string==
function addOperator(operator) {
  //if sum = '0' and operator = '-' overwrite '0' for '-'
  if (sum === '0' && operator === '-') {
    sum = operator;
    formula = operator;
  }
  //if operator is ',' and sum = '0' keep '0' add ',' to string
  else if (operator === '.' && sum === '0') {
    sum = '0' + '.';
    formula = '0' + '.';
  }
  //if sum = '0' and operator isn't '-' return null
  else if (sum == '0' && operator !== '-') {
    return null;
  }
  //if operator is 'x' add 'x' to sum string and '*' to formula string
  else if (operator === 'x') {
    sum = sum + 'x';
    formula = formula + '*';
  }
  //if operator is '÷' add '÷' to sum string and '/' to formula string
  else if (operator === '÷') {
    sum = sum + '÷';
    formula = formula + '/';
  }
  //none cases above counts => add new operator to sum and formula string
  else {
    sum = sum + operator;
    formula = formula + operator;
  }
  //display new sum in the screen
  document.getElementById('screen').innerHTML = sum;
}

//==will search for last operator in formula string==
function operatorSearch() {
  const operatorArr = ['-', '+', '/', '*'];
  let lastOperator = 0;
  //loops through operator array, when new index is larger then previous? => lastoperator = new index
  for (let index = 0; index < operatorArr.length; index++) {
    let search = formula.lastIndexOf(operatorArr[index]);
    if (search >= lastOperator) {
      lastOperator = search;
    }
  }
  return lastOperator;
}

//==calculated last number in percent==
function Percentage() {
  //if sum = '0' no calculation needed
  if (sum == '0') {
    return null;
  }
  //gets the last index of operator in formula string and adds 1 to it
  let numIndex = operatorSearch() + 1;
  //if numIndex value = 1 => there is no operator calculate the hole number in formula and sum
  if (numIndex === 1) {
    formula = formula / 100;
    sum = sum / 100;
  }
  //else cut there first part of the string and add the new calulated percentage
  else {
    let percentage = formula.slice(numIndex) / 100;
    formula = formula.slice(0, numIndex) + percentage;
    sum = sum.slice(0, numIndex) + percentage;
  }
  //display the new sum in the screen
  document.getElementById('screen').innerHTML = sum;
}

//==makes a negative number of last number==
function negativeNum() {
  //if sum = '0' no number to change to negative
  if (sum == '0') {
    return null;
  }
  //gets index of last operator in formula string and adds 1 to it
  let numIndex = operatorSearch() + 1;
  //saves the last part of the formula string
  let endPart = formula.slice(numIndex);
  //if numIndex = 1 => there is no operator, add '-' at the begining of formula and sum string
  if (numIndex === 1) {
    formula = '(-' + formula + ')';
    sum = '(-' + sum + ')';
  }
  //add '-' between the first and last part of formula and sum string
  else {
    formula = formula.slice(0, numIndex) + '(-' + endPart + ')';
    sum = sum.slice(0, numIndex) + '(-' + endPart + ')';
  }
  //display the new sum string in the screen
  document.getElementById('screen').innerHTML = sum;
}

//==clears the screen of the calculator==
function Clear() {
  sum = '0';
  document.getElementById('screen').innerHTML = sum;
}

//calculates the formula string and displays the answer in the screen
function Answer() {
  try {
    let answer = eval(formula);
    sum = answer.toString();
    formula = answer.toString();
    document.getElementById('screen').innerHTML = sum;
  } catch (e) {
    //let people know if the calculation went wrong
    if (e instanceof SyntaxError) {
      document.getElementById('screen').innerHTML = 'Error';
    }
  }
}
