
let str1 = 'What is the World?'
  console.log(str1.indexOf('W'));

  let str2 = `What 
  is 
  the 
  World?`;
  console.log(str2.lastIndexOf('What'));

  let str3 = 'Wtat is the World?';
  console.log(str3.search(/world/i));

  let str4 = 'Wtat is the World?';
console.log(str4.includes('is'));// проверяет наличие подстраки true/false

let textSmall = 'настя';
let textBig = textSmall.replace('н', textSmall[0].toUpperCase());
console.log(textBig);

let randomNum = Math.ceil(Math.random() *100);
console.log(randomNum);

let number = 100;
let numberToString = toString(number);
console.log(numberToString);
