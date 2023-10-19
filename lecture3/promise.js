// // 1.Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке.

// const generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNum = Math.floor(Math.random() * 10) + 1
//             randomNum ? resolve(randomNum) : reject('Rejected!')
//         }, 1000)
//     })
// }
// // console.log(generateRandomNumber())

// generateRandomNumber()
//     .then((number) => {
//         console.log('Random number: ', number)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })

// // 2.Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     reject('Ошибка загрузки данных') // Отклоняем промис с сообщением об ошибке
//                 }
//                 return response.json()
//             })
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных')) // Отклоняем промис с сообщением об ошибке
//     })
// }

// const url = "https://randombig.cat/roar.json"
// fetchData(url)
//     .then((data) => {
//         console.log("Полученные данные:", data)
//     })
//     .catch((error) => {
//         console.error("Ошибка:", error)
//     })

// // 3.Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.
// let checkIfFileExists = (file) => {
// }

// const checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExist = checkIfFileExists(file)
//             if (file) {
//                 resolve('файл существует')
//             } else {
//                 reject('такого файла нет')
//             }
//         }, 2000)
//     })
// }

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// // 4.then Напишите функцию calculateSum(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

// const calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (typeof a === 'number' && typeof b === 'number') {
//             resolve(a + b)
//         } else {
//             reject('not a number')
//         }
//     })
// }

// calculateSum('ff', 5)
//     .then((result) => {
//         console.log('Summa: ', result)
//     })
//     .catch((error) => {
//         console.log('Not a number error: ', error)
//     })

// // 5.Напишите функцию divideNumbers (a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должун выполнять деление первого числа на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.

// const divideNumbers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (typeof a === 'number' && typeof b === 'number') {
//             if (b === 0) {
//                 reject('Division by zero')
//             } else {
//                 resolve(a / b)
//             }
//         } else {
//             reject('Not a number')
//         }
//     })
// }

// divideNumbers(5, 0)
//     .then((result) => {
//         console.log('Devision result: ', result)
//     }).catch((err) => {
//         console.log('Error: ', err)
//     })

// // 6.Цепочки промисов
// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000)
// })
//     .then(function (result) {
//         console.log(result)
//         return new Promise(function (resolve) {
//             setTimeout(() => resolve(result * 2), 1000)
//         })
//     })
//     .then(function (result) {
//         console.log(result)
//         return new Promise(function (resolve) {
//             setTimeout(() => resolve(result * 2), 1000)
//         })
//     })
//     .then(function (result) {
//         console.log(result)
//     })


// 7.finally
let processData = (data) => {
    // Implement your logic to process the data
    // Return the processed result
}

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        // Perform the operation with the data
        let result = processData(data)
        // Complete the Promise
        if (result) {
            resolve(result)
        } else {
            reject('Ошибка операции')
        }
    }).finally(() => {
        console.log('Операция завершена')
    })
}

performOperation('example')
    .then((result) => {
        console.log('Результат операции: ', result)
    }).catch((error) => {
        console.log('Ошибка: ', error)
    })

// Promise.all

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
    .then(result => console.log(result))
    .catch(error => console.error(error))

// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответил на запрос.

function checkServerResponse(urls) {
    const requests = urls.map(url => {
        return fetch(url)
            .then(() => url) // Возвращаем URL сервера, который ответил первым
            .catch(() => null); // Если запрос завершился ошибкой, возвращаем null
    });

    return Promise.race(requests)
        .then(serverURL => {
            if (serverURL) {
                return serverURL;
            } else {
                throw new Error('Все сервера не отвечают');
            }
        });
}

// Пример использования
const serverURLs = [
    'https://server1.example.com',
    'https://server2.example.com',
    'https://server3.example.com'
];

checkServerResponse(serverURLs)
    .then(serverURL => {
        console.log('Первый откликнувшийся сервер:', serverURL);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
