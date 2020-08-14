"use strict";

//================ 1 Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?
//================

/*let num = Number(prompt("Enter a number"));
// v1
//  just for check
// let check;
// check = isDivideBy(num);
// console.log(check);

function isDivideBy(num) {
    debugger
    if (num % 2 === 0) {
        alert("Делится без остатка на '2'");
        return true;
    } else if (num % 3 === 0) {
        alert("Делится без остатка на '3'");
        return true;
    } else if (num % 5 === 0) {
        alert("Делится без остатка на '5'");
        return true;
    } else {
        alert(" Не делится без остатка на '2', '3' или '5'");
        return false;
    }
}

// v2
//  just for check
check = isDivideByVTwo(num);
console.log(check);

function isDivideByVTwo(num) {
    return ((num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0));
} */
//================ End 1



//================ 2 Таски на switch - ДЗ
// Таски на switch - ДЗ
// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна' и так далее. Решите задачу через
// switch-case.
//================
/* let num = Number(prompt("Введите число от 1 до 4"));
let result;

switch (num) {
    case 1:
        { result = "Зима";console.log("Зима"); break; }
    case 2:
        { result = "Весна";console.log("Весна"); break; }
    case 3:
        { result = "Лето";console.log("Лето"); break; }
    case 4:
        { result = "Осень";console.log("Осень"); break; }
    default:
        { console.log("Unknown choice"); break; }
}
 */

// 2) В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна,
//  осень).
/* let month = 2342345;

switch (month) {
    case 1:
    case 2:
    case 12:
        {
            console.log("Зима");
            break;
        }
    case 3:
    case 4:
    case 5:
        {
            console.log("Весна");
            break;
        }
    case 6:
    case 7:
    case 8:
        {
            console.log("Лето");
            break;
        }
    case 9:
    case 10:
    case 11:
        {
            console.log("Осень");
            break;
        }
    default:
        {
            console.log("Wrong data");
            break;
        }
} */


// 3) Запросить у пользователя номер дня недели и вывести соответствующее
// полное строковое название (например, если пользователь вводит 7 - 
// выводится сообщение "воскресенье"). предусмотреть ошибку введения 
//(default)

/* let dayNumber = Number(prompt("Ведите номер дня недели: 1 - Пн, 2 - Вт, 3 - Ср, 4 - Чт, 5 - Пт, 6 - Сб, 7 - Вс"));

switch (dayNumber) {
    case 1:
        { console.log("Понедельник"); break; }
    case 2:
        { console.log("Вторник"); break; }
    case 3:
        { console.log("Среда"); break; }
    case 4:
        { console.log("Четверг"); break; }
    case 5:
        { console.log("Пятница"); break; }
    case 6:
        { console.log("Суббота"); break; }
    case 7:
        { console.log("Воскресенье"); break; }
    default:
        { console.log("Wrong data"); break; }
} */

// 4) В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
/* let day = 0;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        { console.log("Это первая декада"); break; }
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
        { console.log("Это вторая декада"); break; }
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        { console.log("Это третья декада"); break; }
    default:
        { console.log("Wrong data"); break; }
} */
//================ End 2

//================ 3 Таски на циклы (Only FOR)
/* let factorial = Number(prompt("Enter a number"));

console.log(factorialize(factorial));
console.log(factorializeTwo(factorial));

// v1
function factorialize(num) {
    if (num === 0 || num === 1) return 1;

    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

// v2
function factorializeTwo(num) {
    if (num === 0 || num === 1) return 1;

    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
} */

// 2) вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N.
// параметр N задает пользователь
/* let n = Number(prompt("Enter a number"));
let sum = 0;

console.log(sumOfFirstN(n));

function sumOfFirstN(quantity) {
    if (n === 1) return 1;
    if (n === 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (1.0 / i);
    }
    return sum;
} */

// 3) Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12
// то это произведение всех чисел от 5 до 12).
/* let num1 = Number(prompt("Enter a range starting number"));
let num2 = Number(prompt("Enter a range ending number"));

console.log(multRangeOfNmbers(num1, num2));

function multRangeOfNmbers(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        if (num1 === num2) { alert("No range entered"); return num1; }
        if (num1 > num2) {
            // reverse numbers
            num1 += num2;
            num2 = num1 - num2;
            num1 = num1 - num2;

            // or alert a error range and function exit
            // alert("Wrong range");
            // return false;
        }
        for (let i = num1 + 1; i <= num2; i++) {
            num1 *= i;
        }
        return num1;
    } else
        alert("Negative numbers");
    return false;
} */
//================ End 3



//================ 4 Таски на функции
// 1) Функция которая запрашивает число и проверяет простое ли оно
// (простое число делиться без остатка на себя и на единицу)
/* let num = Number(prompt("Enter a number"));

console.log(isPrimeNumber(num));

function isPrimeNumber(num) {
    if (num === 2) return true;
    if (num < 2) return false;
    if (num % 2 === 0) return false;
    for (let i = 3; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
} */

// 2) Создать функцию checkMultiplicity, которая принимает два числа и
// проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

/* const checkMultiplicity = (num1, num2) => (num1 % num2 === 0);

console.log(checkMultiplicity(Number(prompt("Enter num1")),
    Number(prompt("Enter num2")))); */

// 3) Проверка возможности треугольника. Создать функцию которая принимает
// длины треугольника; функция возвращает true если треугольник возможен и false если нет

/* const isTrianglePossible = (lenA, lenB, lenC) =>
    (lenA + lenB > lenC && lenB + lenC > lenA && lenC + lenA > lenB);

console.log(isTrianglePossible(
    Number(prompt("Enter side A of the triangle")),
    Number(prompt("Enter side B of the triangle")),
    Number(prompt("Enter side C of the triangle")), )); */

// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел:
// треугольника, прямоугольника

/* console.log(square(4, 5, 6));

function square(lenA, lenB, lenC = false) {
    if (lenC === false) {
        return (lenA * lenB);
    } else {
        let p = ((lenA + lenB + lenC) / 2);
        return (Math.sqrt(p * (p - lenA) * (p - lenB) * (p - lenC)));
    }
} */
//================ End 4


//================ 5 Таски на объекты
/* // 1.1 создать объект Student который содержит следующие свойства:
// имя, фамилию, пол, контактные данные.
const student = {
    firstName: "firstName",
    lastName: "lastName",
    male: "male",
    phone: "phone",
    eMail: "E-mail",
    address: "address"
};

// 1.2 создать объект, который содержит свойства, о факультете и кафедре.
const uInfo = {
    faculty: "facultyName",
    facultyHead: "Name",
    chair: "chairName",
    chairHead: "Name"
} */


/* // 2.1 Создать числовой массив и проинициализировать его
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let arrTwo = new Array(100);
arrTwo.length = 100;

for (let i = 0; i < arrTwo.length; i++) {
    arrTwo[i] = i;
}
console.log(arrTwo.length); */

/* // 2.1* (усложненное) инициализация с помощью случайных чисел
const arrThree = new Array(100);

for (let i = 0; i < arrThree.length; i++) {
    arrThree[i] = Math.floor(Math.random() * Math.floor(100));
}
console.log(arrThree);

// 2.2 Вывести размер массива
console.log(arrThree.length);

// 2.3 Вывести элементы с четными индексами
// for (let i = 0; i < arrThree.length; i += 2) {
//     console.log(arrThree[i]);
// }

// 2.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// for (let i = 0; i < arrThree.length; i++) {
//     if (arrThree[i] % 2 === 0)
//         console.log(arrThree[i]);
// }

// 2.5 Вывести индексы нулевых элементов (элемент равен нулю)
for (let i = 0; i < arrThree.length; i++) {
    if (arrThree[i] === 0)
        console.log(`element # ${i}`);
}

// 2.6 Подсчитать количество нулевых элементов
let amountOfZeros = 0;
for (let i = 0; i < arrThree.length; i++) {
    if (arrThree[i] === 0) {
        amountOfZeros++;
    }
}
console.log(`There are ${amountOfZeros} zero elements`); */
//================ End 5


//================ 6
// 3.1 Создать функции-конструкторы:
// - Книга(автор, название, год издания, издательство)
// - Электронная версия книги(автор, название, год издания, издательство, формат,
//   электронный номер)
/* function Book(author, name, yearPublishing, publishing) {
    this.author = author;
    this.name = name;
    this.yearPublishing = yearPublishing;
    this.publishing = publishing;
}

function EBook(author, name, yearPublishing, publishing, format, eNumber) {
    this.author = author;
    this.name = name;
    this.yearPublishing = yearPublishing;
    this.publishing = publishing;
    this.format = format;
    this.eNumber = eNumber;
} */


// 4 Дописать функцию конструктор MyArray.
// Должны быть реализованы следующие методы: push, pop, forEach

/* // MyArray
function MyArray() {
    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
    // MyPush
    this.myPush = (function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this;
    })

    // MyPop
    this.myPop = function name(start, amountOfElements = 1) {
        //debugger
        for (let i = 0; i < amountOfElements; i++) {
            arguments[i] = this[start];
            delete(this[start]);
            this.length--;
            start++;
            console.log(arguments[i]);
        }
        // console.log(arguments);  // второй вариант вывода удаленных элементов
        return this;
    };

    // MyForEach
    this.myForEach = (function(func, scope) {
        let len = this.length;
        if (typeof func === 'function') {
            for (let i = 0; i < len; ++i) {
                func.call(scope, this[i], i, this);
            }
        }
    });
}

const myArrOne = new MyArray(1, 1, 2, 3, 4, 5);
console.log(myArrOne);
myArrOne.myPush(555, 666);
console.log("===== PUSH =====", myArrOne);

console.log("===== POP =====");
myArrOne.myPop(2, 3);
console.log(myArrOne);

myArrOne.myForEach((console.log("===== FOREACH =====", myArrOne)), myArrOne.length); */
//================ End 6