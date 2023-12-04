# week12js_questions

Вопросы

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?

- ("") двойные, ('') одинарные, /(`) обратные. Обратные кавычки позволяют вставлять в строку какие либо символы, значения(взятые из другого места) или выражения упаковав их в ${} или используя унарный +. Кроме этого (`) позволяют разместить содержимое строки на несколких строках друг под другом.

2. Какими методами можно найти подстроку в строке? Приведите пример.

let str1 = 'What is the World?'
console.log(str1.indexOf('W'/g));

let str2 = `What 
  is 
  the 
  World?`;
console.log(str2.lastIndexOf('What'));

let str3 = 'Wtat is the World?';
console.log(str3.search('worold'/i));

let str4 = 'Wtat is the World?';
console.log(str4.includes(is));// проверяет наличие подстраки true/false

3. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`

let textSmall = 'настя';
let textBig = textSmall.replace('н', textSmall[0].toUpperCase());
console.log(textBig);

4.  Какой метод округления используется для округления числа по математическим правилам?

Math.round(number);

5.  Как сгенерировать случайное число в диапазоне от 1 до 100 включительно?

let randomNum = Math.ceil(Math.random() \*100);
console.log(randomNum);

6.  Какими способами можно преобразовать число в строку в JavaScript?

- поставив число в кавычки
- или функцией string
  let number = 100;
  let numberToString = string(number);
  console.log(numberToString);

7. Что выведет в консоль?

```jsx
let str = "розы такие розы";
str = str.replace("розы", "красивые");

console.log(str);
```

1. Что выведет в консоль?

```jsx
const x = "Солнце";

console.log("The string length is " + x.length);
```

1. Что выведет в консоль?

```jsx
const originalText = "ВелоСипед";
const upperText = originalText.toUpperCase();

console.log(upperText);
```

1. Что выведет в консоль?

```jsx
let str = "розы такие розы";
str.replace("розы", "красивые");

console.log(str);
```

1. Что выведет в консоль?

```jsx
const str = "abcdefghij";

console.log("(2,3): " + str.substring(2, 5));
```
