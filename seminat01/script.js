// Задание 1
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.

const reviews = Symbol('reviews')
const rating = Symbol('rating')
const tags = Symbol('tags')

// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).

function addMetadata(book, key, value) {
    if (book[key]) {
        book[key].push(value)
    } else {
        book[key] = [value]
    }
}

function getMetadata(book, key) {
    if (book[key]) {
        return book[key].join(', ') + '.'
    } else {
        return 'Metadata not found'
    }
}

// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

const book01 = {
    name: 'The picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1891,
}

addMetadata(book01, reviews, 'Great book!')
addMetadata(book01, reviews, 'Highly recommended')
addMetadata(book01, rating, 4.5)
addMetadata(book01, tags, 'Fiction')
addMetadata(book01, tags, 'Classic')

console.log('   Book Metadata:')
console.log('Reviews:', getMetadata(book01, reviews))
console.log('Rating:', getMetadata(book01, rating))
console.log('Tags:', getMetadata(book01, tags))

// console.log(book01)

// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать.
// Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг
// const books = [
// {title: "1984", author: "George Orwell" }
// {title: "Brave New World", author: "Aldous Huxley" },
// { title: "Fahrenheit 451", author: "Ray Bradbury" }]

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
]

const library = {
    books: books,
    [Symbol.iterator]: function () {
        let i = 0
        return {
            next: () => {
                return i < this.books.length
                    ? { value: this.books[i++], done: false }
                    : { done: true }
            }
        }
    },
}
console.log(`   Library collection:`)
for (const book of library) {
    console.log(`Title: ${book.title}, Author: ${book.author} - published: ${book.year}`)
}

// Задание 3 (тайминг 15 минут)
// 1. Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь
// приходит Array.from. В этом задании вы научитесь конвертировать коллекции
// DOM-элементов в массивы и работать с ними.
// Дан код html
// <div> Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true"> Element 4</div>
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

const divArray = Array.from(document.querySelectorAll('div'))
// const activeDivs = divArray.filter(element => element.dataset.active);
const activeDivs = divArray.filter(element => element.hasAttribute('data-active'))

console.log(activeDivs)

activeDivs.forEach(element => {
    console.log(element)
});

// Задание 4 (20 минут) ->
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил
// какие уроки и кто из преподавателей вёл данные уроки.
// 1. Мар будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент
// let lessons = new Map());
// 1. Мар: урок => преподаватель ("Математика", "Смирнов"), ("История", "Иванова")
// 2. Мар: студент = Set уроков
// Проверка:
// console.log(* Преподаватель по Математике: ${lessons.get ("Математика")} '); 
// Смирнов console.log (' Уроки Ивана: тут вывод уроков ивана '); I

const lessons = new Map()
lessons.set("Математика", "Смирнов")
lessons.set("История", "Иванова")

const ivanLesssons = new Set().add("Математика").add("История")

const students = new Map()
students.set('Ivan', ivanLesssons)

console.log(`Maths teacher: ${lessons.get("Математика")}`)
// console.log(`Ivans lessons: ${[...students.get("Ivan")]}`)
console.log(`Ivans lessons: ${Array.from(students.get("Ivan")).join(', ')}`)