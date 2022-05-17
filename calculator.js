let sum = '0';
let answer = Number(sum);

const myScript = (number) => {
  if (sum === '0') {
    sum = number.toString();
  } else {
    sum = sum + number.toString();
  }
  document.getElementById('screen').innerHTML = sum;
};

const Clear = () => {
  sum = '0';
  document.getElementById('screen').innerHTML = sum;
};

const callAnswer = () => {
  console.log(answer);
  document.getElementById('screen').innerHTML = answer;
};
