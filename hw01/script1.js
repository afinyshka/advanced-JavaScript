// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// Создаем объект "Музыкальная коллекция"
const musicCollection = {
    albums: [
        {
            title: "Album_1",
            artist: "Singer_1",
            year: "2022",
        },
        {
            title: "Album_2",
            artist: "Singer_2",
            year: "2018",
        },
        {
            title: "Album_3",
            artist: "Singer_3",
            year: "2011",
        },
    ],

    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                return index < this.albums.length ? { value: this.albums[index++], done: false } : { done: true }
            },
        };
    },
};

// Используем цикл for...of для перебора альбомов
for (const album of musicCollection) {
    console.log(
        `${album.title} - ${album.artist} (${album.year})`
    );
}
