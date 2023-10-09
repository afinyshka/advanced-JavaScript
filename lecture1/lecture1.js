
//Symbol -----------------------------------------------------------------
// Создаем символ с описанием
const mySymbol = Symbol('Описание моего символа');

// Выводим описание символа
console.log(mySymbol.description);

// Создаем символ
const mySymbol1 = Symbol();

// Добавляем описание символа в объект
const obj = {};
obj[mySymbol1] = 'Описание моего символа1';

// Выводим описание символа
console.log(obj[mySymbol1]);

// Global Symbol():
// Creating or retrieving symbols using Symbol.for()
const symbol1 = Symbol.for("mySymbol");
const symbol2 = Symbol.for("mySymbol");

console.log(symbol1 === symbol2); // true, because they are the same symbol

// You can also retrieve the key for a symbol using Symbol.keyFor()
const key = Symbol.keyFor(symbol1);
console.log(key); // "mySymbol"

// Symbol.iterator:

let range = {
    from: 1,
    to: 17,
    [Symbol.iterator]() {
        this.current = this.from;
        return this
    },
    next() {
        return this.current <= this.to ? { done: false, value: this.current++ } : {
            done: true
        }
    }
}

console.log(range)

for (let number of range) {
    console.log(number)
}

// Перебор коллекции Мар -------------------------------------------------
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
])
console.log(recipeMap)

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение] 
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry) // огурец, 500 (и так далее)
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`) // огурец: 500 и так далее
})


// Работа с объектами ----------------------------------------------------

// Object.entries поможет создать Мар:
// let map = new Map(Object.entries(obj))

// Object.fromEntries поможет создать объект из Мар:
// let obj = Object.fromEntries(map)

// Set -------------------------------------------------------------------

let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька',
]
console.log(buddies); // печать массива

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies); // мы увидим, что у нас взяли 10 косточек, а собачек было всего 6

let arr = Array.from(uniqueBuddies); // возврат обратно в массив
console.log(arr);

// Пример использования WeakMap: -----------------------------------------

const weakMap = new WeakMap();

const obj1 = {};
const obj2 = {};

weakMap.set(obj1, 'value associated with obj1');
weakMap.set(obj2, 'value associated with obj2');

console.log(weakMap.get(obj1)); // 'value associated with obj1'
console.log(weakMap.get(obj2)); // 'value associated with obj2'

// obj1 = null; // Если больше нет ссылок на obj1, он может быть собран сборщиком мусора
// console.log(weakMap.get(obj1)); // undefined


// Пример использования WeakSet: -----------------------------------------

const weakSet = new WeakSet();

const obj3 = {};
const obj4 = {};

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet.has(obj3)); // true
console.log(weakSet.has(obj4)); // true

// obj3 = null; // Если больше нет ссылок на obj3, он может быть собран сборщиком мусора
// console.log(weakSet.has(obj3)); // false


// Модули ----------------------------------------------------------------

// Экспорт
// Чтобы получить доступ к объектам модулей, надо их экспортировать
// export const name = 'square'; // Ключевое слово export

// export function draw(ctx, length, x, y, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, length, length);
//     return {
//         length: length,
//         x: x,
//         у: у,
//         color: color
//     }
// };

// внутри блоков экспортировать нельзя

// Импорт
// import { name, draw, reportArea, reportPerimeter} from './modules/square.js';
// import * as Square from './modules/square.js'; // Импортировать всё что можно

// /js-examples/modules / basic - modules / modules / square.js
// . / modules / square. js // Точка в начале пути мы можем использовать для обозначения текущей директории