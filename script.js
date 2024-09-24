// 1. Переменные и типы данных
let name = "Кристина";  // строка
let age = 24;  // число
let city = "Батайск";  // строка

console.log(typeof name);  // "string"
console.log(typeof age);  // "number"
console.log(typeof city);  // "string"

// 2. Конкатенация строк
let firstName = "Кристина";
let lastName = "Кемаева";
let fullName = firstName + " " + lastName;

console.log(fullName);  // "Кристина Кемаева"

// 3. Преобразование типов
let stringNumber = "123";
let number = Number(stringNumber);

console.log(Number.isInteger(number));  // true (проверка, является ли число целым)

// 4. Методы строк
let text = "JavaScript is fun!";
let substring = text.substring(13, 16).toUpperCase();  // "FUN"

console.log(substring);  // "FUN"

// 5. Шаблонные строки
let product = "ноутбук";
let price = 50000;
let message = `Цена на ${product} составляет ${price} рублей.`;

console.log(message);  // "Цена на ноутбук составляет 50000 рублей."

// 6. Работа с числами
let floatNumber = 12.7;
let roundedNumber = Math.round(floatNumber);

console.log(roundedNumber);  // 13 (округление до ближайшего целого)

// 7. Сравнение значений
let number1 = 42;
let number2 = 35;
let isNumber1Greater = number1 > number2;

console.log(isNumber1Greater);  // true

// 8. Написание литералов
let person = {
  name: "Кристина",
  age: 24,
  favoriteColor: "синий",
  city: "Батайск"  // добавили город проживания
};

console.log(person);  // {name: "Кристина", age: 24, favoriteColor: "синий", city: "Батайск"}

// 9. Методы чисел
let preciseNumber = 12.34567;
let roundedToTwoDecimals = preciseNumber.toFixed(2);

console.log(roundedToTwoDecimals);  // "12.35" (округление до двух знаков после запятой)

// 10. Преобразование строки в массив
let fruits = "apple, orange, banana";
let fruitArray = fruits.split(", ");

console.log(fruitArray);  // ["apple", "orange", "banana"]

// 11. Проверка на NaN
let invalidResult = "abc" / 2;

console.log(Number.isNaN(invalidResult));  // true (проверка на NaN)

// 12. Многострочный текст
let multilineText = `Первая строка.
Вторая строка.
Третья строка.`;

console.log(multilineText);
// Первая строка.
// Вторая строка.
// Третья строка.

// 13. Преобразование данных
let booleanValue = true;
let stringBoolean = String(booleanValue);

console.log(typeof stringBoolean);  // "string" (булево значение преобразовано в строку)

// 14. Использование Symbol
let id = Symbol("id");
let user = {
  [id]: 123,
  name: "Кристина"
};

console.log(user);  // {name: "Кристина", Symbol(id): 123}

// 15. Работа с массивом
let numbersArray = [10, 20, 30, 40, 50];
let arrayLength = numbersArray.length;

console.log(arrayLength);  // 5 (количество элементов в массиве)
